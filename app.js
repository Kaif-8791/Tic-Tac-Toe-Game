let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#res-btn");
let newbtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let game=document.querySelector(".game");
let con=document.querySelector(".con")

let turnO= true;
const winpat=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turnO){
            box.innerText="O";
            turnO= false;
        }else{
            box.innerText="X";
            turnO= true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableboxes= ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes= ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulation Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}

let checkWinner=()=>{
    for(winner of winpat){
        let posval1=boxes[winner[0]].innerText;
        let posval2=boxes[winner[1]].innerText;
        let posval3=boxes[winner[2]].innerText;

        if(posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1===posval2 && posval1===posval3){
                console.log("Winner",posval1);
                showWinner(posval1);
            }
        }
        
        
    }
    for(row of winpat){
        for(col of  row){
           
            if(posval1 != "" && posval2 != "" && posval3 != ""){
                if(posval1!=posval2 && posval1!=posval3){
                    console.log("Match Tie");
                    showWinner(posval1);
                }
            }
        }
    }
}



newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);