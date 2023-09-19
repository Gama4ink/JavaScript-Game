

let character = document.getElementById('character');
let block = document.getElementById('block');

const jump =()=>{
    if(character.classList != 'animate'){
        character.classList.add('animate');
    }
   
    setTimeout(()=>{
        character.classList.remove('animate');},450)
}

const checkDead =  setInterval(()=>{
    let characterTop = 
    parseInt(window.getComputedStyle(character).
    getPropertyValue('top'));

    let blockLeft = parseInt(window.getComputedStyle(block).
    getPropertyValue('left'));

    if(blockLeft < 20 && blockLeft > 0 && characterTop >= 130){
      
      block.style.animation = 'none';
      block.style.display = 'none';
        alert('You lose.')
    }});





