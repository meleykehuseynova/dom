let count =0;
let check= true;

const btn = document.getElementById("btn");
btn.addEventListener("click", () =>{
    if(check){
        count++;
        if(count === 10){
            check=false;
        }
    }else{
        count--;
        if(count===1){
            check=true;
        }
    }
     btn.textContent = `Click me ${count}`;
});