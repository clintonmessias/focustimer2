export const minutes = document.getElementById('minutes');
export const seconds = document.getElementById('seconds');
export const buttonTree = document.getElementById('buttonTree');

minutes.onkeypress = (event) => /\d/.test(event.key);
seconds.onkeypress = (event) => /\d/.test(event.key);