import { createContext, ReactNode, useReducer } from "react"

const token = localStorage.getItem('token');
const initialState = token ? JSON.parse(token) : { token: null }



export const AuthContext = createContext<{
    authState?: State;
    authDispatch: React.Dispatch<Action>;
}>({
    authState: initialState,
    authDispatch: () => null
});


interface State {
    token: string;
}

interface SetTokenAction {
    type: 'setToken';
    token: string;
}

type Action = SetTokenAction;


const authDispatcher = (state: State, action: Action) => {
    switch (action.type) {
        case 'setToken': {
            console.log('Woeking!')
            const newToken = action.token;
            const newState = {
                token: newToken
            };
            localStorage.setItem('token', JSON.stringify(newState))
            return newState;
        }
        default:
            return state;
    }
}

interface AuthMemoryProps {
    children: ReactNode;
}

export default function AuthMemory({ children }: AuthMemoryProps) {
    const [authState, authDispatch] = useReducer(authDispatcher, initialState);

    return (
        <AuthContext.Provider value={{ authState: authState, authDispatch: authDispatch }} >
            {children}
        </AuthContext.Provider >
    )

}
