import gql from 'graphql-tag';

export const ADD_SONG = gql`
   mutation createSong($title: String, $url: String!) {
      newSong(title: $title, url: $url) {
         id
         title
      }
   }
`;


export const DELETE_SONG = gql`
   mutation removeSong( $id:ID!) {
   deleteSong( id:$id) {
      id
      title
   }
}
`;