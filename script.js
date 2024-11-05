const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const showText = document.querySelector('.showColorText')
const colorText = document.querySelector('.colorText')

let color1 = '#ffffff'
let color2 = '#000000'

const handleRgb = () => {
    const color = "0123456789abcdef"
    let hexCode = '#'
    for (let i = 0; i < 6; i++) {
        hexCode += color[Math.floor(Math.random() * 16)]
    }
    return hexCode
}


const getColor1 = () => {
    color1 = handleRgb();
    document.body.style.backgroundImage = `linear-gradient(to right , ${color1} ,  ${color2} )`
    showText.innerHTML = `Background-image: linear-gradient(to right , ${color1} , ${color2} )`
    btn1.textContent = `${color1} `
}

const getColor2 = () => {
    color2 = handleRgb();
    document.body.style.backgroundImage = `linear-gradient(to right , ${color1},${color2} )`
    showText.innerHTML = `background-image-linear-gradient(to right ,${color1},  ${color2} );`
    btn2.textContent = `${color2}`
}

function copyText(){
    navigator.clipboard.writeText(showText.innerText)
    alert('copy text : ' + showText.innerText)
}

btn1.addEventListener("click", getColor1)
btn2.addEventListener("click", getColor2)