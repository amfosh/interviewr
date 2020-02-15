class Questions {
    constructor() {
        this.questions =[]
        this.adapter = new NotesAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadQuestions()
    }

    fetchAndLoadQuestions(){
        this.adapter.getNotes().then(questions => {
            console.log(questions)
        })
    }
}