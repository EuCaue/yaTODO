import { User } from 'firebase/auth';
import React, { useState, createContext, useEffect, useContext } from 'react';
import Loading from '../components/Loading';
import { auth } from '../services/firebase';

export interface AuthContextType {
  user: User | null;
  userPhoto: null | string;
  setUser: (user: User | null) => void;
  setUserPhoto: (userPhoto: null | string) => void;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  userPhoto: null,
  setUser: () => {},
  setUserPhoto: () => {}
});

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [userPhoto, setUserPhoto] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = auth.onAuthStateChanged((firebaseUser: User | null) => {
      console.log(firebaseUser);
      if (firebaseUser) {
        setUserPhoto(firebaseUser.photoURL);
        setUser(firebaseUser);
        setIsLoading(false);
      } else {
        setUser(null);
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <Loading isLoading={isLoading} auth />;
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ user, setUser, userPhoto, setUserPhoto }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
