  function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if(!audio)return; //stop the function from running completly
    audio.currentTime = 0; // rewind back to the beggining
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e){
    if(e.propertyName !== 'transform')return;//skip if it is not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown',playSound);
