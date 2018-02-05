import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import Overdrive from 'react-overdrive';


export const Album = ({ album }) => (
  <Link to={`/${album.url}`}>
    <div>
      <Poster src={album.image[2]['#text']} alt={album.name} />
      <p id="albumName">{album.name}</p>
    </div>
  </Link>
);


Album.propTypes = {
  album: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export const Poster = styled.img`
    box-shadow: 0 0 7px 0 #0000009e;    
`;
