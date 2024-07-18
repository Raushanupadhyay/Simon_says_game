let gameseq=[];
let userseq=[];

let btns = ["yellow","red","purple","green"];
let started = false;
let level = 0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        alert("Game started");
        started=true;

        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);
}

function gameflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    btnflash(randbtn);
}

function checkans(idx){

    if(userseq[idx] == gameseq[idx]){
        if(userseq.length ==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML= `Game Over! your score is <b>${level}</b> <br> press any to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnpress(){
    let btn=this;
    gameflash(btn);

    usercolor= btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");

for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq = [];
    userseq = [];
    level=0;
}



