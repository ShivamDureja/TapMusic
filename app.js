window.addEventListener("load", () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div'); 
    const visual = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];


    pads.forEach((pad,index) => {
        pad.addEventListener("click",function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubble(index);
        });
    });


    // lets make bubbles
    const createBubble = (index)=>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend", function(){
            visual.removeChild(this);
        })
    };

});
// making Text Animations
const head = document.querySelector('.fancy');

const headText = head.textContent;
const splitHead = headText.split("");
head.textContent = "";
for(let i = 0; i<splitHead.length; i++){
    head.innerHTML += "<span>" + splitHead[i] + "</span>";
}
let char = 0;
let timer = setInterval(onTick,50);

function onTick(){
    const span = head.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char == splitHead.length()){
        complete();
        return;
    }
}
function complete(){
    clearInterval(timer1);
    timer1 = null;
}
