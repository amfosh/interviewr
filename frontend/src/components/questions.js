class Questions {
    constructor() {
        this.questions = []
        this.adapter = new QuestionsAdapter()
        this.fetchAndLoadQuestions()
    }

    fetchAndLoadQuestions(){
        this.adapter
        .getQuestions()
        .then(questions => {
            questions.forEach(question => this.questions.push(new Question(question)))
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        const questionDisplay = document.getElementById('questionDisplay')
        questionDisplay.innerHTML = this.questions.map(question => `<li>${question.content}</li>`).join('')
    }
}