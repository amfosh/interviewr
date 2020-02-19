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
        this.newQuestionContent = document.getElementById('new-question-content')
        // this.questionForm = document.getElementById('new-question-form')
        // this.questionForm.addEventListener('submit', this.createQuestion.bind(this))
    }

    // createQuestion(e){
    //     e.preventDefault()
    //     this.questionForm.value
    //     const value = this.newQuestionContent.value
    //     this.adapter.createQuestion(value).currentUser.id
    // }

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
            document.getElementById('questionDisplay').innerHTML = this.questions[randomNumber].content;
        }
    }
}
