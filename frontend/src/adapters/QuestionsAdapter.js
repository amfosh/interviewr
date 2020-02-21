class QuestionsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/questions'
    }

    getQuestions() {
        return fetch(this.baseUrl).then(res => res.json())
    }
    
    createQuestion(value, id) {
        const question = {
            content: value,
            user_id: id
        }
        return fetch(this.baseUrl,{
            method: 'POST',
            headers: { 
                'content-type': 'application/json'
            },
            body: JSON.stringify({ question }),
        })
        // .then(res => res.json())
    }

    updateQuestion(value, id) {
        const question = {
            content: value,
            user_id: id
        }

        return fetch(`${this.baseUrl}/id`,{
            method: 'PATCH',
            headers: { 
                'content-type': 'application/json'
            },
            body: JSON.stringify({ question }),
        }).then(res => res.json())
    }
}