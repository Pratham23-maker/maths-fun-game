var playing=false;
var score;
var action;
var timeremaining;
var correctanswer;
var correctposition;
var wronganswer;
var answer;


//if we click on the start /reset
document.getElementById("startreset").onclick=function(){
    //if we are playing
    if(playing==true){
        location.reload();//reload page
    } 
    else{// if we are not playing 
        //change mode to playing
        playing=true;
        score = 0;//set score to 0
        document.getElementById("scorevalue").innerHTML=score;
    
    show("timeremaining");//show countdown box
    hide("gameover")
    // change button to reset
    timeremaining=60;
    document.getElementById("timeremaingvalue").innerHTML=timeremaining;

    document.getElementById("startreset").innerHTML="Reset Game";
    // start countdown
    startCountdown();
    //generate q&a
    generateQA();
    }

}
for( i=1;i<5;i++){
    document.getElementById("box"+i).onclick=function(){
    if(playing=true){
        if(this.innerHTML==correctanswer){
            score++;
            document.getElementById("scorevalue").innerHTML=score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");

            },1000)
            generateQA();
        } else {
            score--;
            document.getElementById("scorevalue").innerHTML=score;
             hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
                generateQA();

            },1000)
        }

    }

}
}

function startCountdown(){
    action=setInterval(function(){
        timeremaining -=1;
        document.getElementById("timeremaingvalue").innerHTML=timeremaining;
        if(timeremaining==0){
            stopcountdown();
            show("gameover");
            
            document.getElementById("gameover").innerHTML="<p> game over!</p><p> your score is:"+ score+"</p>"
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing=false;
            document.getElementById("startreset").innerHTML="start Game";
        }
    
    },1000);
 
} 
function stopcountdown(){
    clearInterval(action);
}
function hide(id){
    document.getElementById(id).style.display="none";
}
function show(id){
    document.getElementById(id).style.display="block";
}
function generateQA(){
    var x = 1+Math.round(9*Math.random());
    var y =   1+Math.round(9*Math.random());
    correctanswer = x*y;
    document.getElementById("question").innerHTML=x+"x"+y;
    correctposition = 1+Math.round(3*Math.random());
    document.getElementById("box"+correctposition).innerHTML=correctanswer;
    
     answer=[correctanswer];
    for(i=1;i<5;i++){
        if(i!==correctposition){
         do{
            wronganswer=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
         } while(answer.indexOf(wronganswer)>-1)
            document.getElementById("box"+i).innerHTML=wronganswer;
            answer.push(wronganswer);
        }
    }
}