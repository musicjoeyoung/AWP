 const osc = new Tone.Oscillator().toDestination();
 // repeated event every 8th note
 Tone.Transport.scheduleRepeat((time) => {
   // use the callback time to schedule events
   osc.start(time).stop(time + 0.01);
 }, "8n");
 // transport must be started before it starts invoking events
 Tone.Transport.start();