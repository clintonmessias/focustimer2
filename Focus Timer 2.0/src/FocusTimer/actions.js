import state from './state.js'
import * as el from './elements.js'
import * as timer from './timer.js'
import * as sound from './sounds.js';
import * as controls from './controls.js';

let isRainSound = true;
let isTreeSound = true;
let isCoffeeSound = true;
let isFireSound = true;

export function playCountdown(){
  state.isRunning = !state.isRunning;

  timer.countdown(); 

}

export function reset() {
  state.isRunning = false;
  timer.updateDisplay(0,0);

}

export function upTimer(){
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  if(minutes >= 60) return;

  minutes += 5;

  timer.updateDisplay(minutes, seconds);
}

export function downTimer(){
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  if(minutes <= 0) return;

  minutes -= 5;

  timer.updateDisplay(minutes, seconds);
}


export function playRainSound(){


  if (isRainSound) {
    controls.rainImgButton.style.fill = 'white';
    controls.rainBgButton.style.fill = '#02799D';

    sound.rainSound.play();
    sound.forestSound.pause()
    sound.coffeeShopSound.pause();
    sound.fireSound.pause();

  }else {
    controls.rainImgButton.style.fill = '#323238';
    controls.rainBgButton.style.fill = '#E1E1E6';

    sound.rainSound.pause();
    
  }

  isRainSound = !isRainSound;
}

export function playForestSound(){
  if (isTreeSound) {
    controls.treeImgButton.style.fill = 'white';
    controls.treeBgButton.style.fill = '#02799D';

    sound.forestSound.play();
    sound.rainSound.pause();
    sound.coffeeShopSound.pause();
    sound.fireSound.pause();

  }else {
    controls.treeImgButton.style.fill = '#323238';
    controls.treeBgButton.style.fill = '#E1E1E6';

    sound.forestSound.pause();
    
  }
  isTreeSound = !isTreeSound;
}

export function playCoffeeShopSound(){
  if (isCoffeeSound) {
    controls.coffeeShopImgButton.style.fill = 'white';
    controls.coffeeShopBgButton.style.fill = '#02799D';

    sound.coffeeShopSound.play();
    sound.forestSound.pause();
    sound.rainSound.pause();
    sound.fireSound.pause();

  }else {
    controls.coffeeShopImgButton.style.fill = '#323238';
    controls.coffeeShopBgButton.style.fill = '#E1E1E6';

    sound.coffeeShopSound.pause();
    
  }
  isCoffeeSound = !isCoffeeSound;
}

export function playFireSound(){
  if (isFireSound) {
    controls.fireImgButton.style.fill = 'white';
    controls.fireBgButton.style.fill = '#02799D';

    sound.fireSound.play();
    sound.coffeeShopSound.pause();
    sound.forestSound.pause();
    sound.rainSound.pause();

  }else {
    controls.fireImgButton.style.fill = '#323238';
    controls.fireBgButton.style.fill = '#E1E1E6';

    sound.fireSound.pause();
    
  }
  isFireSound = !isFireSound;
}

