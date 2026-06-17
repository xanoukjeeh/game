Put optional background sound loops in this folder.

Every scene/page can have its own background sound.

To use one sound in one scene, open `scene-data.js` and change:

```js
"audio": null,
```

to something like:

```js
"audio": "./assets/audio/night-drive.mp3",
```

You can also set the volume per scene:

```js
"audio": "./assets/audio/night-drive.mp3",
"audioVolume": 0.25,
```

Use numbers between `0` and `1`.
For this project, `0.15` to `0.35` is usually enough.

You can also layer sounds in one scene:

```js
"audio": [
  { "src": "./assets/audio/02-parking-lot.mp3", "volume": 0.1 },
  { "src": "./assets/audio/03-under-tree01.mp3", "volume": 0.15 }
],
```

This is useful when one sound should continue while a new scene-specific sound starts.

Suggested approach for this story:
- early scenes: almost silent car hum
- threat scenes: low drone, distant road, faint streetlight buzz
- violence scenes: less music, more silence and uncomfortable room tone
- survival scenes: breath, wind, far road noise
- hospital scenes: soft clinical ambience

If two scenes use the same audio file, the sound keeps going.
If the next scene uses a different file, the sound fades into the new one.

Keep the files quiet. A subtle loop is usually stronger than dramatic horror music.
