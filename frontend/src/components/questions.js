var done = false; 

class Questions {
    constructor() {
        this.questions = []
        this.adapter = new QuestionsAdapter()
        this.fetchAndLoadQuestions()
        this.initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners() {
        this.btn = document.getElementById("next")
        this.btn.addEventListener("click", this.newQuestion.bind(this))
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
        var randomNumber = Math.floor(Math.random() * (this.questions.length - 1));
        if (randomNumber > this.questions.length - 1) {
            alert("You've seen all questions!");
            done = true;
        } else {
            console.log(this.questions[randomNumber].content)
            document.getElementById('questionDisplay').innerHTML = this.questions[randomNumber].content;
        }

        // document.getElementById("next").addEventListener("click", function(e) {
        //     // alert("Hello World!");
        //     console.log(this)
        //     this.newQuestion().bind(this)
        // })
    }
}


    // render() {
    //     var randomNumber = Math.floor(Math.random() * (this.questions.length));
    //     const questionDisplay = document.getElementById('questionDisplay')
    //     questionDisplay.innerHTML = this.questions[randomNumber].content;
    // }
