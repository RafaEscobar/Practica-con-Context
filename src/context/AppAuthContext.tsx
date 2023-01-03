import React from 'react'
import { AuthProvider } from './AuthContext';

//! 7) Generamos la arrowFunction del Context que envolvera a los hijos
export const AppAuthContext = ( {children}: {children: JSX.Element}) => {
  return (
    <AuthProvider>
        { children }
    </AuthProvider>
  )
}
