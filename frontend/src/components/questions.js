class Questions {
    constructor() {
        this.questions = []
        this.adapter = new QuestionsAdapter()
        this.fetchAndLoadQuestions()
        this.newQuestion()
    }

    fetchAndLoadQuestions(){
        this.adapter
        .getQuestions()
        .then(questions => {
            questions.forEach(question => this.questions.push(new Question(question)))
        })
        .then(() => {
            this.newQuestion()
        })
    }
    
    newQuestion() {
        var randomNumber = Math.floor(Math.random() * (this.questions.length));
        document.getElementById('questionDisplay').innerHTML = this.questions[randomNumber].content;
        // console.log(this.questions[randomNumber])
    }
//         if (questionNum >= questions.length) {
//             alert("you've seen all questions");
//             done = true;
//         } else {
//         document.getElementById("question").innerHTML = question[questionNum];
//         }
//     }

// loadQuestion();

// document.getElementById("next").addEventListener("click", function(e) {
//     if (done) {
//         return;
//     }
//     if (checkAnswer()) {
//         ++numCorrect;
//         document.getElementById("numCorrect").innerHTML = numCorrect;
//         loadQuestion();
//     } else {
//         alert("Answer is not correct");
//     }
// });

//     render() {
//         const questionDisplay = document.getElementById('questionDisplay')
//         questionDisplay.innerHTML = this.questions.map(question => `<li>${question.content}</li>`).join('')
//     }
}