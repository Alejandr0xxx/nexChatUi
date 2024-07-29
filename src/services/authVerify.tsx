import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from './authMemory';

export default function AuthVerify() {
    const { authState: authState } = useContext(AuthContext);
    const token = authState?.token;
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) return navigate("/");
    }, [token, navigate])
    return token ? <Outlet /> : null;
}
