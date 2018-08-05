import { gql } from 'react-apollo';

export const songsQuery = gql`
  query SongsQuery {
   allSongs {
      id
      title
      artist
   }
  }`;