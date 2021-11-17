var Score=0;
function update_score(){
Score=Score+1;
document.getElementById("score").innerHTML="Score : "+Score;
}
function SaveScore(){
    localStorage.setItem("score",Score)
}
function Next(){
    window.location="activity_2.html";
}
function getScore(){
    Score=localStorage.getItem("score");
    document.getElementById("update").innerHTML="<h1> score : "+Score+"</h1>";
}
function addUser(){
    player1name=document.getElementById("Player1").value;
    player2name=document.getElementById("Player2").value;
    localStorage.setItem("Player1Name",player1name);
    localStorage.setItem("Player2Name",player2name);
    window.location.replace("game_page.html");
}
