const sceneElement = document.querySelector("#scene");
const sceneImage = document.querySelector("#sceneImage");
const intertitle = document.querySelector("#intertitle");
const frameNumber = document.querySelector("#frameNumber");
const hotspot = document.querySelector("#hotspot");
const hotspotCutout = document.querySelector("#hotspotCutout");
const cutoutVisual = document.querySelector("#cutoutVisual");
const transition = document.querySelector("#transition");
const dialogueBox = document.querySelector("#dialogue");
const speaker = document.querySelector("#speaker");
const dialogueText = document.querySelector("#dialogueText");
const dialogueHint = document.querySelector("#dialogueHint");
const sceneAudio = document.querySelector("#sceneAudio");

const TYPE_SPEED = 16;
const ENTRY_FADE_MS = 320;
const TRANSITION_MS = 950;
const MEMORY_FADE_MS = 1900;
const INTERTITLE_FADE_MS = 1800;
const INTERTITLE_HOLD_MS = 6000;
const AUDIO_FADE_MS = 900;
const AUDIO_STOP_FADE_MS = 260;
const MOOD_CLASSES = [
  "mood-opening",
  "mood-threat",
  "mood-violence",
  "mood-survival",
  "mood-aftercare"
];

let sceneIndex = 0;
let dialogueIndex = 0;
let typedCharacters = 0;
let typeTimer = null;
let sceneTimer = null;
let intertitleFadeTimer = null;
let isTyping = false;
let isTransitioning = false;
let hasUserInteracted = false;
const activeAudioTracks = new Map();
const audioFadeTimers = new Map();

function currentScene() {
  return scenes[sceneIndex];
}

function currentLine() {
  return currentScene().dialogue[dialogueIndex];
}

function sceneNumber(scene) {
  if (!scene.image) {
    return sceneIndex + 1;
  }

  const match = scene.image.match(/\/(\d+(?:\.\d+)?)\.png$/);
  return match ? Number(match[1]) : sceneIndex + 1;
}

function setStoryMood(scene) {
  const number = sceneNumber(scene);
  let mood = "mood-opening";

  if (number >= 4 && number < 18) {
    mood = "mood-threat";
  }

  if (number >= 18 && number < 32) {
    mood = "mood-violence";
  }

  if (number >= 32 && number < 46) {
    mood = "mood-survival";
  }

  if (number >= 46) {
    mood = "mood-aftercare";
  }

  document.body.classList.remove(...MOOD_CLASSES);
  document.body.classList.add(mood);
}

function setSceneVisual(scene) {
  sceneElement.classList.remove("is-eye-opening", "is-intertitle", "is-memory-fading");
  sceneImage.classList.remove("has-art", "is-dimmed-out");
  intertitle.classList.remove("is-visible");
  intertitle.setAttribute("aria-hidden", "true");

  if (scene.type === "intertitle") {
    sceneElement.classList.add("is-intertitle");
    frameNumber.textContent = "";
    sceneImage.style.setProperty("--scene-image", "none");
    sceneImage.style.setProperty("--placeholder", "#000");
    sceneImage.setAttribute("aria-label", scene.imageLabel ?? "Intertitle");
    sceneImage.classList.add("has-art");
    return;
  }

  frameNumber.textContent = `beeld ${sceneNumber(scene)}`;
  sceneImage.style.setProperty("--scene-image", `url("${scene.image}")`);
  sceneImage.style.setProperty(
    "--placeholder",
    "linear-gradient(135deg, #24211d, #0f1114 48%, #1d1a18)"
  );
  sceneImage.style.setProperty("--scene-zoom", scene.camera?.zoom ?? 1);
  sceneImage.style.setProperty("--scene-pan-x", scene.camera?.panX ?? "0%");
  sceneImage.style.setProperty("--scene-pan-y", scene.camera?.panY ?? "0%");
  sceneImage.setAttribute("aria-label", scene.imageLabel);

  const artwork = new Image();
  artwork.onload = () => {
    if (currentScene().id === scene.id) {
      sceneImage.classList.add("has-art");
      if (scene.entrance === "eye-open") {
        sceneElement.classList.add("is-eye-opening");
        window.setTimeout(() => {
          sceneElement.classList.remove("is-eye-opening");
        }, 1800);
      }
    }
  };
  artwork.src = scene.image;
}

