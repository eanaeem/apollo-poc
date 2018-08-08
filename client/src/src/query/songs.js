import gql from 'graphql-tag';

export const SONGS_QUERY = gql`
  query SongsQuery {
   songs:allSongs {
      id
      title
      
   }
}`;

export const GET_SONG = gql`
   query getSong( $id:ID!) {
  song:Song( id:$id) {
    title
    url
    rating
    artist
  }
}
`;