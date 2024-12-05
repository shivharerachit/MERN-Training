function mOver(obj) {
    obj.style.backgroundColor="blue"
}
function mOut(obj) {
    obj.style.backgroundColor="aqua"
}

var a = document.getElementById("i1")
a.addEventListener('keyup',(event)=>{
    if(event.key=="ArrowUp"){
        console.log("UP")
        a.style.backgroundColor="red"

        let h = document.getElementById("heading")
        let t = h.style.bottom || 0
        h.style.bottom = (parseInt(t) + 10)+"px"
    }
    if(event.key=="ArrowDown"){
        console.log("UP")
        a.style.backgroundColor="red"

        let h = document.getElementById("heading")
        let t = h.style.bottom || 0
        h.style.bottom = (parseInt(t) - 10)+"px"
    }
    if(event.key=="ArrowRight"){
        console.log("UP")
        a.style.backgroundColor="red"

        let h = document.getElementById("heading")
        let t = h.style.right || 0
        h.style.right = (parseInt(t) + 10)+"px"
    }
    if(event.key=="ArrowLeft"){
        console.log("UP")
        a.style.backgroundColor="red"

        let h = document.getElementById("heading")
        let t = h.style.left || 0
        h.style.left = (parseInt(t) - 10)+"px"
    }
})
// "=>" to define a function and storing it in a variable
const c = (a,b) =>{
    console.log("Hello",a)
}
c("lmao")