import React from 'react';
import { graphql } from 'graphql';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';


const ContactsList = (props) => {
   console.log('data in ContactsList', props);
   return (
      <div className="row">
          Contactlist
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



const Contacts = (props) => (
   <Query query={CONTACTS_QUERY}>
      {({ loading, error, data }) => {
         console.log(loading, error)
      if (error) return <div />
      if (loading || !data) return <div />

      console.log(data)

      return <ContactsList data={data} {...props}/>
    }}
   </Query>
);

export default Contacts;



// export default graphql(contactsListQuery)(Contacts);
