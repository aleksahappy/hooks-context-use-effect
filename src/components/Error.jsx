import React from 'react';

export default function Error({text}) {
  return (
    <div className="error">
      <div className="error-text">{text}</div>
    </div>
  )
}
