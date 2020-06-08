import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>QuickChat React-app <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Tech-resources used: React, NodeJS and SocketIO <span role="img" aria-label="emoji">❤️</span></h2>
      <h2>Have a quick chat with anyone without using social media <span role="img" aria-label="emoji">⬅️</span></h2>
      <h2>We reset our databases everyday to guarantee a <span role="img" aria-label="emoji">💯</span> percent of privacy <span role="img" aria-label="emoji">😉</span></h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;