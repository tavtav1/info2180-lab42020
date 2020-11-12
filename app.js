window.onload = function(){

  avengers();
}

function avengers(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET","http://localhost:8080/superheroes.php",true);
    xmlHttp.send(null)
    response = xmlHttp.responseText
    console.log(response)
    document.getElementById("searchbutton").onclick = function(){
        alert(xmlHttp.responseText)
    }
} //end of avengers function