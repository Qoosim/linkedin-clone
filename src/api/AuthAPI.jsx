import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebaseConfig';

export const LoginAPI = (email, password) => {
  try {
    let response = signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    alert(error.message);
  }
}

export const RegisterAPI = (email, password) => {
  try {
    let response = createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    return error;
  }
}