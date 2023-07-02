import { Form } from "./form";
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      console.log(user);
      dispatch(setUser({
        email: user.email,
        id: user.id,
        token: user.accessToken,
      }))
      navigate('/')
    })
    .catch((error) => {
      console.log(error)
    });

  }

  return (
    <Form 
      title={'Sign in'}
      handleClick={handleLogin}
    />
  );
};

export {Login};