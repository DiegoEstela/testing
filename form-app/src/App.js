import { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
     <div className='fullContainer'> 
    <div className='formContainer'>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
    </div>
    
  );
}

export default App;
