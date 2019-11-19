(function () {
    function buildQuiz() {
        // This is where the output is stored
        const output = [];

        // Each question thingy
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // Where it will store the lists for the answers
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                  `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
              `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if any of the answers are wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // Show the number of correct answers 
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
      {
          question: "When was Kevin born?",
          answers: {
              a: "November 9th 1969",
              b: "November 19th 1968",
              c: "November 19th 1969"
          },
          correctAnswer: "c"
      },
      {
          question: "What was his first car?",
          answers: {
              a: "1970 Chevorlet Camero",
              b: "1973 Reliant Robin",
              c: "1969 Pontiac Beaumont"
          },
          correctAnswer: "c"
      },
      {
          question: "What was his first job?",
          answers: {
              a: "Pizza Delivery Boy",
              b: "Deliver Newspapers",
              c: "MBLL",
              d: "Hotel Luggage Guy"
          },
          correctAnswer: "b"
      },
      {
          question: "What is his favorite color?",
          answers: {
              a: "Blue",
              b: "Purple",
              c: "Yellow"
          },
          correctAnswer: "b"
      },
      {
          question: "How many siblings does he have?",
          answers: {
              a: "2",
              b: "4",
              c: "1"
          },
          correctAnswer: "a"
      },
       {
           question: "What is his favorite drink?",
           answers: {
               a: "Orange juice",
               b: "Chocolate milk",
               c: "Apple juice",
               d: "Water",
               e: "Vodka"
           },
           correctAnswer: "d",
           correctAnswer: "e"
       },
       {
           question: "When did Kevin meet my mom?",
           answers: {
               a: "October 1998",
               b: "October 1999",
               c: "January 1999"
           },
           correctAnswer: "a"
       },

       {
           question: "What's dads favorite dessert?",
           answers: {
               a: "Ice Cream",
               b: "Cheese Cake",
               c: "Chocolate Cake",
               d: "Apple Pie",
               e: "Bonus Question! Birthday Cake"
           },
           correctAnswer: "b"
       },

       {
           question: "Whats dads favorite car movie?",
           answers: {
               a: "Corvette Summer",
               b: "Italian Job",
               c: "Herbie the love bug"
           },
           correctAnswer: "a"
       },

    ];

    // Displays the quiz
    buildQuiz();

    // When submit is clicked, it will show the results
    submitButton.addEventListener("click", showResults);
})();

//{
//    question: "",
//    answers: {
//        a: "",
//        b: "",
//        c: ""
//    },
//    correctAnswer: ""
//},