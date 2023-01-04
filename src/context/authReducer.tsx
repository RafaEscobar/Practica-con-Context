import React from 'react'
import { AuthState } from './AuthContext';

type AuthAction = 
| { type: 'singIn' }
| { type: 'changeFavIcon', payload: string }
| { type: 'logout' };

//! 10) Creamos el arrowFunction para el Reducer, el cual establece los parametros: state y action.
//* state de tipo AuthState (La primer interfaz del archivo Context)
//* action de tipo: any por el momento
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  //! 11) Desarrollamos un switch en base al action y al type
    switch(action.type) {
      case 'singIn':
        return {
          ...state,
          isLoggedIn: true,
          username: 'no-username-yet',
        }
      break;
      case 'changeFavIcon':
        return {
          ...state,
          favoriteIcon: action.payload,
        }
      break;
      case 'logout':
        return{
          ...state,
          isLoggedIn: false,
          username: 'x',
          favoriteIcon: undefined,
        }
      break;
      default:
        return state;
      break;
    }
  
}
