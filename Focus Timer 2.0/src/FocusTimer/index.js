import * as events from './controls.js'
import state from "./state.js";
import * as timer from './timer.js';
import * as controls from './controls.js';

export function start(minutes, seconds){
  state.minutes = minutes;
  state.seconds = seconds;

  timer.updateDisplay();
  events.registerControls();

}