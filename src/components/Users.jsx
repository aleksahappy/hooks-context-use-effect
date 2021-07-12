import React, {useState} from 'react';
import useFetch from '../hooks/useFetch';
import Error from './Error';
import List from './List';
import Details from './Details';

export default function Users() {
  const [{data: users, isLoading, error}] = useFetch(`${process.env.REACT_APP_USERS_URL}users.json`, []);
  const [selectedUser, setSelectedUser] = useState(null);

  const onSelectUser = user => {
    setSelectedUser(user);
  };

  return (
    <>
      {error && <Error text={error}/>}
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="users">
          <List items={users} onSelect={onSelectUser}/>
          {selectedUser && <Details info={selectedUser}/>}
        </div>
      )}
    </>
  )
}
