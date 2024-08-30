import React, { useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate=useNavigate()
  const submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/createUser', { name, email, age }) 
      .then(result => {console.log(result)
        navigate('/')

      })
      .catch(err => console.log(err));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-md">
        <form onSubmit={submit}>
          <h2 className="text-2xl font-bold mb-4">Add User</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700 mb-2">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="btn bg-blue-500 text-white px-2 py-1 rounded mr-2">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
