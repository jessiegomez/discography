/* eslint react/no-did-mount-set-state: 0 */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Artist from './Artist';


class ArtistsList extends PureComponent {
    state = {
      artists: [],
    }

    async componentDidMount() {
      try {
        const apiKey = '1e2fb8c8f39ae613c6073275194798e8';
        // const secret = 'ac2b1174d0f98cd982ff4327a59a1582';

        const res = await fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apiKey}&format=json`);
        const artists = await res.json();
        this.setState({
          artists: artists.artists.artist,
        });
      } catch (e) {
        console.log(e);
      }
    }

    render() {
      return (
        <ArtistGrid>
          {this.state.artists.map((artist, index) => <Artist key={index} artist={artist} />)} {/* eslint react/no-array-index-key:0 */}
        </ArtistGrid>
      );
    }
}

export default ArtistsList;

const ArtistGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 1rem;
`;

