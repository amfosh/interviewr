class Questions {
    constructor() {
        this.questions = []
        this.adapter = new QuestionsAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadQuestions()
    }
    fetchAndLoadQuestions(){
        this.adapter.getQuestions().then(questions => {
            console.log(questions)
        })
    }
}