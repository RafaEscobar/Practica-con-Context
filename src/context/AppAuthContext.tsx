import React from 'react'
import { AuthProvider } from './AuthContext';

export const AppAuthContext = ( {children}: {children: JSX.Element}) => {
  return (
    <AuthProvider>
        { children }
    </AuthProvider>
  )
}
