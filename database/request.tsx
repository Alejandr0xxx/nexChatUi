type FormState = {
    email: string;
    password: string;
};

export async function register(form: FormState) {
    try {
        const response = await fetch('http://localhost:3000/api/accounts/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        const logged = await response.json();
        return console.log(`Has iniciado secion correctamente tu token es: ${JSON.stringify(logged)}`);
    }
    catch (err) {
        console.log('An err has occurred:\n', err);
    }
}