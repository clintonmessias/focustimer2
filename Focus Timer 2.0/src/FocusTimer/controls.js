import * as actions from './actions.js';
import * as sound from './sounds.js'
import * as el from './elements.js'
import state from './state.js';

const controls = document.getElementById('buttons');
const buttonRainSound = document.getElementById('cloudRain');
const buttonTreeSound = document.getElementById('tree');
const buttonCoffeeShopSound = document.getElementById('coffeeShop');
const buttonFire = document.getElementById('fire');

export var rainImgButton = document.getElementById('cloudRain').querySelector('svg #Vector');
export var rainBgButton = document.getElementById('cloudRain').querySelector('svg #card');

export var treeImgButton = document.getElementById('tree').querySelector('svg #Vector');
export var treeBgButton = document.getElementById('tree').querySelector('svg #card');

export var coffeeShopImgButton = document.getElementById('coffeeShop').querySelector('svg #Vector');
export var coffeeShopBgButton = document.getElementById('coffeeShop').querySelector('svg #card');

export var fireImgButton = document.getElementById('fire').querySelector('svg #Vector');
export var fireBgButton = document.getElementById('fire').querySelector('svg #card');

export function registerControls(){
  
  controls.addEventListener('click', (event) => {
    let action = event.target.dataset.action;
  
    if(typeof actions[action] != 'function'){
      return;
    }
  
    actions[action]();
  })
}

buttonRainSound.addEventListener('click', () => {
  actions.playRainSound();

});

buttonTreeSound.addEventListener('click', () => {
  actions.playForestSound();


});

buttonCoffeeShopSound.addEventListener('click', () => {
  actions.playCoffeeShopSound();


});

buttonFire.addEventListener('click', () => {
  actions.playFireSound();


});
