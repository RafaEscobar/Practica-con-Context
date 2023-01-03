import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

//! 1) Crear interface para regir la informacion que se manejara el context
export interface AuthState {
    isLoggedIn: boolean,
    username: string,
    favoriteIcon?: string,
}

//! 2) Genramos un estado inicial para la interface 
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: 'x',
    favoriteIcon: undefined,
}

//! 3) Creamos una nueva interface para definic -Que es- y -Como luce- el context
export interface AuthContextProps {
    authState: AuthState;
    singIn: () => void;
}

//! 4) Crear el context en razon de la interface del paso anterior
export const AuthContext =  createContext( {} as AuthContextProps );

//! 5) Creamos el componente que PROVEERA el ESTADO
export const AuthProvider = ({children}: {children: JSX.Element}) => { 

    //! 9) Creamos nuestro useReducer
    const [ authState, dispatch ] = useReducer( authReducer , authInitialState);

    return (
        //! 6) Retornamos el componente <AuthContext.Provider> cuyo value, establece aquello que veran los componentes hijos.
        <AuthContext.Provider
            value={{
                authState: authInitialState,
                singIn: () => {}
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}