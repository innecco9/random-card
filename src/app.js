
import './css/styles.scss';

window.onload = function(){
    
    
    var theSuit = document.querySelector('.suit');
    theSuit.className = 'card suit ' + getRandomsuit();
    
    getRandomsuit();
    
}

function getRandomsuit(){
    var rand = Math.floor(Math.random()* 4)
    switch(rand){
        case 0:
            return 'hearts';
            break;
        case 1:
            return 'clubs'
            break;
        case 2:
            return 'spades'
            break;
        case 3:
            return 'diamonds'
            break;
    }
}
