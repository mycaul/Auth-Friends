import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });

  const history = useHistory();

  const changeHandler = (e) => {
    e.preventDefault();
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', login)
      .then((res) => {
        console.log(res);
        window.localStorage.setItem('token', res.data.payload);
        history.push('/friends');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          name='username'
          value={login.username}
          onChange={changeHandler}
        />
        <input
          type='password'
          name='password'
          value={login.password}
          onChange={changeHandler}
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;