import gql from 'graphql-tag';

export const SONGS_QUERY = gql`
  query SongsQuery {
   songs:allSongs {
      id
      title
   }
}`;
