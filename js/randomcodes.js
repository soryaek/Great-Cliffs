var code=' ';
var getCode ='';
var str= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
var btnvalue;
var codebox;

function disableButton(btnvalue){
    document.getElementById("submit").disabled = btnvalue; 
    if(btnvalue == true){
        //set button and label color translucent
        document.getElementById("submit").style.backgroundColor = "rgba(73,119,209,0.3)";
        document.getElementById("submit").style.color = "rgba(225, 225, 255, 0.5)";
    } else {
        //set button and label color with no transparency
        document.getElementById("submit").style.backgroundColor = "rgb(73,119,209,1)";
        document.getElementById("submit").style.color = "rgba(225, 225, 255, 1)";
    }
}

function generateCode(){
    for (var i=1; i<=8; i++){
        var char = Math.random() * str.length; 
        code += str.charAt(char);
    }
    return code;
}
document.getElementById("codes").innerHTML = generateCode();

//listen to user input code 
codebox = document.getElementById("codeentered");
codebox.addEventListener("input", evaluateCode);

function evaluateCode() {
    getCode = document.getElementById("codeentered").value;
    var charset1 = getCode.trim(); //remove any hidden characters entered
    var charset2 = code.trim(); //remove any hidden characters generated
    if (charset1.length  == charset2.length && charset1 == charset2){
        disableButton(false);
    }
}
