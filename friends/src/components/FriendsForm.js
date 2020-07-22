import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsForm = () => {
  const [friend, setFriend] = useState({
    name: '',
    age: '',
    email: '',
  });

  const changeHandler = (e) => {
    e.preventDefault();
    setFriend({
      ...friend,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/friends', friend)
      .then((res) => {
        console.log(res);
        setFriend({
          name: '',
          age: '',
          email: '',
        });
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          name='name'
          placeholder='name'
          value={friend.name}
          onChange={changeHandler}
        />
        <input
          type='number'
          name='age'
          placeholder='age'
          value={friend.age}
          onChange={changeHandler}
        />
        <input
          type='email'
          name='email'
          placeholder='email'
          value={friend.email}
          onChange={changeHandler}
        />
        <button>Add Friend</button>
      </form>
    </div>
  );
};

export default FriendsForm;