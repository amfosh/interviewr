class App {
    constructor() {
        this.questions = new Questions()
        this.users = new Users()
        this.clearStorage()
    }

    clearStorage() {
        localStorage.clear()
    }
}