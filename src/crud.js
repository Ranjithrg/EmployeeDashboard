import React, { useState, useEffect } from 'react';
import './App.css';

const Crud = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editingUser, setEditingUser] = useState(null);

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  // Add new user
  const handleAddUser = async () => {
    if (!newUser.name || !newUser.email) return;

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();
      setUsers([...users, { ...data, id: users.length + 1 }]);
      setNewUser({ name: '', email: '' });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  // Delete user
  const handleDeleteUser = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
      });
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Edit user (set data to input fields)
  const handleEditUser = (user) => {
    setEditingUser(user);
    setNewUser({ name: user.name, email: user.email });
  };

  // Update user
  const handleUpdateUser = async () => {
    if (!editingUser) return;

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${editingUser.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();
      setUsers(users.map(user => (user.id === editingUser.id ? { ...user, ...data } : user)));
      setEditingUser(null);
      setNewUser({ name: '', email: '' });
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="crud-container">
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleEditUser(user)}>Edit</button>
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="3">No users found</td></tr>
          )}
        </tbody>
      </table>

      <div>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={e => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={e => setNewUser({ ...newUser, email: e.target.value })}
        />
        {editingUser ? (
          <button onClick={handleUpdateUser}>Update</button>
        ) : (
          <button onClick={handleAddUser}>Add Employee</button>
        )}
      </div>
    </div>
  );
};

export default Crud;
