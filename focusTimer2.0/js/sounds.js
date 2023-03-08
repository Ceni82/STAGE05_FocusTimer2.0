export default function () {

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const bgTree = new Audio("./sounds/floresta.wav")
    const bgRains = new Audio("./sounds/chuva.wav")
    const bgHouse = new Audio("./sounds/cafeteria.wav")
    const bgFire = new Audio("./sounds/lareira.wav")



function pressButton(){
    buttonPressAudio.play()
}


function timerEnd() {
    kitchenTimer.play()
    targetSound.loop = true;
}

bgTree.loop = true
bgRains.loop = true
bgHouse.loop = true
bgFire.loop = true

    return {
        pressButton,
        timerEnd,
        bgTree,
        bgRains,
        bgHouse,
        bgFire
}
}