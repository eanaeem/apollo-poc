import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import {songsQuery} from '../query/songs';

const Songs = ({ data:{loading, allSongs, error}}) => {
//   if (loading) {
//     return <p>Loading...</p>
//   }
//   if (error) {
//     return <p>{error.message}</p>
//   }

  console.log('data in contact', loading, allSongs, error);
  return (
    <div className="row">
      <ul className="collection">
        {/* { contacts.map( item => 
        (<li className="collection-item" key={item.id}><Link to={item.id < 0 ? `/` : `contact/${item.id}`}>
          {item.firstName} {item.lastName}
          </Link></li>)
        )} */}
      </ul>
    </div>
  );
}



export default graphql(songsQuery)(Songs);