function configureHotspot(scene) {
  hotspot.classList.remove("is-visible", "has-cutout");
  cutoutVisual.classList.remove("is-visible", "is-hovered", "is-still");
  hotspotCutout.style.removeProperty("--cutout-image");
  cutoutVisual.style.removeProperty("--cutout-image");

  if (!scene.hotspot) {
    hotspot.setAttribute("aria-hidden", "true");
    return;
  }

  hotspot.style.setProperty("--x", scene.hotspot.x);
  hotspot.style.setProperty("--y", scene.hotspot.y);
  hotspot.style.setProperty("--size", scene.hotspot.size);
  hotspot.style.setProperty("--width", scene.hotspot.width ?? scene.hotspot.size);
  hotspot.style.setProperty("--height", scene.hotspot.height ?? scene.hotspot.size);
  hotspot.setAttribute("aria-label", scene.hotspot.label);

  if (scene.hotspot.cutout) {
    hotspot.classList.add("has-cutout");
    hotspotCutout.style.setProperty("--cutout-image", `url("${scene.hotspot.cutout}")`);
    cutoutVisual.style.setProperty(
      "--cutout-image",
      `url("${scene.hotspot.visualCutout ?? scene.hotspot.cutout}")`
    );
    cutoutVisual.style.setProperty("--cutout-x", scene.hotspot.visualX ?? scene.hotspot.x);
    cutoutVisual.style.setProperty("--cutout-y", scene.hotspot.visualY ?? scene.hotspot.y);
    cutoutVisual.style.setProperty(
      "--cutout-width",
      scene.hotspot.visualWidth ?? scene.hotspot.width ?? scene.hotspot.size
    );
    cutoutVisual.style.setProperty(
      "--cutout-height",
      scene.hotspot.visualHeight ?? scene.hotspot.height ?? scene.hotspot.size
    );
    cutoutVisual.classList.toggle("is-still", scene.hotspot.stillCutout === true);
  }

  hotspot.removeAttribute("aria-hidden");
}

function configureIntertitle(scene) {
  dialogueBox.classList.add("is-hidden");
  hotspot.classList.remove("is-visible", "has-cutout");
  hotspot.setAttribute("aria-hidden", "true");
  cutoutVisual.classList.remove("is-visible", "is-hovered", "is-still");
  speaker.textContent = "";
  dialogueText.textContent = "";
  dialogueHint.textContent = "";

  intertitle.innerHTML = scene.text
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  if (scene.nextSceneId && scene.autoAdvance === false) {
    intertitle.insertAdjacentHTML(
      "beforeend",
      `<p class="intertitle__hint">${escapeHtml(scene.hint ?? "Klik om verder te gaan")}</p>`
    );
  }

  intertitle.removeAttribute("aria-hidden");

  intertitleFadeTimer = window.setTimeout(() => {
    intertitle.classList.add("is-visible");
  }, 120);

  if (scene.autoAdvance === false) {
    return;
  }

  intertitleFadeTimer = window.setTimeout(() => {
    intertitle.classList.remove("is-visible");
  }, INTERTITLE_FADE_MS + INTERTITLE_HOLD_MS);

  sceneTimer = window.setTimeout(() => {
    transition.dataset.kind = scene.transition ?? "fade";
    transition.classList.add("is-active");

    window.setTimeout(() => {
      const nextIndex = scenes.findIndex((item) => item.id === scene.nextSceneId);
      loadScene(nextIndex === -1 ? sceneIndex + 1 : nextIndex);
      window.setTimeout(() => {
        transition.classList.remove("is-active");
      }, 180);
    }, TRANSITION_MS);
  }, INTERTITLE_FADE_MS + INTERTITLE_HOLD_MS + INTERTITLE_FADE_MS);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#039;");
}

