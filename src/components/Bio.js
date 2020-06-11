import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`akash`}
          style={{
            objectFit: 'cover',
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(3),
            height: rhythm(3),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          <a href="/about-me/">Akash's</a> musings. <br />I don't know what deep
          metaphor I'm looking for here.
        </p>
      </div>
    );
  }
}

export default Bio;
