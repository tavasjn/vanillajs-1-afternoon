// console.log('The house always wins!');

const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

function setCard(){
    let card = document.getElementById(idInput.value);
    card.style.color = colorInput.value.toLowerCase()
}

const reset = () => {
    document.getElementById('diamonds').style.color = 'grey'
    document.getElementById('hearts').style.color = 'grey'
    document.getElementById('clubs').style.color = 'grey'
    document.getElementById('spades').style.color = 'grey'
}