function configureSceneAudio(scene) {
  const requestedLayers = normalizeAudioLayers(scene);
  const requestedKeys = new Set(requestedLayers.map((layer) => layer.key));

  activeAudioTracks.forEach((track, key) => {
    if (!requestedKeys.has(key)) {
      stopAudioTrack(track, () => {
        activeAudioTracks.delete(key);
      });
    }
  });

  requestedLayers.forEach((layer) => {
    let track = activeAudioTracks.get(layer.key);

    if (!track) {
      track = {
        audio: new Audio(layer.src),
        endTimer: null,
        repeatCount: 0,
        started: false,
        startTimer: null
      };
      track.audio.volume = 0;
      activeAudioTracks.set(layer.key, track);
    }

    if (hasUserInteracted) {
      startAudioLayer(track, layer);
    }
  });
}

function normalizeAudioLayers(scene) {
  if (!scene.audio) {
    return [];
  }

  const layers = Array.isArray(scene.audio) ? scene.audio : [scene.audio];

  return layers.map((layer) => {
    if (typeof layer === "string") {
      const normalized = {
        src: layer,
        volume: scene.audioVolume ?? 0.32,
        loop: true,
        startAt: 0,
        endAt: null,
        delay: 0,
        nextAfterEnd: null,
        playbackRate: 1,
        repeat: 1,
        repeatGap: 0,
        sceneId: scene.id
      };
      return { ...normalized, key: audioLayerKey(normalized) };
    }

    const normalized = {
      src: layer.src,
      volume: layer.volume ?? scene.audioVolume ?? 0.32,
      loop: layer.loop ?? !layer.nextAfterEnd,
      startAt: layer.startAt ?? 0,
      endAt: layer.endAt ?? null,
      delay: layer.delay ?? 0,
      nextAfterEnd: layer.nextAfterEnd ?? null,
      playbackRate: layer.playbackRate ?? 1,
      repeat: layer.repeat ?? 1,
      repeatGap: layer.repeatGap ?? 0,
      sceneId: scene.id
    };
    return { ...normalized, key: audioLayerKey(normalized) };
  }).filter((layer) => layer.src);
}

function audioLayerKey(layer) {
  return [
    layer.src,
    layer.loop ? "loop" : "once",
    layer.startAt ?? 0,
    layer.endAt ?? "",
    layer.delay ?? 0,
    layer.playbackRate ?? 1,
    layer.repeat ?? 1,
    layer.repeatGap ?? 0
  ].join("|");
}

function startAudioLayer(track, layer) {
  const audio = track.audio;

  if (track.started && !audio.paused) {
    fadeAudioElement(audio, layer.volume);
    return;
  }

  clearTimeout(track.startTimer);
  clearTimeout(track.endTimer);

  const begin = () => {
    track.started = true;
    audio.loop = layer.loop;
    audio.playbackRate = layer.playbackRate;
    track.repeatCount = 0;
    try {
      audio.currentTime = layer.startAt;
    } catch {
      audio.addEventListener("loadedmetadata", () => {
        audio.currentTime = layer.startAt;
      }, { once: true });
    }

    const startNextLayer = () => {
      if (!layer.nextAfterEnd || currentScene().id !== layer.sceneId) {
        return;
      }

      const nextLayer = normalizeAudioLayers({
        id: layer.sceneId,
        audio: layer.nextAfterEnd
      })[0];
      const nextTrack = {
        audio: new Audio(nextLayer.src),
        endTimer: null,
        repeatCount: 0,
        started: false,
        startTimer: null
      };
      nextTrack.audio.volume = 0;
      activeAudioTracks.set(nextLayer.key, nextTrack);
      startAudioLayer(nextTrack, nextLayer);
    };

    audio.onended = () => {
      if (track.repeatCount < layer.repeat - 1 && currentScene().id === layer.sceneId) {
        track.repeatCount += 1;
        track.startTimer = window.setTimeout(() => {
          audio.currentTime = layer.startAt;
          audio.play().catch(() => {});
        }, layer.repeatGap * 1000);
        return;
      }

      startNextLayer();
    };

    audio.play().then(() => {
      fadeAudioElement(audio, layer.volume);

      if (layer.endAt !== null) {
        const stopAfterMs = Math.max((layer.endAt - layer.startAt) * 1000, 0);
        track.endTimer = window.setTimeout(() => {
          stopAudioTrack(track);
        }, stopAfterMs);
      }
    }).catch(() => {});
  };

  if (layer.delay > 0) {
    track.startTimer = window.setTimeout(begin, layer.delay * 1000);
    return;
  }

  begin();
}

