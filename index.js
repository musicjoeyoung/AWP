let playing = false;

function play(pitch, pic, note) {
  if (playing) {
    console.log("Something else is playing; please wait");
    return;
  } else {
    playing = true;
  }

  const duration = 3;
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease(pitch, duration);
  console.log(`Playing concert pitch ${pitch}`);

  changePicture(pic, duration);
  hello();
  changeNote(note, duration);
}

function changePicture(pic, duration) {
  const imgElem = document.querySelector("#defaultTrumpetImg");

  let src = `images/${pic}valvesDown.png`;
  let originalSrc = imgElem.getAttribute("src");

  imgElem.setAttribute("src", src);

  setTimeout(() => {
    imgElem.setAttribute("src", originalSrc);
    playing = false;
  }, duration * 1000);
}
function hello() {
  console.log("hello world");
}
function changeNote(note, duration) {
  const imgElem = document.querySelector("#chromaticNotes");

  let noteSrc = `images/chromaticPitchesNotated/Trumpet-Chromatic-${note}.png`;
  let originalNote = imgElem.getAttribute("src");

  imgElem.setAttribute("src", noteSrc);

  setTimeout(() => {
    imgElem.setAttribute("src", originalNote);
    playing = false;
  }, duration * 1000);
}

//*********************//

const osc = new Tone.Oscillator().toDestination();
Tone.Transport.bpm.value = 70;
// repeated event every 8th note
Tone.Transport.scheduleRepeat((time) => {
  // use the callback time to schedule events
  osc.start(time).stop(time + 0.01);
}, "8n");
// transport must be started before it starts invoking events
/* Tone.Transport.start(); */
