let boxs=document.querySelectorAll(".box");
const winnerpattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6], 
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let turn=false;

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn===false){
            box.innerText="X";
            box.style.color="white";
            box.style.backgroundColor="red";
            turn=true;
        }
        else{
            box.innerText="O";
            box.style.color ="black";
            box.style.backgroundColor="green";
            turn=false;
        }
        box.disabled=true;
        checkwinner();
    });
});

const showwinner =() =>{
    for(let j of boxs){
        j.disabled=true;
    }
};
const checkwinner =()=>{
    for(let i of winnerpattern){
        let pos1val=boxs[i[0]].innerText;
        let pos2val=boxs[i[1]].innerText;
        let pos3val=boxs[i[2]].innerText;
        if(pos1val!="" && pos2val !="" && pos3val !=""){
            if(pos1val ===pos2val && pos2val ===pos3val){
                showwinner(pos1val);   
                setTimeout(() => {
                    alert(`Congratulation Winner is ${pos1val}`);
                  }, 100);
            }
        }
    } 
};

const enable=()=>
{
    for(let i of boxs){
        i.disabled=false;
        i.innerText="";
        i.style.backgroundColor ="";
    }
};
const reset=()=>
{
    turn=false;
    enable();
};
let resetbtn=document.querySelector("#reset");
resetbtn.addEventListener("click",reset);

let mode=document.querySelector(".chk");
let body=document.querySelector("body");
let changemode="white";

mode.addEventListener("click", ()=>{
    if(changemode==="white"){
        changemode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
        

    }
    else{
        changemode="white";
        body.classList.add("light");
        body.classList.remove("dark");
    }

});