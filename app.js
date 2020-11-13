function show_result(str) {
    "use strict";
    if (window.XMLHttpRequest) {
        xmlhttpreq = new XMLHttpRequest();
    }
    else { 
        xmlhttpreq = new ActiveXObject(".XMLHTTP");
    }
    xmlhttpreq.onreadystatechange = function() { 
        if (this.readyState == 4 && this.status==200) {
            document.getElementById("Results").innerHTML=this.responseText;
        }
    }
    xmlhttpreq.open("http://localhost/info2180-lab4/superheroes.php?q="+str,true);
    xmlhttpreq.send();
}

window.onload = function () {
    "use strict";
    
    document.getElementById("button").onclick = function () {
        newresult(document.getElementById("text_Field").value)
    }
}

