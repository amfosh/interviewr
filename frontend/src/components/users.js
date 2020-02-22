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
        const btn = e.target.childNodes[3]
        const btnText = e.target.childNodes[3].value
        if (btnText == 'Login') {
            const value = this.newUserName.value
            this.adapter.createUser(value).then(user => {
                localStorage.setItem("currentUser", user.id)
            })
            this.userForm.value = ""
            btn.setAttribute('value', 'Logout')
        } else {
            localStorage.clear()
            location.reload()
            btn.setAttribute('value', 'Login')
        }
    }
}