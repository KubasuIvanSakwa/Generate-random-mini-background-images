const root = document.querySelector('#root')
const div1 = document.createElement('div')

const imageArr = [
    "./therudder.svg", 
    "./world.svg", 
    "./travel.svg", 
]

let newImageSet = []

async function randomize(arr) {
    for(let x = 0; x < 9999; x++) {
        let n = Math.floor(Math.random() * arr.length)
        newImageSet.push(arr[n])
    }
}

console.log(newImageSet)
randomize(imageArr)

newImageSet.forEach(imag => {
    const image = document.createElement('img');
    const randomAngle = Math.floor(Math.random() * 360)
    image.src = imag;
    image.alt = 'image';
    div1.appendChild(image);
    console.log(imag);
    image.style.width = '14px'
    image.style.transform = `rotate(${randomAngle}deg)`
    image.style.opacity = '3%'
    image.style.padding = '10px'
})

div1.style.backgroundColor = 'black'
div1.style.height = '97vh'
div1.style.overflow = 'hidden'

root.appendChild(div1) 
