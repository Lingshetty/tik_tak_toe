console.log("welcome to the tik tak toe world");
let isgameover = false;
let turn = "X";
const changeTurn=()=>{
    return turn ==="X"?"0":"X";
}
const checkwin=()=>{
    let boxtext = document.getElementsByClassName("boxtext");
   const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(s =>{
        if((boxtext[s[0]].innerText === boxtext[s[1]].innerText) && (boxtext[s[2]].innerText === boxtext[s[1]].innerText) && (boxtext[s[0]].innerText!=="" )){
            document.querySelector(".turnChange").innerText = boxtext[s[0]].innerText +" Wow Won the match 👌🔰";
            isgameover = true;
            document.getElementsByTagName("img")[0].style.width = "200px";
        }
        // else{
        //     document.querySelector(".turnChange").innerText ="oops Better next time🙁😲🙄"
        // }
    })
}
const resetbtn = document.getElementById("restart");
const boxtext = document.getElementsByClassName("boxtext");
resetbtn.addEventListener("click",()=>{
    Array.from(boxtext).forEach(resetvalue=>{
       resetvalue.innerText = "";
       document.getElementsByTagName("img")[0].style.width = "0px";
    })
})

let selectBox = document.getElementsByClassName("box");
Array.from(selectBox).forEach(Element =>{
    let boxtext = Element.querySelector(".boxtext");
    Element.addEventListener("click",()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkwin();
            if(!isgameover){
            document.getElementsByClassName("turnChange")[0].innerText= "Turn for " +turn;
            }
        }
    })
})