function stopAudioTrack(track, onComplete) {
  clearTimeout(track.startTimer);
  clearTimeout(track.endTimer);
  track.audio.onended = null;
  fadeAudioElement(track.audio, 0, () => {
    track.audio.pause();
    track.audio.removeAttribute("src");
    onComplete?.();
  }, AUDIO_STOP_FADE_MS);
}

function fadeAudioElement(audio, targetVolume, onComplete) {
  const startVolume = audio.volume;
  const startedAt = performance.now();
  const duration = arguments[3] ?? AUDIO_FADE_MS;

  clearInterval(audioFadeTimers.get(audio));

  const fadeTimer = window.setInterval(() => {
    const progress = Math.min((performance.now() - startedAt) / duration, 1);
    audio.volume = startVolume + (targetVolume - startVolume) * progress;

    if (progress < 1) {
      return;
    }

    clearInterval(fadeTimer);
    audio.volume = targetVolume;
    audioFadeTimers.delete(audio);
    onComplete?.();
  }, 40);

  audioFadeTimers.set(audio, fadeTimer);
}

function startSceneAudioAfterInteraction() {
  if (!hasUserInteracted) {
    return;
  }

  normalizeAudioLayers(currentScene()).forEach((layer) => {
    const track = activeAudioTracks.get(layer.key);

    if (!track || !track.audio.paused) {
      return;
    }

    startAudioLayer(track, layer);
  });
}

function markUserInteraction() {
  hasUserInteracted = true;
  startSceneAudioAfterInteraction();
}

function revealHotspotWhenReady() {
  const scene = currentScene();
  const isLastDialogueEntry = dialogueIndex === scene.dialogue.length - 1;

  if (scene.hotspot && isLastDialogueEntry && !isTyping) {
    dialogueHint.textContent = scene.nextSceneId
      ? "Find the detail that wants to be remembered"
      : "End of prototype";
    hotspot.classList.add("is-visible");
    cutoutVisual.classList.toggle("is-visible", hotspot.classList.contains("has-cutout"));
    return;
  }

  if (!scene.hotspot && isLastDialogueEntry && !isTyping) {
    dialogueHint.textContent = "End of prototype";
    return;
  }

  dialogueHint.textContent = "Click to continue";
}

function typeLine() {
  clearTimeout(typeTimer);
  isTyping = true;
  typedCharacters = 0;
  dialogueText.textContent = "";
  dialogueHint.textContent = "Click to complete the thought";

  const line = currentLine();

  function tick() {
    typedCharacters += 1;
    dialogueText.textContent = line.slice(0, typedCharacters);

    if (typedCharacters < line.length) {
      typeTimer = setTimeout(tick, TYPE_SPEED);
      return;
    }

    isTyping = false;
    revealHotspotWhenReady();
  }

  tick();
}

function finishTyping() {
  clearTimeout(typeTimer);
  dialogueText.textContent = currentLine();
  typedCharacters = currentLine().length;
  isTyping = false;
  revealHotspotWhenReady();
}

