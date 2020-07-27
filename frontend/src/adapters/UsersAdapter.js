class UsersAdapter {
    constructor() {
        this.baseUrl = 'http://interviewr-api.herokuapp.com/'
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