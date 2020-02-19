class Users {
    constructor() {
        this.users = []
        this.adapter = new UsersAdapter()
        this.fetchAndLoadUsers()
        // this.initBindingsAndEventListeners()
    }

    // initBindingsAndEventListeners(){
    //     this.newUserName = document.getElementById('new-user-name')
    //     this.userForm = document.getElementById('new-user-form')
    //     this.userForm.addEventListener('submit', this.newUser.bind(this))
    // }

    fetchAndLoadUsers(){
        this.adapter
        .getUsers()
        .then(users => {
            users.forEach(user => this.users.push(user))
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        console.log("helllllo")
        console.log(this.users)
      }

    // newUser(e){
    //     e.preventDefault()
    //     console.log("user is being created")
        // this.questionForm.value
        // const value = this.newQuestionContent.value
        // this.adapter.createQuestion(value)
    // }
}