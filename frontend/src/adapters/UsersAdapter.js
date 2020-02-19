class UsersAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/users'
    }

    getUsers() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    createUser(value) {
        const user = {
            name: value
        }
        return fetch(this.baseUrl,{
            method: 'POST',
            headers: { 
                'content-type': 'application/json'
            },
            body: JSON.stringify({ user }),
        }).then(res => res.json())
    }
}