function showDialogueEntry() {
  speaker.textContent = currentScene().speaker;
  typeLine();
}

function moveToNextDialogueEntry() {
  const scene = currentScene();

  if (dialogueIndex >= scene.dialogue.length - 1) {
    revealHotspotWhenReady();
    return;
  }

  dialogueBox.classList.add("is-changing");

  window.setTimeout(() => {
    dialogueIndex += 1;
    dialogueBox.classList.remove("is-changing");
    showDialogueEntry();
  }, ENTRY_FADE_MS);
}

function loadScene(index) {
  sceneIndex = index;
  dialogueIndex = 0;
  typedCharacters = 0;
  clearTimeout(typeTimer);
  clearTimeout(sceneTimer);
  clearTimeout(intertitleFadeTimer);
  dialogueBox.classList.remove("is-hidden");

  const scene = currentScene();
  setStoryMood(scene);
  setSceneVisual(scene);
  configureSceneAudio(scene);

  if (scene.type === "intertitle") {
    configureIntertitle(scene);
    return;
  }

  configureHotspot(scene);
  showDialogueEntry();
}

function transitionToNextScene() {
  const nextSceneId = currentScene().nextSceneId;
  const scene = currentScene();

  if (isTransitioning || !nextSceneId) {
    return;
  }

  isTransitioning = true;
  hotspot.classList.remove("is-visible");
  cutoutVisual.classList.remove("is-visible", "is-hovered");
  transition.dataset.kind = scene.transition;
  const transitionDelay = scene.preTransition === "fade-image-to-black"
    ? MEMORY_FADE_MS
    : TRANSITION_MS;

  if (scene.preTransition === "fade-image-to-black") {
    sceneElement.classList.add("is-memory-fading");
    sceneImage.classList.add("is-dimmed-out");
  }

  transition.classList.add("is-active");

  window.setTimeout(() => {
    const nextIndex = scenes.findIndex((scene) => scene.id === nextSceneId);
    loadScene(nextIndex === -1 ? sceneIndex + 1 : nextIndex);
    window.setTimeout(() => {
      transition.classList.remove("is-active");
      isTransitioning = false;
    }, 180);
  }, transitionDelay);
}

dialogueBox.addEventListener("click", () => {
  markUserInteraction();

  if (currentScene().type === "intertitle") {
    return;
  }

  if (isTransitioning) {
    return;
  }

  if (isTyping) {
    finishTyping();
    return;
  }

  moveToNextDialogueEntry();
});

sceneElement.addEventListener("click", () => {
  markUserInteraction();

  if (currentScene().type === "intertitle" && currentScene().autoAdvance === false) {
    transitionToNextScene();
  }
});

hotspot.addEventListener("click", (event) => {
  markUserInteraction();
  event.stopPropagation();
  transitionToNextScene();
});

hotspot.addEventListener("mouseenter", () => {
  cutoutVisual.classList.add("is-hovered");
});

hotspot.addEventListener("mouseleave", () => {
  cutoutVisual.classList.remove("is-hovered");
});

hotspot.addEventListener("focus", () => {
  cutoutVisual.classList.add("is-hovered");
});

hotspot.addEventListener("blur", () => {
  cutoutVisual.classList.remove("is-hovered");
});

window.addEventListener("keydown", (event) => {
  if (event.key !== " " && event.key !== "Enter") {
    return;
  }

  event.preventDefault();
  markUserInteraction();

  if (currentScene().type === "intertitle") {
    if (currentScene().autoAdvance === false) {
      transitionToNextScene();
    }
    return;
  }

  if (isTyping) {
    finishTyping();
    return;
  }

  if (hotspot.classList.contains("is-visible")) {
    hotspot.focus();
  } else {
    moveToNextDialogueEntry();
  }
});

window.addEventListener("pointerdown", markUserInteraction, { once: true });

loadScene(0);
