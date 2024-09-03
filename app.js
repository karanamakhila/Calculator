let num=document.querySelectorAll(".num");
let str="";

for(let i=0;i<num.length;i++){
    num[i].addEventListener("click", (e)=>{
        // console.log(num[i].innerText, e.target.innerHTML);
        if(e.target.innerHTML=="="){
            str=eval(str);
            document.querySelector(".input").value=str;
        }
        else if(e.target.innerHTML=="AC"){
            str="";
            document.querySelector(".input").value=str;
        }
        else if(e.target.innerHTML=="1/x"){
            str=1/str;
            document.querySelector(".input").value=str;
        }
        else if(e.target.innerHTML=="x^2"){
            str=str*str;
            document.querySelector(".input").value=str;
        }
        else{
            str=str+e.target.innerHTML;
            // console.log(str);
            document.querySelector(".input").value=str;
        }
    })
    
}