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
        console.log(localStorage)
    }

    createUser(e){
        e.preventDefault()
        console.log('e.target: ', e.target.childNodes[1].value)
        const value = this.newUserName.value
        this.adapter.createUser(value).then(user => {
            localStorage.setItem("currentUser", user.id)
        })
        // this.userForm.value = ""
        //     btn.setAttribute('value', 'Logout')
        // } else {
        //     localStorage.clear()
        //     location.reload()
        //     btn.setAttribute('value', 'Login')
        // }
    }
}