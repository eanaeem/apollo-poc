import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import gql from 'graphql-tag';
import { Query, graphql } from 'react-apollo';
import { Icon, Card, List } from '@shopify/polaris';

import SongForm from './addSong';
import { SONGS_QUERY } from '../query/songs';
import { DELETE_SONG } from '../mutation/songs';
import { invertPropEq } from '../lib/utils';

class Songslist extends Component {
   handleDelete = (id) => {
      console.log('delete song', id);

      const variables = { id };
      const update = (store, { data: { deleteSong } }) => {
         console.log(deleteSong);
         console.log(store);
         let storeData = store.readQuery({ query: SONGS_QUERY });
         const removeDeleted = invertPropEq('id')(deleteSong.id);
         storeData.songs = storeData.songs.filter(removeDeleted);
         store.writeQuery({ query: SONGS_QUERY, data:storeData});
      };
      const refetchQueries= [{
         query: SONGS_QUERY,
         // variables: { repoFullName: 'apollographql/apollo-client' },
       }];
      this.props.mutate({ variables, update })
         .then(res => this.setState({ title: '', url: '' }))
         .catch(err => console.log('err', err));

   }

   renderSongs() {
      const { songs } = this.props.data;
      console.log(songs);
      return <List type="bullet">
         {songs.map((song, i) => (
            <List.Item key={i}> <Link to={`/song/${song.id}`}>{song.title}</Link>  <span onClick={() => this.handleDelete(song.id)}><Icon source="delete" /> </span> </List.Item>
         ))
         }
      </List>
   }

   render() {
      console.log('data in songs', this.props);
      const { songs } = this.props.data;
      return (
         <Card sectioned>
            {songs && songs.length > 0 && this.renderSongs()}
            <SongForm />
         </Card>
      )
   }
}

const Songs = (props) => (
   <Query
      query={SONGS_QUERY}
   // pollInterval={500}
   >
      {({ loading, error, data, startPolling, stopPolling }) => {
         // console.log(loading, error)
         if (error) return <div />
         if (loading || !data) return <div />
         return <Songslist data={data} {...props} />
      }}
   </Query>
);

// export default Songs;

export default graphql(DELETE_SONG)(Songs);



// export default graphql(SongslistQuery)(Songs);
