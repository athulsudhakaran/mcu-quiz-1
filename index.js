        var readlineSync=require("readline-sync");
        const chalk = require('chalk');
        var userName=readlineSync.question("May I Have Your Name ");
        console.log (chalk.yellowBright("Hi "+ userName.toUpperCase() +","+ " Welcome to the MCU quiz"));

        readlineSync.keyInYN('Do you want to begin the quiz ?');
        console.log(chalk.cyanBright("BEST OF LUCK FOR THE QUIZ")) ;
        console.log(chalk.redBright("INSTRUCTION!!!!"));
        console.log("Answer via option variables");
        console.log(chalk.green.bold("QUESTIONS"));
        var score=0;
        function quiz(question,answer){
          var userName=readlineSync.question(question);
          if(userName===answer){
            console.log(chalk.green("you are right"));
            score=score+1;
            console.log(chalk.magenta("your score is ",score));
          }
          else{
            console.log(chalk.red("you are wrong"));
            console.log(chalk.green("right answer is ",answer));
          }
          }

        
      var questions=[
        {
          question:"(1) What is ironmans real name? \n  (a)tonystark (b) peterparker " ,
          answer:"a"
        },
        {
          question:"(2) What is Captain America's shield made of? \n (a) vibranium (b) steel ",
          answer:"a"
        } ,
        {
          question:"(3) What does Stark Industries manufacture in Iron Man 1? \n (a) serum (b) weapons ",
          answer:"b"
        },
        {
          question:"(4) Which war did Captain America fight in? \n (a) worldwar1 (b) worldwar2 ",
          answer:"b"
        },
        {
          question:"(5) Who is Thor’s father? \n (a) loki (b)odin ",
          answer:"b"
        }
       
        ]
        for(var i=0;i<questions.length;i++){
         var current=questions[i];
         quiz(current.question,current.answer);
        }
        console.log("overall score is ",score);
        
