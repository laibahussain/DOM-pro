let heading0 = document.querySelector("#btn0")
let heading2 = document.querySelector("#btn1")
let isStyle = true
heading2.addEventListener("click",()=> {
  if(!isStyle) {
    isStyle = true
    heading0.innerHTML = "my name is Hussain"
  }
  else{
    isStyle = false
    heading0.innerHTML = "My Name is Laiba"
  }
}) 


let heading = document.querySelector("#btn")
let heading1 = document.querySelector("#btn1")
heading1.addEventListener("click" , ()=>{
    if(heading.src.includes("on")){
    heading.src = "img/off.png"
    heading1.innerHTML = "Click to on"
  }
  else{        
      heading.src = "img/on.png"
      heading1.innerHTML = "Click to off"
  }
})