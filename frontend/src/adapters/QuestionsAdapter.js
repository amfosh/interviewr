class QuestionsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/questions'
    }

    getQuestions() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    // createQuestion(value) {
    //     const question = {
    //         content: value
    //     }
    //     return fetch(this.baseUrl, {
    //         method: 'POST'
    //         body: JSON.stringify{( note )}
    //     })
    // }
}