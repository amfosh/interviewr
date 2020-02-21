class Question {
    constructor(questionJSON) {
        this.id = questionJSON.id
        this.content = questionJSON.content
        this.ask = questionJSON.ask
        this.dont_ask = questionJSON.dont_ask
        this.user = questionJSON.user_id
    }

    questionHtml() {
        return `<p data-id="${this.id}">${this.content}</p>`
    }

}