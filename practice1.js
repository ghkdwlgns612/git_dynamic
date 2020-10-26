

let gnb = document.getElementById("gnb"),
    toggle = document.getElementById("toggle");

toggle.onclick = function(){
    let attr = gnb.getAttribute("class");
    
    if(attr=="active"){
        gnb.removeAttribute("class");
        return false;
    }
    else{
        gnb.setAttribute("class","active");
        return false;
    }

}

