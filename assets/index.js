var questionBox= [
  {
      question : 'Commonly used data types DO NOT Include:',
      choice : ['strings','booleans','alerts','numbers'],
      answer : 'booleans'
  },
  {
      question : 'The condition in an if / else statement is enclosed with _______.',
      choice : ['quotes','curly brackets','parentheses','square brackets'],                          
      answer : 'parerntheses'
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
var  choice0= document.getElementById('choice0');
var  choice1= document.getElementById(' choice1');
var  choice2= document.getElementById(' choice2');
var  choice3= document.getElementById(' choice3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;