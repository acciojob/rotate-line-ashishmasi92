//your JS code here. If required.


let line = document.querySelector("#line")

let angel=0

 setInterval(()=>{
angel+=2
    line.style.transform = `rotate(${angel}deg)`
},20)