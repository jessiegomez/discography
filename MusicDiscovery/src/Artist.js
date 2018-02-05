import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import Overdrive from 'react-overdrive';


const Artist = ({ artist }) => (
  <Link to={`/${artist.mbid}`}>
    <div>
      <Poster src={artist.image[2]['#text']} alt={artist.name} />
      <p>{artist.name}</p>
    </div>
  </Link>
);

export default Artist;

Artist.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.array,
  }).isRequired,
};

export const Poster = styled.img`
    box-shadow: 0 0 35px black;
`;
