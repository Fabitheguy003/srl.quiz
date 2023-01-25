var questionBox= [
  {
      question : 'Commonly used data types DO NOT Include:',
      choice : ['strings','booleans','alerts','numbers'],
      answer : 'booleans'
  },
  {
      question : 'The condition in an if / else statement is enclosed with _______.',
      choice : ['quotes','curly brackets','parentheses','square brackets'],                          
      answer : 'parentheses'
  },
  {
      question : 'Arrays in javascript can be used to store _______.',
      choice : ['numbers and strings','other ways','booleans','All of the above'],
      answer : 'All of the above'
  },
  {
      question : 'Strings values must be enclosed within ______ when being assigned to variables.',
      choice : ['commas','curly brackets','quotes','parentheses'],
      answer : 'curly brackets'
  },
  {
      question : 'A very useful tool used during developement and debugging for printing content to the debugging is:<',
      choice : ['javascript','terminal/bash','for loops','console.log'],
      answer : 'for loops'
  }
]
var startButton = document.getElementById('start-btn')
var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var  choice0= document.getElementById(' choice0');
var  choice1= document.getElementById(' choice1');
var  choice2= document.getElementById(' choice2');
var  choice3= document.getElementById(' choice3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score = 0;
var counter = 15;


//function to display questions
function displayQuestion(){
  for(var a=0;a<span.length;a++){
      span[a].style.background='none';
  }
  question.innerHTML= 'Q.'+(i+1)+' '+questionBox[i].question;
  choice0.innerHTML= questionBox[i]. choice[0];
  choice1.innerHTML= questionBox[i]. choice[1];
  choice2.innerHTML= questionBox[i]. choice[2];
  choice3.innerHTML= questionBox[i]. choice[3];
  stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBox.length;
}

//function to calculate scores
const result = document.getElementById("result");

function Score(e){
  if(e.innerHTML===questionBox[i].answer && score<questionBox.length)
  {
      score= score+1;
      document.getElementById(e.id).style;
      result.innerHTML = "Correct!";
      console.log(" :Correct!");  
  }
  else{
      document.getElementById(e.id).style;
      result.innerHTML = "Wrong!";
      console.log("Wrong!");  



  }
  setTimeout(nextQuestion,300);



  
}

//function to display next question
function nextQuestion(){
  if(i<questionBox.length-1)
  {
      i=i+1;
      displayQuestion();
      result.innerHTML = " ";                                    

  }
  else{
      points.innerHTML= score+ '/'+ questionBox.length;
      quizContainer.style.display= 'none';
      scorecard.style.display= 'block'
  }
}

//Back to Quiz button event
function RestartQuiz(){
  location.reload();
}

displayQuestion();


startButton.addEventListener('click', StartQuiz)

function StartQuiz() {

  startButton.classList.add('hide')
  quizContainer.classList.remove('hide')
}

setInterval( function(){
    counter--;

    if( counter >= 0){
      id = document.getElementById("count");
      id.innerHTML = counter; 
    }
}, 1000); 

