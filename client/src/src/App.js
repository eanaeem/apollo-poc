import React, { Component } from 'react';
import { ApolloProvider, createNetworkInterface, toIdValue } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Contacts from './contact/Contacts';
// import AddContact from './AddContact';
// // import ContactSingle from './ContactSingle';
// // import Songs from './songs';

const PORT = 3001;
const uri= `http://localhost:${PORT}/graphql`;

// const networkInterface = createNetworkInterface({
//    uri
// });

const client = new ApolloClient({ uri:uri });

// const wsClient = new SubscriptionClient(`ws://localhost:${4000}/subscriptions`, {
//   reconnect: true
// });

// const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
//   networkInterface,
//   wsClient
// );


// const dataIdFromObject = (result) => {
//   if (result.__typename) {
//     if (result.id !== undefined) {
//       return `${result.__typename}:${result.id}`
//     }
//   }
//   return null;
// }

// const client = new ApolloClient({
//   networkInterface: networkInterfaceWithSubscriptions,
//   customResolvers: {
//     Query: {
//       contact: (__, args) => {
//         return toIdValue(dataIdFromObject({ __typename: 'Contact', id: args['id'] }))
//       },
//     },
//   },
//   dataIdFromObject,
// });



class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div>
            <div className="navbar-fixed">
              <nav className="teal darken-1">
                <div className="nav-wrapper">
                  <Link to="/" className="brand-logo center">CRM</Link>
                </div>
              </nav>
            </div>
              {/* <AddContact /> */}
              <Switch>
                <Route exact path="/" component={Contacts}/>
                {/* <Route exact path="/songs" component={Songs}/> */}
                {/* <Route path="/contact/:contactId" component={ContactSingle}/> */}
              </Switch>
          </div>

        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
