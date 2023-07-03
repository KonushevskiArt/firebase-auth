import { useState } from 'react';

const Form = ({title, handleClick}) => {
  const [email, setEmail] = useState('abc@gmail.com');
  const [pass, setPass] = useState('123456');

  return (
    <div>
      <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        placeholder='email'
      />
      <input 
        type="password" 
        value={pass}
        onChange={(e) => setPass(e.target.value)} 
        placeholder='password'
      />
      <button type='submit' onClick={() => handleClick(email, pass)}>
        {title}
      </button>
    </div>
  );
};

export {Form};