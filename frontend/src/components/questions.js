class Questions {
    constructor() {
        this.questions =[]
        this.adapter = new QuestionsAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadQuestions()
    }

    fetchAndLoadQuestions(){
        this.adapter.getNotes().then(questions => {
            console.log(questions)
        })
    }
}