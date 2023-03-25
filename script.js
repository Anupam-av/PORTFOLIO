
for(var i = 0;i<document.querySelectorAll(".icon").length;i++){

    document.querySelectorAll(".icon")[i].addEventListener("mouseover",function(){
        var curr = this;
        curr.classList.add("fa-flip");
        setTimeout(function(){
            curr.classList.remove("fa-flip");
        },1000);

    })

}

for(var i = 0;i<document.querySelectorAll(".backimg").length;i++){

    document.querySelectorAll(".backimg")[i].addEventListener("mouseover",function(){
        var curr = this;
        curr.classList.add("fa-beat");
        setTimeout(function(){
            curr.classList.remove("fa-beat");
        },1000);

    })

}




function change(){
profession.innerHTML=("a programmer");

setTimeout(function(){
    change2();
},1000);
}

function change2(){
profession.innerHTML=("a web developer");
setTimeout(function(){
    change();
},1000);
}


change();

