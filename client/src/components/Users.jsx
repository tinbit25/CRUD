import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001') 
      .then(result => {
        if (Array.isArray(result.data)) {
          setUsers(result.data);
        } else {
          console.error('Unexpected data format:', result.data);
        }
      })
      .catch(err => console.log(err));
  }, []); 
const handleDelete=(id)=>{
  axios.delete('http://localhost:3001/deleteUser/'+id)
  .then(res=>{console.log(res)
    window.location.reload()
})
  .catch(errr=>console.log(errr))
}
  return (
    <div className='flex h-screen bg-gray-200 justify-center items-center'>
      <div className='w-1/2 bg-white rounded p-3'>
        <Link to="/create" className="bg-green-500 text-white py-2 px-4 rounded mb-4 w-1/2">Add+</Link>
        <table className='min-w-full bg-white border border-gray-300'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b'>Name</th>
              <th className='py-2 px-4 border-b'>Email</th>
              <th className='py-2 px-4 border-b'>Age</th>
              <th className='py-2 px-4 border-b'>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index} className='hover:bg-gray-100'>
                  <td className='py-2 px-4 border-b'>{user.name}</td>
                  <td className='py-2 px-4 border-b'>{user.email}</td>
                  <td className='py-2 px-4 border-b'>{user.age}</td>
                  <td className='py-2 px-4 border-b'>
                  <Link to={`/update/${user._id}`} className="bg-green-500 text-white py-2 px-4 rounded mb-4 w-1/2">EDIT</Link>
                  <button className='bg-red-500 text-white px-2 py-1 rounded'
                  onClick={(e)=>handleDelete(user._id)}>DELETE</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className='py-2 px-4 text-center'>No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
