

import Timer from "./timer.js"
import Controls from "./controls.js"; 
import {elements} from "./elements.js";
import Sound from "./sounds.js";



const {
    buttonPlay,
    buttonStop,
    buttonPause,
    buttonDown,
    buttonUp,
    buttonTree,
    buttonTreeColor,
    buttonRains,
    buttonRainsColor,
    buttonHouse,
    buttonHouseColor,
    buttonFire,
    buttonFireColor,
    minutes,
    minutesDisplay,
    secondsDisplay,

} = elements



const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonDown,
    buttonUp,
    buttonTree,
    buttonTreeColor,
    buttonRains,
    buttonRainsColor,
    buttonHouse,
    buttonHouseColor,
    buttonFire,
    buttonFireColor,
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
     minutes,
    resetControls: Controls.reset,
   
})

const sound = Sound()


buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countdown()
    sound.pressButton()
    
})


buttonStop.addEventListener('click', function(){
    controls.stop()
    timer.reset()
    sound.pressButton()
    
})

buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.pressButton()
})

buttonDown.addEventListener('click', function() {
    timer.minuteDown()
    sound.pressButton()
})

buttonUp.addEventListener('click', function() {
  timer.minuteUp()
  sound.pressButton()

})

buttonTree.addEventListener('click', () => {
    buttonTree.classList.toggle('hide')
    buttonTreeColor.classList.toggle('hide')
    buttonRains.classList.remove('hide')
    buttonRainsColor.classList.add('hide')
    buttonHouse.classList.remove('hide')
    buttonHouseColor.classList.add('hide')
    buttonFire.classList.remove('hide')
    buttonFireColor.classList.add('hide')
    sound.pressButton()
    sound.bgTree.play()
    
 
  })
  
  buttonRains.addEventListener('click', () => {
    buttonRains.classList.toggle('hide')
    buttonRainsColor.classList.toggle('hide')
    buttonTreeColor.classList.add('hide')
    buttonTree.classList.remove('hide')
    buttonHouse.classList.remove('hide')
    buttonHouseColor.classList.add('hide')
    buttonFire.classList.remove('hide')
    buttonFireColor.classList.add('hide')
    sound.bgRains.play()
    sound.pressButton()
    
  })
  
  buttonHouse.addEventListener('click', () => {
    buttonHouse.classList.toggle('hide')
    buttonHouseColor.classList.toggle('hide')
    buttonRains.classList.remove('hide')
    buttonRainsColor.classList.add('hide')
    buttonTree.classList.remove('hide')
    buttonTreeColor.classList.add('hide')
    buttonFire.classList.remove('hide')
    buttonFireColor.classList.add('hide')
    sound.bgHouse.play()
    sound.pressButton()
  })

  buttonFire.addEventListener('click', () => {
    buttonFire.classList.toggle('hide')
    buttonFireColor.classList.toggle('hide')
    buttonHouse.classList.remove('hide')
    buttonHouseColor.classList.add('hide')
    buttonRains.classList.remove('hide')
    buttonRainsColor.classList.add('hide')
    buttonTree.classList.remove('hide')
    buttonTreeColor.classList.add('hide')
     sound.bgFire.play()
     sound.pressButton()
  })

