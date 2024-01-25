let bestTimeDisplay = document.querySelector("#best-time")
let bestTime = 0;
let timeDisplay = document.querySelector("#your-time")
let shape = document.querySelector("#shape")
let startTime = new Date().getTime();

shape.addEventListener('click', function(){
    let endTime = new Date().getTime();
    let timeTaken = (endTime - startTime) / 1000
    timeDisplay.innerText = timeTaken + " sec"
    shape.style.display = 'none'
    appearAfterDelay()
    if ((timeTaken < bestTime) || (bestTime == 0)){
        bestTime = timeTaken
        bestTimeDisplay.innerText = bestTime + ' sec'
    }
})

function makeShapeAppear(){
    let top = Math.random() * 500
    let left = Math.random() * 1100
    let width = (Math.random() * 300) + 20
    shape.style.display = 'block'
    startTime = new Date().getTime();
    shape.style.top =  top + 'px'
    shape.style.left = left + 'px'
    shape.style.width = width + 'px'
    shape.style.height = width + 'px'
    shape.style.backgroundColor = getRandomColor()
    if (Math.random() > 0.5){
        shape.style.borderRadius = '50%'
    } else {
        shape.style.borderRadius = '0%'
    }
}

function appearAfterDelay(){
    setTimeout(makeShapeAppear, Math.random() * 2400)
}

appearAfterDelay()

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

