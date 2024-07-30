type formLogin = {
    email: string;
    password: string;
};

export async function login(form: formLogin) {
    try {
        const response = await fetch('http://localhost:3000/api/accounts/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        const logged = await response.json();
        return logged.token;
    }
    catch (err) {
        console.log('An err has occurred:\n', err);
    }
}

type formRegister = {
    username: string,
    email: string,
    password: string
};

export async function register(form: formRegister) {
    try {
        const response = await fetch('http://localhost:3000/api/accounts/register', {
            method: 'POST',
            headers: {
                'Type-Content': 'application/json'
            },
            body: JSON.stringify(form)
        })
        console.log(response)
        const registered = await response.json()
        return registered.token;
    } catch (err) {
        console.log('An err has occurred:\n', err);
    }
}