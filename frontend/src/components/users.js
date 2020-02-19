class Users {
    constructor() {
        this.users = []
        this.adapter = new UsersAdapter()
        this.fetchAndLoadUsers()
        this.initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners(){
        this.newUserName = document.getElementById('new-user-name')
        this.userForm = document.getElementById('new-user-form')
        this.userForm.addEventListener('submit', this.createUser.bind(this))
    }

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
        console.log(this.users)
    }

    createUser(e){
        e.preventDefault()
        console.log(this)
        const value = this.newUserName.value
        this.adapter.createUser(value).then(user => {
            localStorage.setItem("currentUser", user.id)
        })
    }
}