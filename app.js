const BUTTONSE1 =document.querySelectorAll("button");

const inputFieldE1=document.getElementById("result");

for(let i=0;i<BUTTONSE1.length;i++) {
    BUTTONSE1[i].addEventListener("click", () =>{
        const buttonValue =BUTTONSE1[i].textContent;
        if(buttonValue==="C"){
            clearResult()
        }
        else if(buttonValue==="="){
            calculateResult()
        }
        else if(buttonValue==="Delete"){
            deleteValue()
        }
        else{
            appendValue(buttonValue);
        }
    });
}

function clearResult(){
    inputFieldE1.value="";
}

function calculateResult(){
    inputFieldE1.value=eval(inputFieldE1.value);
}

function appendValue(buttonValue){
    inputFieldE1.value =inputFieldE1.value+ buttonValue;
    //inputFieldE1.value += buttonValue;

}

function deleteValue(buttonValue){
    inputFieldE1.value=inputFieldE1.value.slice(0,-1);
}