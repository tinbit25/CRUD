import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    axios.get(`http://localhost:3001/getUser/${id}`)
      .then(result => {
        const user = result.data;
        setName(user.name || '');
        setEmail(user.email || '');
        setAge(user.age || '');
      })
      .catch(err => console.error('Error fetching user data:', err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault(); 
  
    axios.put(`http://localhost:3001/updateUser/${id}`, { name, email, age })
      .then(response => {
        navigate('/'); 
      })
      .catch(err => console.error('Error updating user data:', err));
  };
  
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-md">
        <form onSubmit={handleUpdate}>
          <h2 className="text-2xl font-bold mb-4">Update User</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700 mb-2">Age</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter Age"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
  type="submit" 
  className="btn bg-blue-500 text-white px-4 py-2 rounded"
>
  Update
</button>

        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
