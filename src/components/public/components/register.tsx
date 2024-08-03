import { ChangeEvent, FormEvent, useContext, useState } from "react";
import styles from '../stylesheets/register.module.css';
import xButton from '../../../assets/img/public_img/x-button.png';
import { register } from "../../../../database/request";
import { AuthContext } from "../../../services/authMemory";


type RegisterProps = {
    setOnRegister: (value: boolean) => void;
};
export default function Register({ setOnRegister }: RegisterProps) {
    type formState = {
        username: string;
        email: string;
        password: string;
        confPassword: string;
    }

    const [form, setForm] = useState<formState>({
        username: '',
        email: '',
        password: '',
        confPassword: '',
    })
    const { username, email, password, confPassword } = form;

    const onChange = (e: ChangeEvent<HTMLInputElement>, key: keyof formState) => {
        const value = e.target.value;
        setForm(prev => ({ ...prev, [key]: value }))
    };

    const {authDispatch: authDispatch }= useContext(AuthContext)

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const resForm = {username, email, password};
        console.log(resForm)
        if(password !== confPassword) return alert('Passwords do not match!');
        const token = await register(resForm)
        console.log(token)
        authDispatch({type: 'setToken', token: token })
    }
    return (
        <div className={styles.modalContainer}>
            <div className={styles.subModalContainer}>
                <div className={styles.spanContainer}>
                    <span className={styles.span}>Registro</span>
                    <button onClick={() => setOnRegister(false)} className={styles.xButton} id="x-button" ><img className={styles.xImg} src={xButton} alt="xButton" /></button>                </div>
                <form onSubmit={onSubmit} className={styles.formContainer}>
                    <input type="text"
                        className={styles.input}
                        placeholder="usuario"
                        value={username}
                        onChange={e => onChange(e, 'username')} />
                    <input type="text"
                        className={styles.input}
                        placeholder="Email"
                        value={email}
                        onChange={e => onChange(e, 'email')} />
                    <input type="password"
                        className={styles.input}
                        placeholder="contraseña"
                        value={password}
                        onChange={e => onChange(e, 'password')} />
                    <input type="password"
                        className={styles.input}
                        placeholder="confirmar contraseña"
                        value={confPassword}
                        onChange={e => onChange(e, 'confPassword')} />
                    <button className={styles.button}>registrarse</button>
                </form>
            </div>
        </div>
    )
}
