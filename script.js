const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener("click", ()=>{
    question.innerHTML = "I WANT TO BE YOURS!";
    gif.src = 
    "https://media1.tenor.com/m/Vlt20QRcpDgAAAAC/genshin-impact-arlecchino.gif"
});

noBtn.addEventListener('mouseover', ()=> {
    const noBtnRec = noBtn.getBoundingClientRect()
    const maxX = window.innerWidth - noBtnRec.width;
    const maxY = window.innerHeight - noBtnRec.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

})