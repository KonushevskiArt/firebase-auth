import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';
import { useAuth } from './../hooks/useAuth';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if(!isAuth) {
      navigate("/login");
    }
  }, [isAuth])

  return (
    <>
      <h1>Home page</h1>


      <button
        onClick={() => dispatch(removeUser())}
      >
        Log out from {email}
      </button>
    </>
  )
};

