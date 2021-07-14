import React from 'react';
import useFetch from '../hooks/useFetch';
import Error from './Error';

export default function Details({info}) {
  const [{data: user, isLoading, error}] = useFetch(`${process.env.REACT_APP_USERS_URL}${info.id}.json`, {});

  function renderDetails(items) {
    let details = [];
    for (let key in items) {
      details.push(<li className="item" key={key}>{key[0].toUpperCase() + key.slice(1)}: {items[key]}</li>);
    }
    return details;
  }

  if (error) {
    return <Error text={error}/>
  }

  if (isLoading) {
    return <div className="loader"></div>
  }

  return (
    <div className="user-details">
      <img src={user.avatar} alt={user.name}/>
      <div className="item name">{user.name}</div>
      <ul className="details-list">
        {renderDetails(user.details)}
      </ul>
    </div>
  )
}
