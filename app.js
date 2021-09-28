setInterval(() => {
    let k= new Date()
    let hour=k.getHours();
    let minutes=k.getMinutes();
    let seconds=k.getSeconds(); 
    let hourRotation = (hour*30)+(minutes/60)*30
    let minutesRotation = minutes*6+(seconds/60)*6
    let secondRotation = seconds*6
    let hourHand= document.getElementById("hour")
    let minutesHand= document.getElementById("minutes")
    let secondHand= document.getElementById("second")
    hourHand.style.transform=`rotate(${hourRotation}deg)`
    minutesHand.style.transform=`rotate(${minutesRotation}deg)`
    secondHand.style.transform=`rotate(${secondRotation}deg)`
}, 1000);