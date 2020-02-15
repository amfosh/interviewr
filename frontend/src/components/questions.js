class Questions {
    constructor() {
        this.questions = []
        this.adapter = new QuestionsAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadQuestions()
    }

    fetchAndLoadQuestions(){
        this.adapter
        .getQuestions()
        .then(questions => {
            questions.forEach(question => this.questions.push(question))
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        const questionDisplay = document.getElementById('questionDisplay')
        questionDisplay.innerHTML = 'Questions go here'
        console.log('My questions are', this.questions)
    }
}