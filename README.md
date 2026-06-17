# Interactive Narrative Prototype

This is a reusable linear scene system for your graduation project. It is built for a point-and-click narrative experience, not a traditional game.

## How To Open

Open `index.html` in a browser.

## Images

Your illustrations live in the `assets` folder.

The current setup uses one image per story moment. Each file in `assets` has been turned into one scene in `scene-data.js`.

All images are now the same canvas size: `1558 x 1234 px`.

## Edit The Story

All narrative structure lives in `scene-data.js`.

Each story moment has:

- one image
- one text
- one hotspot, except the final image
- one transition to the next image

To edit the text for an image, find that image in `scene-data.js`:

```js
{
  "id": "beat-001",
  "image": "./assets/1.png",
  "speaker": "Narrator",
  "dialogue": [
    "Tekst voor beeld 1. Vervang deze zin met jouw eigen verhaaltekst."
  ],
```

Replace only the sentence inside `dialogue`:

```js
"dialogue": [
  "Jouw echte tekst voor dit beeld."
],
```

Each scene has:

- `image`: illustration path
- `imageLabel`: accessibility description and placeholder text
- `speaker`: small label above the dialogue
- `dialogue`: the typewritten text for this image
- `hotspot`: position, size, and accessible label
- `audio`: optional ambient audio path
- `camera`: subtle zoom and pan
- `transition`: descriptive transition label for future expansion
- `nextSceneId`: the next scene in the linear story

Hotspots use percentages, so they adapt to the screen:

```js
hotspot: {
  label: "Object waar de gebruiker op klikt",
  x: "68%",
  y: "52%",
  size: "92px",
  action: "Ga naar het volgende beeld"
},
nextSceneId: "beat-002"
```

## Interaction Flow

The user reads the text first. When the text is complete, the hotspot appears with a soft hand-drawn glow and small sketchy sparkles. Clicking the hotspot fades into the next image.

There are no puzzles, scores, fail states, inventory, or branching choices.

## Moving Cutout Detail

If you want the clickable detail itself to move, make a transparent PNG cutout of that object and put it here:

```text
assets/cutouts/
```

Then add the cutout path to the hotspot in `scene-data.js`:

```js
"hotspot": {
  "label": "Verder naar beeld 2",
  "x": "50%",
  "y": "50%",
  "size": "120px",
  "action": "Ga naar het volgende beeld",
  "cutout": "./assets/cutouts/beeld-1-detail.png"
}
```

When the text is finished, that cutout appears above the illustration and slowly moves left and right. If you do not want a moving cutout for a scene, leave it as:

```js
"cutout": null
```
