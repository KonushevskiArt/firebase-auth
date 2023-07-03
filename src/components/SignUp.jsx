import { Form } from "./form";
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();


  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      // console.log({
      //   email: user.email,
      //   id: user.id,
      //   token: user.accessToken,
      // });
      dispatch(setUser({
        email: user.email,
        id: user.id,
        token: user.accessToken,
      }));

      navigate('/');
    })
    .catch((error) => {
      console.log(error)
    });

  }

  return (
    <Form 
      title={'Register'}
      handleClick={handleRegister}
    />
  );
};

export {SignUp};