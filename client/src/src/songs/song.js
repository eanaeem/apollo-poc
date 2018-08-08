import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Heading, FormLayout, Card, List } from '@shopify/polaris';

import SongForm from './addSong';
import { GET_SONG } from '../query/songs';

class Songlist extends Component {
   renderSong() {
      const { songs } = this.props.data;
      console.log(songs);
      return <List type="bullet">
         {songs.map((song, i) => (
            <List.Item key={i}> <Link to={`/song/${song.id}`}>{song.title}</Link></List.Item>
         ))
         }
      </List>
   }

   render() {
      console.log('data in song:', this.props);
      const { title, rating, artist } = this.props.data.song;
      return (
         <Card sectioned>
                  <div>
                     <p>{title}</p>
                     <p>{rating}</p>
                     <p>{artist}</p>
                  </div>
         </Card>
      )
   }
}

const Song = (props) => (
   <Query
      query={GET_SONG}
      variables={{ id: props.match.params.id }}
   >
      {({ loading, error, data, startPolling, stopPolling }) => {
         // console.log(loading, error, props)
         if (error) return <div />
         if (loading || !data) return <div />
         return <Songlist data={data} {...props} />
      }}
   </Query>
);

export default Song;

