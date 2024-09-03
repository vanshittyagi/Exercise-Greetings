import React, { useState } from 'react';
import './Zero.css'
const Zero = () => {
  const [showw, setShoww] = useState(false);
  const [username, setUsername] = useState('');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const submitToggle = () => {
    if (username.trim() === '') {
      alert("Enter Username please");
    } else {
      setShoww(!showw);
    }
  };
  const cleartoggle = () => {
    setUsername('')
    setShoww(false)
  }

  return (
    <div className='zero'>
      {showw ? (
        <div className="texty">
          <h1>Thank you for visiting our site. We welcome you, {username}!</h1>
        </div>
      ) : (
        <div className="texty">
          <h1>Write Your Name</h1>
        </div>
      )}
      <div className="inpbtn">
        <input
          value={username}
          onChange={handleInputChange}
          type="text"
          placeholder='Write Your Name'
        />
        {showw ? (
            <button onClick={cleartoggle}>Clear</button>
        ):(
            <button onClick={submitToggle}>Show</button>
        )}
      </div>
    </div>
  );
};

export default Zero;
