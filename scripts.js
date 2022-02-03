document.querySelector('.btn').onclick = cambioColor;
const actualColor = document.querySelector('h1').textContent;
actualColor.onclick = copiarPortapapeles;

function cambioColor(){
    const codigoColor = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    const getColor = [];
    let color = '#';
    for(let i = 0; i < 6; i++){
        let colorNou = codigoColor[Math.floor(Math.random()* codigoColor.length)];
        getColor.push(colorNou);
    }
    color = (color + getColor.join(''));
    console.log(color);
    document.querySelector('h1').innerHTML= color;
    document.body.style.backgroundColor=color;
}
function copiarPortapapeles(){
    document.execCommand("copy");
}


