import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import { graphql } from 'graphql';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Heading, FormLayout, Card, List } from '@shopify/polaris';

import SongForm from './addSong';



// const Songslist = (props) => {
class Songslist extends Component {

   renderSongs() {
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
      console.log('data in songs', this.props);
      const { songs } = this.props.data;
      return (
         <Card sectioned>
            <div style={{ paddingTop: '14rem', minHeight: '40rem' }}>
               {songs && songs.length > 0 && this.renderSongs()}
               <SongForm />
            </div>
         </Card>
      )
   }
}

const SONGS_QUERY = gql`
  query SongsQuery {
   songs:allSongs {
      id
      title
      rating
      favorite
   }
}`;


const Songs = (props) => (
   <Query query={SONGS_QUERY}>
      {({ loading, error, data }) => {
         console.log(loading, error)
         if (error) return <div />
         if (loading || !data) return <div />
         return <Songslist data={data} {...props} />
      }}
   </Query>
);

export default Songs;



// export default graphql(SongslistQuery)(Songs);