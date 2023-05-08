// 1
setTimeout(() => {
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`;
    const div1 = document.querySelector(`#first`)
    div1.prepend(p1)
}, 1000)

// 2
setTimeout(() => {
    const p1 = document.createElement(`p`)
    p1.innerText = `One`;
    const nestingDiv = document.querySelector(`#timeout-nesting`);
    nestingDiv.append(p1);

    setTimeout(() => {
        const p2 = document.createElement(`p`)
        p2.innerText = `Two`
        nestingDiv.append(p2);
    }, 1000)
}, 2000)

// 3a
num = 1
const stop = setInterval(() => {
    console.log(num++);
}, 1000)

// 3b
const stopButton = document.querySelector(`button`);

stopButton.addEventListener(`click`, () => {
    clearInterval(stop);
})


// BONUS
// 4
const countdownDiv = document.querySelector(`#countdown`);
let displayTime = document.createElement(`p`);
let seconds = 120;
let minutes = 2;



const twoMinTimer = setInterval(() => {
    let time = minutes + ":" + seconds % 60 + "0";
    
    if (seconds % 60 == 0){
        time =   minutes + ":" + seconds % 60 + "0";
        minutes--;
    }else if (seconds % 60 <= 9){
        time =   minutes + ":0" + seconds % 60;
    }else{
        time = minutes + ":" + seconds % 60;
    }
    seconds--;
    
    if (time == "0:00"){
        time = "TIME IS UP"
        clearInterval(twoMinTimer);
    }

    displayTime.innerText = time;
    countdownDiv.append(displayTime);
}, 1000)