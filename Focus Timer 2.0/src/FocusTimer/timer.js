import * as el from './elements.js'
import state from './state.js'
import * as actions from './actions.js'

export const countdown = () =>{
  if(!state.isRunning){
    return
  }
  clearTimeout(state.isCountdowID);

  let newMinutes = Number(el.minutes.textContent);
  let newSeconds = Number(el.seconds.textContent);
  
  newSeconds--

  if(newSeconds < 0){
    newSeconds = 59;
    newMinutes--
  }

  if (newMinutes < 0){
    actions.reset()
    return;
  }

  state.minutes = newMinutes;
  state.seconds = newSeconds;

  updateDisplay();
 state.isCountdowID = setTimeout(() => countdown(), 1000);

}

export const updateDisplay = (minutes, seconds) => {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, '0');
  el.seconds.textContent = String(seconds).padStart(2, '0');

}