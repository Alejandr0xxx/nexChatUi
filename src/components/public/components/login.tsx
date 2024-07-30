import styles from '../stylesheets/login_page.module.css';
import logo from '../../../assets/img/public_img/logo.png';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { login } from '../../../../database/request.tsx'
import { AuthContext } from '../../../services/authMemory.tsx';
import Register from './register.tsx';
import { useNavigate } from 'react-router-dom';

type FormState = {
    email: string;
    password: string;
};

export default function Login() {
    const navigate = useNavigate()


    const [form, setForm] = useState<FormState>({
        email: '',
        password: ''
    });

    const { email, password } = form;

    const onChange = (event: ChangeEvent<HTMLInputElement>, key: keyof FormState) => {
        const value = event.target.value;
        setForm(prev => ({ ...prev, [key]: value }))
    };

    const { authDispatch: authDispatch } = useContext(AuthContext)
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const token = await login(form);
        if (!token) return;
        if(token){
            authDispatch({ type: 'setToken', token: token })
            return navigate('/wasa')
        }
    };

    const [onRegister, setOnRegister] = useState(false);
    const onClickRes = () => {
        setOnRegister(!onRegister);
    }

    return (
        <div className={styles.mainContainer}>
            <header>header</header>
            <main className={styles.mainSectionContainer}>
                <div className={styles.formContainer}>
                    <div className={styles.imgContainer}>
                        <img className={styles.img} src={logo} alt="logo" />
                        <span className={styles.span}>NexChat</span>
                    </div>
                    <div className={styles.form}>
                        <form onSubmit={handleSubmit} >
                            <input
                                type="text"
                                placeholder='Correo electrónico'
                                className={styles.input}
                                value={email}
                                onChange={e => onChange(e, 'email')} />
                            <input
                                type="password"
                                placeholder='Contraseña'
                                className={styles.input}
                                value={password}
                                onChange={e => onChange(e, 'password')} />
                            <button className={styles.button}>Login</button>
                            <a className={styles.a} href="">¿Olvidaste tu contraseña?</a>
                        </form>
                        <button className={styles.a} onClick={onClickRes}>Registrarse</button>
                    </div>
                </div>
                {onRegister && <Register setOnRegister={setOnRegister}/>}
            </main>
            <footer className={styles.footer}>footer</footer>
        </div>)
}
