import React from 'react';

export default function List({items, onSelect}) {
  return (
    <ul className="users-list">
      {items.map(item => <li className="item" key={item.id} onClick={() => onSelect(item)}>{item.name}</li>)}
    </ul>
  )
}
