/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';
// import Overdrive from 'react-overdrive';
import { Album } from './Album';


class ArtistDetail extends Component {
    state = {
      albums: [],
      artistName: '',
    }

    async componentDidMount() {
      const artistId = this.props.location.pathname.substring(1);

      try {
        const apiKey = '1e2fb8c8f39ae613c6073275194798e8';
        const res = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&mbid=${artistId}&api_key=${apiKey}&format=json`);
        const artists = await res.json();
        this.setState({
          albums: artists.topalbums.album,
          artistName: artists.topalbums.album[0].artist.name,
        });
      } catch (e) {
        console.log(e);
      }
    }

    render() {
      return (
        <ArtistWrapper>
          <h2>{this.state.artistName}</h2>
          <ArtistGrid>
            {this.state.albums.map((album, index) => {
              if (album.name != '(null)' && album.image[2]['#text'] != '') {
                return <Album key={index} album={album} />;
              }
              })} {/* eslint react/no-array-index-key:0 */}
          </ArtistGrid>
        </ArtistWrapper>
      );
    }
}

export default ArtistDetail;

const ArtistWrapper = styled.div`
    position: relative;
    padding-top: 5vh;
    background-color: white;  
`;

const ArtistGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 1rem;
`;
