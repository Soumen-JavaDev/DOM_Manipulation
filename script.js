let erroMasg=document.querySelector(".error_mas");
let count=1;

let count_valu=document.querySelector(".counter_value");

let clear=document.querySelector("#button3")
let decrementButton=document.getElementById("button2")

function counterinde( str){
    
      if(str =='+'){
        count++;
      }
      if(str == '-' && count !=0){    
            count--;
      }
      if(count <= 0){
        
            erroMasg.style.display="contents";

       
      }else{
        erroMasg.style.display="none";
       
      }
      count_valu.innerHTML=count;
      if (count == 0) {
        clear.style.visibility = "hidden";
        decrementButton.style.cursor = "not-allowed";
        decrementButton.disabled = true;
    } else {
        clear.style.visibility = "visible";
        decrementButton.style.cursor = "pointer";
        decrementButton.disabled = false;
    }
      
}

function allclear() {
  count = 0;
  clear.style.visibility = "hidden";
  count_valu.innerHTML = count;
  erroMasg.style.display = "contents";
  decrementButton.style.cursor = "not-allowed"; 
  decrementButton.disabled = true;
}