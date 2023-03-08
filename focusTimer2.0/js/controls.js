 export default function Controls ({

    buttonPlay,
    buttonPause,
    buttonStop,
    buttondown,
    buttonUp
 }){
 


function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')

   
 
}

function stop() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  
}

function pause() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
}  

function down () {
    
}

function up () {

}
    
function getMinutes() {

}


    return {
        stop,
        play,
        pause,
        down,
        up,
        getMinutes
 }

}
