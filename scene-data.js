const scenes = [
  {
    "id": "intertitle-content-warning",
    "type": "intertitle",
    "imageLabel": "Trigger warning before the story begins",
    "text": [
      "Trigger warning",
      "Deze interactieve vertelling bevat verwijzingen naar seksueel misbruik, geweld, kokhalzende of kotsgeluiden en grafische beelden.",
      "Neem afstand wanneer dat nodig is."
    ],
    "audio": null,
    "autoAdvance": false,
    "hint": "Klik om te beginnen",
    "transition": "fade",
    "nextSceneId": "beat-001"
  },
  {
    "id": "beat-001",
    "image": "./assets/1.png",
    "imageLabel": "Story image 1",
    "speaker": "Narrator",
    "dialogue": [
      "Na een dag op het strand met haar vriendinnen zet Alison haar laatste vriendin af. Alleen rijdt ze verder naar huis."
    ],
    "hotspot": {
      "label": "Stuur",
      "x": "29.7%",
      "y": "34.4%",
      "size": "120px",
      "width": "29.2%",
      "height": "35.66%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-1-stuur.png"
    },
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/01-car-night.mp3",
        "volume": 0.18
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-002"
  },
  {
    "id": "beat-002",
    "image": "./assets/2.png",
    "imageLabel": "Story image 2",
    "speaker": "Narrator",
    "dialogue": [
      "Wanneer Alison haar straat in rijdt, ziet ze dat haar vaste parkeerplek bezet is."
    ],
    "hotspot": {
      "label": "Auto",
      "x": "53.2%",
      "y": "41.4%",
      "size": "120px",
      "width": "29.91%",
      "height": "28.85%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-2-auto.png"
    },
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/02-parking-lot.mp3",
        "volume": 0.18
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "dissolve",
    "nextSceneId": "beat-003"
  },
  {
    "id": "beat-003",
    "image": "./assets/3.png",
    "imageLabel": "Story image 3",
    "speaker": "Narrator",
    "dialogue": [
      "Onder een boom, waar het licht van de straatlantaarns nauwelijks komt, vindt Alison nog een vrije parkeerplek.."
    ],
    "hotspot": {
      "label": "Parkeerplek",
      "x": "54%",
      "y": "81.7%",
      "size": "120px",
      "width": "75.74%",
      "height": "22.2%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-3-parkeerplek.png"
    },
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/02-parking-lot.mp3",
        "volume": 0.12
      },
      {
        "src": "./assets/audio/03-blinking-car.mp3",
        "volume": 0.16
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "crossfade",
    "nextSceneId": "beat-004"
  },
  {
    "id": "beat-004",
    "image": "./assets/4.png",
    "imageLabel": "Story image 4",
    "speaker": "Narrator",
    "dialogue": [
      "Net wanneer Alison wil uitstappen, wordt haar deur opengetrokken. Een onbekende man staat naast de auto."
    ],
    "hotspot": {
      "label": "Mes",
      "x": "14.89%",
      "y": "69.45%",
      "size": "120px",
      "width": "8.15%",
      "height": "15.32%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-4-mes.png",
      "visualCutout": "./assets/cutouts/beeld-4-mes-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/04-keys.mp3",
        "volume": 0.2
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-005"
  },
  {
    "id": "beat-005",
    "image": "./assets/5.png",
    "imageLabel": "Story image 5",
    "speaker": "Narrator",
    "dialogue": [
      "Hij drukt het mes tegen haar nek."
    ],
    "hotspot": {
      "label": "Mestegennek",
      "x": "63.83%",
      "y": "49.51%",
      "size": "120px",
      "width": "72.27%",
      "height": "54.86%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-5-mestegennek.png",
      "visualCutout": "./assets/cutouts/beeld-5-mestegennek-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/05-knife-threat.mp3",
        "volume": 0.22
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-006"
  },
  {
    "id": "beat-006",
    "image": "./assets/6.png",
    "imageLabel": "Story image 6",
    "speaker": "Narrator",
    "dialogue": [
      "De man buigt zich dichter naar haar toe. 'Schuif op.' "
    ],
    "hotspot": {
      "label": "Autostuur",
      "x": "30.04%",
      "y": "61.14%",
      "size": "120px",
      "width": "10.33%",
      "height": "20.91%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-6-autostuur.png",
      "visualCutout": "./assets/cutouts/beeld-6-autostuur-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/06-dark-road.mp3",
        "volume": 0.2
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "dissolve",
    "nextSceneId": "beat-007"
  },
  {
    "id": "beat-007",
    "image": "./assets/7.png",
    "imageLabel": "Story image 7",
    "speaker": "Narrator",
    "dialogue": [
      "De man kijkt haar even aan. 'Ik ben Clinton,' zegt hij rustig. 'Maak je geen zorgen. Ik ga je geen pijn doen.' Hij start de auto. 'Ik heb hem maar een uurtje nodig.'"
    ],
    "hotspot": {
      "label": "Poke",
      "x": "55.78%",
      "y": "56.56%",
      "size": "120px",
      "width": "7%",
      "height": "22%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-7-poke.png",
      "visualCutout": "./assets/cutouts/beeld-7-poke-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.2
      },
      {
        "src": "./assets/audio/01-car-night.mp3",
        "volume": 0.12
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "crossfade",
    "nextSceneId": "beat-008"
  },
  {
    "id": "beat-008",
    "image": "./assets/8.png",
    "imageLabel": "Story image 8",
    "speaker": "Narrator",
    "dialogue": [
      "Alison bevriest. Geen moment denkt ze eraan om de auto uit te springen. Clinton vraagt Alison naar haar naam en of zij een vriend heeft."
    ],
    "hotspot": {
      "label": "Enghoofd",
      "x": "56.39%",
      "y": "34.81%",
      "size": "120px",
      "width": "18.49%",
      "height": "37.28%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-8-enghoofd.png",
      "visualCutout": "./assets/cutouts/beeld-8-enghoofd-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/08-engeman.mp3",
        "volume": 0.18
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-009"
  },
  {
    "id": "beat-009",
    "image": "./assets/9.png",
    "imageLabel": "Story image 9",
    "speaker": "Narrator",
    "dialogue": [
      "Alison liegt. Haar vriend wacht thuis op haar, zegt ze. Misschien laat hij haar dan gaan. Maar Clinton lijkt daar niet om te geven. Hij wil haar gezelschap."
    ],
    "hotspot": {
      "label": "Enghoofd",
      "x": "62.48%",
      "y": "34.08%",
      "size": "120px",
      "width": "36.71%",
      "height": "50.89%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-9-enghoofd.png",
      "visualCutout": "./assets/cutouts/beeld-9-enghoofd-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/08-engeman.mp3",
        "volume": 0.18
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-010"
  },
  {
    "id": "beat-010",
    "image": "./assets/10.png",
    "imageLabel": "Story image 10",
    "speaker": "Narrator",
    "dialogue": [
      "Alison kijkt over haar schouder.. De auto wordt aan de kant gezet. Er moet nog iemand instappen. 'We gaan even mijn vriend ophalen, hij is mij geld verschuldigd.'"
    ],
    "hotspot": {
      "label": "Angstig",
      "x": "50.99%",
      "y": "50.08%",
      "size": "120px",
      "width": "34.02%",
      "height": "65.56%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-10-angstig.png",
      "visualCutout": "./assets/cutouts/beeld-10-angstig-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/10-cararrive.mp3",
        "volume": 0.18
      },
      {
        "src": "./assets/audio/03-blinking-car.mp3",
        "volume": 0.13
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "dissolve",
    "nextSceneId": "beat-011"
  },
  {
    "id": "beat-011",
    "image": "./assets/11.png",
    "imageLabel": "Story image 11",
    "speaker": "Narrator",
    "dialogue": [
      "De vriend van Clinton stapt in de auto. De man straalt duisternis uit."
    ],
    "hotspot": {
      "label": "Deurhendel",
      "x": "51.09%",
      "y": "61.26%",
      "size": "120px",
      "width": "1.86%",
      "height": "8.18%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-11-deurhendel.png",
      "visualCutout": "./assets/cutouts/beeld-11-deurhendel-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/11-dooropening.mp3",
        "volume": 0.2
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "crossfade",
    "nextSceneId": "beat-012"
  },
  {
    "id": "beat-012",
    "image": "./assets/12.png",
    "imageLabel": "Story image 12",
    "speaker": "Narrator",
    "dialogue": [
      "Wanneer de vriend de auto is ingestapt hebben de twee wat onsamenhangende gesprekken. Alison kan dit gesprek niet volgen."
    ],
    "hotspot": {
      "label": "Meneer",
      "x": "52.6%",
      "y": "28.2%",
      "size": "120px",
      "width": "11.04%",
      "height": "13.86%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-12-meneer.png",
      "visualCutout": "./assets/cutouts/beeld-12-meneer-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/08-engeman.mp3",
        "volume": 0.18
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-013"
  },
  {
    "id": "beat-013",
    "image": "./assets/14.png",
    "imageLabel": "Story image 14",
    "speaker": "Narrator",
    "dialogue": [
      "Alison keek de vriend aan, en loopt er een rilling over haar rug. Zijn blik. Ijskoud. Leeg. Alsof hij al had besloten hoe deze nacht zou eindigen."
    ],
    "hotspot": {
      "label": "Spiegel",
      "x": "25.71%",
      "y": "20.75%",
      "size": "120px",
      "width": "51.48%",
      "height": "41.57%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-14-spiegel.png",
      "visualCutout": "./assets/cutouts/beeld-14-spiegel-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/14-engerd.mp3",
        "volume": 0.18
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-014"
  },
  {
    "id": "beat-014",
    "image": "./assets/15.png",
    "imageLabel": "Story image 15",
    "speaker": "Narrator",
    "dialogue": [
      "..."
    ],
    "hotspot": {
      "label": "Closeup",
      "x": "48.72%",
      "y": "53.65%",
      "size": "120px",
      "width": "48.07%",
      "height": "82.09%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-15-closeup.png",
      "visualCutout": "./assets/cutouts/beeld-15-closeup-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/14-engerd.mp3",
        "volume": 0.14
      },
      {
        "src": "./assets/audio/15-jumpscare.mp3",
        "volume": 0.24
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "dissolve",
    "nextSceneId": "beat-015"
  },
  {
    "id": "beat-015",
    "image": "./assets/16.png",
    "imageLabel": "Story image 16",
    "speaker": "Narrator",
    "dialogue": [
      "De laatste lantaarnpalen rijden ze voorbij. Alison beseft zich: ik ga niet meer huis. "
    ],
    "hotspot": {
      "label": "Lantaarnpalen",
      "x": "78.47%",
      "y": "46.35%",
      "size": "120px",
      "width": "27.73%",
      "height": "31.2%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-16-lantaarnpalen.png",
      "visualCutout": "./assets/cutouts/beeld-16-lantaarnpalen-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/02-parking-lot.mp3",
        "volume": 0.16
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "crossfade",
    "nextSceneId": "beat-016"
  },
  {
    "id": "beat-016",
    "image": "./assets/17.png",
    "imageLabel": "Story image 17",
    "speaker": "Narrator",
    "dialogue": [
      "Naarmate ze doorrijden en doorrijden. Komt Alison er achter dat ze naar een verlaten bosgebied rijden. Haar moeder heeft haar altijd verboden om naar dit gedeelte van de stad te gaan."
    ],
    "hotspot": {
      "label": "Dewegbelicht",
      "x": "49.97%",
      "y": "69.53%",
      "size": "120px",
      "width": "100%",
      "height": "60.86%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-17-dewegbelicht.png",
      "visualCutout": "./assets/cutouts/beeld-17-dewegbelicht-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/17-gravel.mp3",
        "volume": 0.18
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-017"
  },
  {
    "id": "beat-017",
    "image": "./assets/18.png",
    "imageLabel": "Story image 18",
    "speaker": "Narrator",
    "dialogue": [
      "Terwijl ze langzaam op de bestemming aankomen, worden de lichten gedimd. De mannen maken duidelijk dat ze haar zometeen gaan verkrachten. 'Ga je je zometeen verzetten?' vraagt Clinton."
    ],
    "hotspot": {
      "label": "Wegbelicht",
      "x": "54.81%",
      "y": "81.77%",
      "size": "120px",
      "width": "82.86%",
      "height": "36.39%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-18-wegbelicht.png",
      "visualCutout": "./assets/cutouts/beeld-18-wegbelicht-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/17-gravel.mp3",
        "volume": 0.18
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-018"
  },
  {
    "id": "beat-018",
    "image": "./assets/19.png",
    "imageLabel": "Story image 19",
    "speaker": "Narrator",
    "dialogue": [
      "Alison schudt angstig haar hoofd. 'Nee.' De mannen beginnen haar bevelen te geven, 'Kleedt jezelf uit!' De vriend stapt de auto uit."
    ],
    "hotspot": {
      "label": "Opendeur",
      "x": "58.76%",
      "y": "33.59%",
      "size": "120px",
      "width": "33.25%",
      "height": "40.52%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-19-opendeur.png",
      "visualCutout": "./assets/cutouts/beeld-19-opendeur-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/11-dooropening.mp3",
        "volume": 0.2
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "dissolve",
    "nextSceneId": "beat-019"
  },
  {
    "id": "beat-019",
    "image": "./assets/20.png",
    "imageLabel": "Story image 20",
    "speaker": "Narrator",
    "dialogue": [
      "Ze probeert zich helemaal af te sluiten en buiten haar lichaam te keren. Zodat ze het gevoel heeft dat het niet met haar gaat gebeuren."
    ],
    "hotspot": {
      "label": "Binnenstappen",
      "x": "40.6%",
      "y": "62.93%",
      "size": "120px",
      "width": "62.39%",
      "height": "50.89%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-20-binnenstappen.png",
      "visualCutout": "./assets/cutouts/beeld-20-binnenstappen-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/20-turningpoint.mp3",
        "volume": 0.22,
        "loop": false,
        "nextAfterEnd": {
          "src": "./assets/audio/06-dark-road.mp3",
          "volume": 0.18,
          "loop": true
        }
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "crossfade",
    "nextSceneId": "beat-020"
  },
  {
    "id": "beat-020",
    "image": "./assets/21.png",
    "imageLabel": "Story image 21",
    "speaker": "Narrator",
    "dialogue": [
      "Clinton doet de meest verschrikkelijke dingen met haar. Dit gebeurt allemaal in de auto. Terwijl de vriend buiten een sigaretje aan het roken is.."
    ],
    "hotspot": {
      "label": "Deauto",
      "x": "55.49%",
      "y": "50%",
      "size": "120px",
      "width": "66.37%",
      "height": "83.55%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-21-deauto.png",
      "visualCutout": "./assets/cutouts/beeld-21-deauto-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%",
      "stillCutout": true
    },
    "audio": null,
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-021"
  },
  {
    "id": "beat-021",
    "image": "./assets/22.png",
    "imageLabel": "Story image 22",
    "speaker": "Narrator",
    "dialogue": [
      "Alison is doodsbang en hoopt door mee te werken in leven te blijven."
    ],
    "hotspot": {
      "label": "Sillouette",
      "x": "42.88%",
      "y": "49.76%",
      "size": "120px",
      "width": "78.37%",
      "height": "81.77%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-23-sillouette.png",
      "visualCutout": "./assets/cutouts/beeld-23-sillouette-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/22-sigaret.mp3",
        "volume": 0.2,
        "loop": false,
        "startAt": 0,
        "endAt": 5
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-022"
  },
  {
    "id": "beat-022",
    "image": "./assets/23.png",
    "imageLabel": "Story image 23",
    "speaker": "Narrator",
    "dialogue": [
      "Haar lichaam reageert erop. Het voelt alsof haar lichaam haar in de steek laat. Ze voelt zich als het ware verraden door haar lichaam en hoopt dat het snel voorbij is."
    ],
    "hotspot": {
      "label": "Handen",
      "x": "88.96%",
      "y": "57.62%",
      "size": "120px",
      "width": "11.23%",
      "height": "84.68%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-22-handen.png",
      "visualCutout": "./assets/cutouts/beeld-22-handen-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/23-nolocate.mp3",
        "volume": 0.2
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "dissolve",
    "nextSceneId": "beat-023"
  },
  {
    "id": "beat-023",
    "image": "./assets/24.png",
    "imageLabel": "Story image 24",
    "speaker": "Narrator",
    "dialogue": [
      "Clinton vraagt aan de vriend of hij ook seks wil met Alison. De vriend antwoordt met: 'Ja, ik wil die teef neuken.'Ook de vriend verkracht Alison, maar het lukt niet zoals hij wil. Clinton zit nog op de bestuurdersstoel.",
      "De sfeer slaat om. De mannen noemen elkaar per ongeluk bij hun echte namen. Frans en Theuns. Alison beseft onmiddellijk wat dat betekent. Als ze hun namen kent, zullen ze haar niet laten gaan. Frans begin met het wurgen van Alison.."
    ],
    "hotspot": {
      "label": "Sigarette",
      "x": "38.06%",
      "y": "49.92%",
      "size": "120px",
      "width": "38.32%",
      "height": "76.9%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-24-sigarette.png",
      "visualCutout": "./assets/cutouts/beeld-24-sigarette-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/24-blowingout.mp3",
        "volume": 0.2,
        "startAt": 3
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "crossfade",
    "nextSceneId": "beat-024"
  },
  {
    "id": "beat-024",
    "image": "./assets/25.png",
    "imageLabel": "Story image 25",
    "speaker": "Narrator",
    "dialogue": [
      "Met brute kracht knijpt Frans haar keel dicht. Alison probeert lucht te krijgen, maar haar lichaam geeft het op. Langzaam vervaagd de wereld om haar heen in het zwart."
    ],
    "hotspot": {
      "label": "Hand",
      "x": "53.72%",
      "y": "46.8%",
      "size": "120px",
      "width": "81.32%",
      "height": "59.81%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-25-hand.png",
      "visualCutout": "./assets/cutouts/beeld-25-hand-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/25-choking.mp3",
        "volume": 0.2
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-025"
  },
  {
    "id": "beat-025",
    "image": "./assets/26.png",
    "imageLabel": "Story image 26",
    "speaker": "Narrator",
    "dialogue": [
      "..."
    ],
    "hotspot": {
      "label": "Verder naar beeld 26",
      "x": "50%",
      "y": "50%",
      "size": "120px",
      "action": "Ga naar het volgende beeld",
      "cutout": null
    },
    "audio": [
      {
        "src": "./assets/audio/26-fainting.mp3",
        "volume": 0.2
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade-to-black",
    "nextSceneId": "beat-026",
    "preTransition": "fade-image-to-black"
  },
  {
    "id": "beat-026",
    "image": "./assets/27.png",
    "imageLabel": "Story image 27",
    "speaker": "Narrator",
    "dialogue": [
      "Alison komt weer bij, ze begrijpt niet wat er gebeurt. Ze ziet een van de mannen boven zich en merkt een herhalende beweging op."
    ],
    "hotspot": {
      "label": "Steken",
      "x": "68.61%",
      "y": "47.12%",
      "size": "120px",
      "width": "25.87%",
      "height": "32.9%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-27-steken.png",
      "visualCutout": "./assets/cutouts/beeld-27-steken-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/05-knife-threat.mp3",
        "volume": 0.22
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "dissolve",
    "nextSceneId": "beat-027",
    "entrance": "eye-open"
  },
  {
    "id": "beat-027",
    "image": "./assets/28.png",
    "imageLabel": "Story image 28",
    "speaker": "Narrator",
    "dialogue": [
      "Dan beseft ze het. De beide mannen steken haar, om en om. Opnieuw. En opnieuw."
    ],
    "hotspot": {
      "label": "Steken",
      "x": "43.71%",
      "y": "49.31%",
      "size": "120px",
      "width": "87.36%",
      "height": "91.9%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-28-steken.png",
      "visualCutout": "./assets/cutouts/beeld-28-steken-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/28-stabbing.mp3",
        "volume": 0.22
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "crossfade",
    "nextSceneId": "beat-028"
  },
  {
    "id": "beat-028",
    "image": "./assets/29.png",
    "imageLabel": "Story image 29",
    "speaker": "Narrator",
    "dialogue": [
      "Door de waas heen hoort Alison Frans iets zeggen. 'Ik wil haar voortplantingsorgaan vernietigen' Alison wordt vervolgens 37 keer in haar buikstreek gestoken. Haar been is aan het trillen, dat maakt de mannen woest."
    ],
    "hotspot": {
      "label": "Steken",
      "x": "74.2%",
      "y": "36.35%",
      "size": "120px",
      "width": "13.03%",
      "height": "25.28%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-29-steken.png",
      "visualCutout": "./assets/cutouts/beeld-29-steken-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/29-stabbing.mp3",
        "volume": 0.2
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-029"
  },
  {
    "id": "beat-029",
    "image": "./assets/30.png",
    "imageLabel": "Story image 30",
    "speaker": "Narrator",
    "dialogue": [
      "Ze beginnen met haar keel door te snijden, dat doen zij 17 keer. Ook dat doen ze afwisselend van elkaar. Ze hoort een verschrikkelijk geluid.."
    ],
    "hotspot": {
      "label": "Denek",
      "x": "49.97%",
      "y": "47.45%",
      "size": "120px",
      "width": "100%",
      "height": "84.76%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-30-denek.png",
      "visualCutout": "./assets/cutouts/beeld-30-denek-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/30-choking.mp3",
        "volume": 0.07
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-030"
  },
  {
    "id": "beat-030",
    "image": "./assets/31.png",
    "imageLabel": "Story image 31",
    "speaker": "Narrator",
    "dialogue": [
      "Alison voelt af en toe hele hevige pijnscheuten, ze hoort wel de geluiden van de steek wonden. Hoe het mes haar vlees in gaat, hoe haar vlees kapot gesneden wordt."
    ],
    "hotspot": {
      "label": "Dedarmen",
      "x": "67.72%",
      "y": "51.26%",
      "size": "120px",
      "width": "33.7%",
      "height": "37.76%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-31-dedarmen.png",
      "visualCutout": "./assets/cutouts/beeld-31-dedarmen-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/30-choking.mp3",
        "volume": 0.07
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "dissolve",
    "nextSceneId": "beat-031"
  },
  {
    "id": "beat-031",
    "image": "./assets/31.5.png",
    "imageLabel": "Story image 31.5",
    "speaker": "Narrator",
    "dialogue": [
      "In de verte hoort ze Frans en Theuns discussiëren of Alison het nog zal overleven: ‘niemand kan dit überhaupt overleven.’"
    ],
    "hotspot": {
      "label": "Demannen",
      "x": "41.46%",
      "y": "57.86%",
      "size": "120px",
      "width": "34.21%",
      "height": "62.16%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-31.5-demannen.png",
      "visualCutout": "./assets/cutouts/beeld-31.5-demannen-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/31.5-walking.mp3",
        "volume": 0.12
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "crossfade",
    "nextSceneId": "beat-032"
  },
  {
    "id": "beat-032",
    "image": "./assets/32.png",
    "imageLabel": "Story image 32",
    "speaker": "Narrator",
    "dialogue": [
      "Haar kleding wordt uit de auto gegooid en ze wordt voor dood achtergelaten."
    ],
    "hotspot": {
      "label": "Kleding",
      "x": "7.38%",
      "y": "65.72%",
      "size": "120px",
      "width": "14.83%",
      "height": "43.84%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-32-kleding.png",
      "visualCutout": "./assets/cutouts/beeld-32-kleding-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/32-dropping.mp3",
        "volume": 0.18
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-033"
  },
  {
    "id": "beat-033",
    "image": "./assets/33.png",
    "imageLabel": "Story image 33",
    "speaker": "Narrator",
    "dialogue": [
      "In het zand schrijft ze de namen: Frans en Theuns."
    ],
    "hotspot": {
      "label": "Fransentheuns",
      "x": "26.12%",
      "y": "26.94%",
      "size": "120px",
      "width": "44.35%",
      "height": "43.11%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-33-fransentheuns.png",
      "visualCutout": "./assets/cutouts/beeld-33-fransentheuns-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/33-zand.mp3",
        "volume": 0.15,
        "playbackRate": 0.55
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-034"
  },
  {
    "id": "beat-034",
    "image": "./assets/34.png",
    "imageLabel": "Story image 34",
    "speaker": "Narrator",
    "dialogue": [
      "Ze schrijft verder, met de kracht die nog over is."
    ],
    "hotspot": {
      "label": "Ilo",
      "x": "27.79%",
      "y": "63.33%",
      "size": "120px",
      "width": "22.79%",
      "height": "15.24%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-34-ilo.png",
      "visualCutout": "./assets/cutouts/beeld-34-ilo-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/33-zand.mp3",
        "volume": 0.15,
        "playbackRate": 0.55
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "dissolve",
    "nextSceneId": "beat-035"
  },
  {
    "id": "beat-035",
    "image": "./assets/35.png",
    "imageLabel": "Story image 35",
    "speaker": "Narrator",
    "dialogue": [
      "I LOVE MOM."
    ],
    "hotspot": {
      "label": "Ilovemom",
      "x": "39.73%",
      "y": "70.95%",
      "size": "120px",
      "width": "46.66%",
      "height": "30.47%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-35-ilovemom.png",
      "visualCutout": "./assets/cutouts/beeld-35-ilovemom-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/33-zand.mp3",
        "volume": 0.15,
        "playbackRate": 0.55
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "crossfade",
    "nextSceneId": "beat-036"
  },
  {
    "id": "beat-036",
    "image": "./assets/36.png",
    "imageLabel": "Story image 36",
    "speaker": "Narrator",
    "dialogue": [
      "Ze ligt daar, tussen lichaam en overleven, maar iets in haar weigert te stoppen."
    ],
    "hotspot": {
      "label": "Zeligt",
      "x": "52.41%",
      "y": "50.97%",
      "size": "120px",
      "width": "70.73%",
      "height": "84.52%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-36-zeligt.png",
      "visualCutout": "./assets/cutouts/beeld-36-zeligt-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/26-fainting.mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/25-choking.mp3",
        "volume": 0.07
      },
      {
        "src": "./assets/audio/30-choking.mp3",
        "volume": 0.07
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-037"
  },
  {
    "id": "beat-037",
    "image": "./assets/37.png",
    "imageLabel": "Story image 37",
    "speaker": "Narrator",
    "dialogue": [
      "Een moment lijkt Alison los te komen van haar lichaam. Van bovenaf ziet ze zichzelf liggen. Het vervult haar met verdriet. Maar diep vanbinnen weet ze één ding zeker.Dit is niet het einde. Ze gaat vechten."
    ],
    "hotspot": {
      "label": "Zeligtbovenzicht",
      "x": "55.68%",
      "y": "41.86%",
      "size": "120px",
      "width": "31.19%",
      "height": "44.73%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-37-zeligtbovenzicht.png",
      "visualCutout": "./assets/cutouts/beeld-37-zeligtbovenzicht-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/26-fainting.mp3",
        "volume": 0.07
      },
      {
        "src": "./assets/audio/25-choking.mp3",
        "volume": 0.045
      },
      {
        "src": "./assets/audio/30-choking.mp3",
        "volume": 0.045
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "dissolve",
    "nextSceneId": "beat-038"
  },
  {
    "id": "beat-038",
    "image": "./assets/38.png",
    "imageLabel": "Story image 38",
    "speaker": "Narrator",
    "dialogue": [
      "Blijven liggen is geen optie. Kruipen is niet genoeg. Als Alison wil overleven, moet ze opstaan."
    ],
    "hotspot": {
      "label": "Kruipen",
      "x": "61.71%",
      "y": "80.55%",
      "size": "120px",
      "width": "73.68%",
      "height": "31.2%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-38-kruipen.png",
      "visualCutout": "./assets/cutouts/beeld-38-kruipen-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/42-lopen.mp3",
        "volume": 0.14,
        "startAt": 6
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "crossfade",
    "nextSceneId": "beat-039"
  },
  {
    "id": "beat-039",
    "image": "./assets/39.png",
    "imageLabel": "Story image 39",
    "speaker": "Narrator",
    "dialogue": [
      "Ze voelt iets nats bij haar been, haar darmen liggen buiten haar lichaam."
    ],
    "hotspot": {
      "label": "Darmen",
      "x": "61.17%",
      "y": "41.98%",
      "size": "120px",
      "width": "77.6%",
      "height": "76.9%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-39-darmen.png",
      "visualCutout": "./assets/cutouts/beeld-39-darmen-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/42-lopen.mp3",
        "volume": 0.14,
        "startAt": 6
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-040"
  },
  {
    "id": "beat-040",
    "image": "./assets/40.png",
    "imageLabel": "Story image 40",
    "speaker": "Narrator",
    "dialogue": [
      "Ze pakt haar spijkerblouse, dat bindt ze om haar buik om de organen bij elkaar te houden."
    ],
    "hotspot": {
      "label": "Darmen",
      "x": "39.7%",
      "y": "67.3%",
      "size": "120px",
      "width": "39.02%",
      "height": "37.28%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-40-darmen.png",
      "visualCutout": "./assets/cutouts/beeld-40-darmen-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/25-choking.mp3",
        "volume": 0.055
      },
      {
        "src": "./assets/audio/30-choking.mp3",
        "volume": 0.05
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-041"
  },
  {
    "id": "beat-041",
    "image": "./assets/41.png",
    "imageLabel": "Story image 41",
    "speaker": "Narrator",
    "dialogue": [
      "Met alle kracht die ze nog heeft, probeert Alison overeind te komen. Haar spijkerblouse houdt ze stevig tegen haar buik gedrukt. Maar zodra ze staat, merkt ze dat er iets niet klopt. Alles om haar heen is zwart. Haar hoofd zakt naar achteren."
    ],
    "hotspot": {
      "label": "Hoofd",
      "x": "55.87%",
      "y": "24.27%",
      "size": "120px",
      "width": "6.93%",
      "height": "10.86%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-41-hoofd.png",
      "visualCutout": "./assets/cutouts/beeld-41-hoofd-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/41-sand.mp3",
        "volume": 0.16
      },
      {
        "src": "./assets/audio/25-choking.mp3",
        "volume": 0.055
      },
      {
        "src": "./assets/audio/30-choking.mp3",
        "volume": 0.05
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "dissolve",
    "nextSceneId": "beat-042"
  },
  {
    "id": "beat-042",
    "image": "./assets/41.5.png",
    "imageLabel": "Story image 41.5",
    "speaker": "Narrator",
    "dialogue": [
      "Ze kijkt naar de maan. Haar gezichtsveld valt weg. Ze voelt bij haar nek, haar hele hand verdwijnt in haar nek. Ze is praktisch onthoofd."
    ],
    "hotspot": {
      "label": "Maanlicht",
      "x": "36.62%",
      "y": "19.85%",
      "size": "120px",
      "width": "33.63%",
      "height": "39.79%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-41.5-maanlicht.png",
      "visualCutout": "./assets/cutouts/beeld-41.5-maanlicht-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/42-lopen.mp3",
        "volume": 0.14,
        "startAt": 6
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "crossfade",
    "nextSceneId": "beat-043"
  },
  {
    "id": "beat-043",
    "image": "./assets/42.png",
    "imageLabel": "Story image 42",
    "speaker": "Narrator",
    "dialogue": [
      "Met haar spijkerblouse tegen haar buik gedrukt strompelt Alison verder. Met één hand houdt ze haar verwonde lichaam bijeen. Met de andere ondersteunt ze haar hoofd, zodat ze kan blijven lopen."
    ],
    "hotspot": {
      "label": "Hoofdvasthouden",
      "x": "43.36%",
      "y": "40.44%",
      "size": "120px",
      "width": "7.06%",
      "height": "19.04%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-42-hoofdvasthouden.png",
      "visualCutout": "./assets/cutouts/beeld-42-hoofdvasthouden-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/42-lopen.mp3",
        "volume": 0.14,
        "startAt": 6
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-044"
  },
  {
    "id": "beat-044",
    "image": "./assets/43.png",
    "imageLabel": "Story image 43",
    "speaker": "Narrator",
    "dialogue": [
      "Het voelt voor haar alsof ze een oerkracht heeft gekregen, die haar het zetje heeft geven om naar de weg te lopen. Het voelt bijna of ze vliegt."
    ],
    "hotspot": {
      "label": "Indelucht",
      "x": "45.8%",
      "y": "56.65%",
      "size": "120px",
      "width": "40.18%",
      "height": "69.29%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-43-indelucht.png",
      "visualCutout": "./assets/cutouts/beeld-43-indelucht-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/43-wonder.mp3",
        "volume": 0.18
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-045"
  },
  {
    "id": "beat-045",
    "image": "./assets/44.png",
    "imageLabel": "Story image 44",
    "speaker": "Narrator",
    "dialogue": [
      "Uitgeput valt Alison neer op de weg. Ze blijft liggen en kijkt omhoog naar de nachtelijke hemel. Ze denkt: Wat is het ergste dat er nu nog kan gebeuren? Dat iemand me aanrijdt? Er komt een auto aangereden, haar reddende engel. "
    ],
    "hotspot": {
      "label": "Opdeweg",
      "x": "82.8%",
      "y": "76.62%",
      "size": "120px",
      "width": "34.34%",
      "height": "26.09%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-44-opdeweg.png",
      "visualCutout": "./assets/cutouts/beeld-44-opdeweg-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/42-lopen.mp3",
        "volume": 0.14,
        "startAt": 6
      },
      {
        "src": "./assets/audio/25-choking.mp3",
        "volume": 0.055
      },
      {
        "src": "./assets/audio/30-choking.mp3",
        "volume": 0.05
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "dissolve",
    "nextSceneId": "beat-046"
  },
  {
    "id": "beat-046",
    "image": "./assets/45.png",
    "imageLabel": "Story image 45",
    "speaker": "Narrator",
    "dialogue": [
      "Hij belt het alarmnummer en blijft bij haar. Ze voelt zich veilig, eindelijk."
    ],
    "hotspot": {
      "label": "Telefoon",
      "x": "35.01%",
      "y": "39.18%",
      "size": "120px",
      "width": "30.94%",
      "height": "53.32%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-45-telefoon.png",
      "visualCutout": "./assets/cutouts/beeld-45-telefoon-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/02-parking-lot.mp3",
        "volume": 0.08
      },
      {
        "src": "./assets/audio/45-beller.mp3",
        "volume": 0.16
      },
      {
        "src": "./assets/audio/25-choking.mp3",
        "volume": 0.055
      },
      {
        "src": "./assets/audio/30-choking.mp3",
        "volume": 0.05
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "crossfade",
    "nextSceneId": "beat-047"
  },
  {
    "id": "beat-047",
    "image": "./assets/46.png",
    "imageLabel": "Story image 46",
    "speaker": "Narrator",
    "dialogue": [
      "Hij houdt haar handvast, en beloofd haar haar hand niet los te laten tot de ambulance arriveert."
    ],
    "hotspot": {
      "label": "Deengel",
      "x": "67.88%",
      "y": "61.1%",
      "size": "120px",
      "width": "41.72%",
      "height": "77.71%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-46-deengel.png",
      "visualCutout": "./assets/cutouts/beeld-46-deengel-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/46-ambulance.mp3",
        "volume": 0.075
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-048"
  },
  {
    "id": "beat-048",
    "image": "./assets/47.png",
    "imageLabel": "Story image 47",
    "speaker": "Narrator",
    "dialogue": [
      "Hij rijdt mee in de ambulance, en blijft bij haar. Hij houdt haar hand vast, en beloofd haar dat hij haar hand niet los zal laten."
    ],
    "hotspot": {
      "label": "Ambulance",
      "x": "42.59%",
      "y": "45.83%",
      "size": "120px",
      "width": "45.83%",
      "height": "55.92%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-47-ambulance.png",
      "visualCutout": "./assets/cutouts/beeld-47-ambulance-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/46-ambulance.mp3",
        "volume": 0.18
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-049"
  },
  {
    "id": "beat-049",
    "image": "./assets/48.png",
    "imageLabel": "Story image 48",
    "speaker": "Narrator",
    "dialogue": [
      "Zodra ze bij het ziekenhuis zijn. Wordt ze direct naar de operatiekamer gestuurd. Haar leven hangt aan een zijden draadje."
    ],
    "hotspot": {
      "label": "Ambulancebed",
      "x": "61.94%",
      "y": "54.09%",
      "size": "120px",
      "width": "76.06%",
      "height": "70.83%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-48-ambulancebed.png",
      "visualCutout": "./assets/cutouts/beeld-48-ambulancebed-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/42-lopen.mp3",
        "volume": 0.1,
        "startAt": 6
      },
      {
        "src": "./assets/audio/48-running.mp3",
        "volume": 0.14
      },
      {
        "src": "./assets/audio/48-mensen.mp3",
        "volume": 0.15
      },
      {
        "src": "./assets/audio/48-chaos.mp3",
        "volume": 0.14
      },
      {
        "src": "./assets/audio/48-rennen.mp3",
        "volume": 0.16,
        "loop": false,
        "repeat": 3,
        "repeatGap": 3
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "dissolve",
    "nextSceneId": "beat-050"
  },
  {
    "id": "beat-050",
    "image": "./assets/49.png",
    "imageLabel": "Story image 49",
    "speaker": "Narrator",
    "dialogue": [
      "Wanneer de arts Alison voor het eerst ziet, schrikt hij. Nog nooit eerder heeft hij iemand met zulke ernstige verwondingen levend het ziekenhuis zien binnenkomen. Toch geeft hij niet op. Hij is vastbesloten haar leven te redden."
    ],
    "hotspot": {
      "label": "Ziekenhuisdeur",
      "x": "31.45%",
      "y": "49.55%",
      "size": "120px",
      "width": "62.97%",
      "height": "49.43%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-49-ziekenhuisdeur.png",
      "visualCutout": "./assets/cutouts/beeld-49-ziekenhuisdeur-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/49-hospital.mp3",
        "volume": 0.18
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "intertitle-operation-success"
  },
  {
    "id": "intertitle-operation-success",
    "type": "intertitle",
    "imageLabel": "Black screen with centered intertitle text",
    "text": [
      "De operatie is geslaagd.",
      "Maanden van herstel volgen.",
      "Artsen noemen haar overleving een wonder.",
      "Maar voor Alison was opgeven nooit een optie."
    ],
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.08
      }
    ],
    "transition": "fade",
    "nextSceneId": "beat-051"
  },
  {
    "id": "beat-051",
    "image": "./assets/50.png",
    "imageLabel": "Story image 50",
    "speaker": "Narrator",
    "dialogue": [
      "Terwijl Alison herstelt in het ziekenhuis, krijgt ze bezoek van de politie. Ondanks alles wat ze heeft meegemaakt, deelt ze ieder detail dat ze zich kan herinneren. De namen Frans en Theuns is ze niet vergeten.."
    ],
    "hotspot": {
      "label": "Politie",
      "x": "76.09%",
      "y": "63.01%",
      "size": "120px",
      "width": "31.45%",
      "height": "63.7%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-50-politie.png",
      "visualCutout": "./assets/cutouts/beeld-50-politie-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/50-hart.mp3",
        "volume": 0.18
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-052"
  },
  {
    "id": "beat-052",
    "image": "./assets/51.png",
    "imageLabel": "Story image 51",
    "speaker": "Narrator",
    "dialogue": [
      "De twee mannen zijn bekend bij de politie vanwege geweld tegen vrouwen. Zo kunnen zij snel gearresteerd worden."
    ],
    "hotspot": {
      "label": "Siren",
      "x": "51.32%",
      "y": "35.37%",
      "size": "120px",
      "width": "28.88%",
      "height": "16.21%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-51-siren.png",
      "visualCutout": "./assets/cutouts/beeld-51-siren-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/51-police.mp3",
        "volume": 0.16
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "beat-053"
  },
  {
    "id": "beat-053",
    "image": "./assets/52.png",
    "imageLabel": "Story image 52",
    "speaker": "Narrator",
    "dialogue": [
      "De heren hebben de dag na de moord op Alison lekker ontbeten met het bebloede mes waarmee ze haar 54 keer hebben gestoken. De politie staat aan hun deur en ze staan versteld als zij horen dat zij schuldig zijn voor poging tot moord. Frans kan niet geloven dat Alison nog leeft, hij bekent alles."
    ],
    "hotspot": {
      "label": "Cufs",
      "x": "49.97%",
      "y": "27.71%",
      "size": "120px",
      "width": "100%",
      "height": "55.51%",
      "action": "Ga naar het volgende beeld",
      "cutout": "./assets/cutouts/beeld-52-cufs.png",
      "visualCutout": "./assets/cutouts/beeld-52-cufs-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/51-police.mp3",
        "volume": 0.13
      },
      {
        "src": "./assets/audio/52-handcuffs.mp3",
        "volume": 0.18
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "dissolve",
    "nextSceneId": "beat-054"
  },
  {
    "id": "beat-054",
    "image": "./assets/53.png",
    "imageLabel": "Story image 53",
    "speaker": "Narrator",
    "dialogue": [
      "Alison moet de mannen identificeren en gaat op een nare manier, ze wordt oog in oog gezet met de daders. In een line up, moet zij de daders aanwijzen. Dit is de eerste keer dat zij in Zuid-Afrika gespiegeld glas gebruiken."
    ],
    "hotspot": {
      "label": "Youaremyfire",
      "x": "47.72%",
      "y": "72.69%",
      "size": "120px",
      "width": "43.52%",
      "height": "12.4%",
      "action": "Ga naar de afsluitende context",
      "cutout": "./assets/cutouts/beeld-53-youaremyfire.png",
      "visualCutout": "./assets/cutouts/beeld-53-youaremyfire-full-canvas-backup.png",
      "visualX": "50%",
      "visualY": "50%",
      "visualWidth": "100%",
      "visualHeight": "100%"
    },
    "audio": [
      {
        "src": "./assets/audio/53-distant.mp3",
        "volume": 0.12
      }
    ],
    "camera": {
      "zoom": 1.03,
      "panX": "0%",
      "panY": "0%"
    },
    "transition": "fade",
    "nextSceneId": "intertitle-femicide-info"
  },
  {
    "id": "intertitle-femicide-info",
    "type": "intertitle",
    "imageLabel": "Informative text about femicide",
    "text": [
      "Femicide is geen incident.",
      "Haat tegen vrouwen is een wereldwijd probleem, en Zuid-Afrika is geen uitzondering.",
      "Jaarlijks overlijden ongeveer 40 tot 48 vrouwen door moord of doodslag.",
      "In meer dan de helft van deze gevallen, en tot wel 70% bij vrouwen tussen de 20 en 60 jaar."
    ],
    "audio": [
      {
        "src": "./assets/audio/Eerie Horror Music - Lurking in the Shadows (Slow Strings Composition).mp3",
        "volume": 0.08
      }
    ],
    "autoAdvance": false,
    "transition": "fade",
    "nextSceneId": null
  }
];
