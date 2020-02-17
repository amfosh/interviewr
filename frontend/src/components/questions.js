var done = false;

class Questions {
    constructor() {
        this.questions = []
        this.adapter = new QuestionsAdapter()
        this.fetchAndLoadQuestions()
        // this.newQuestion()
    }

    fetchAndLoadQuestions(){
        this.adapter
        .getQuestions()
        .then(questions => {
            questions.forEach(question => this.questions.push(new Question(question)))
        })
        .then(() => {
            // this.fetchAndLoadQuestions()
            this.newQuestion()
        })
    }

    newQuestion() {
        var randomNumber = Math.floor(Math.random() * (this.questions.length - 1));
        if (randomNumber > this.questions.length - 1) {
            alert("You've seen all questions!");
            done = true;
        } else {
            // console.log(this.questions);
            document.getElementById('questionDisplay').innerHTML = this.questions[randomNumber].content;
            // newQuestion();
        }
    }
    //     document.getElementById("button").addEventListener("click", function() {
    //         if (done) {
    //             return;
    //         }
    //         else
    //             newQuestion();
    //         });
    //     }
    // }


    // render() {
    //     var randomNumber = Math.floor(Math.random() * (this.questions.length));
    //     const questionDisplay = document.getElementById('questionDisplay')
    //     questionDisplay.innerHTML = this.questions[randomNumber].content;
    // }
}