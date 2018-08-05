import React from 'react';
import { graphql } from 'graphql';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';


const ContactsList = ({ data: { loading, error, contacts } }) => {

   console.log('data in contact', loading, loading, contacts);
   return (
      <div className="row">
         <ul className="collection">
            {contacts.map(item =>
               (<li className="collection-item" key={item.id}><Link to={item.id < 0 ? `/` : `contact/${item.id}`}>
                  {item.firstName} {item.lastName}
               </Link></li>)
            )}
         </ul>
      </div>
   );
}

 const CONTACTS_QUERY = gql`
  query ContactsQuery {
    contacts {
      id
      firstName
      lastName
    }
  }
`;




const Contacts = () => (
   <Query query={CONTACTS_QUERY}>
      {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
         console.log(data);
         return <div>hello</div>
      }}
   </Query>
);

export default Contacts;

// export default graphql(contactsListQuery)(Contacts);
