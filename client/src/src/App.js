import React, { Component, Fragment } from 'react';
import { ApolloProvider, createNetworkInterface, toIdValue } from 'react-apollo';
import {HttpLink} from "apollo-link-http";
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import {Song, Songs} from './songs';

import { AppProvider, Page } from '@shopify/polaris';
import Header from './components/header';

const PORT = 3001;
const uri = `http://localhost:${PORT}/graphql`;

const  link= new HttpLink({ uri });

const cache = new InMemoryCache({
   dataIdFromObject: o => o.id
});



// const networkInterface = createNetworkInterface({
//    uri
// });

// const dataIdFromObject = (result) => {
//    if (result.__typename) {
//      if (result.id !== undefined) {
//        return `${result.__typename}:${result.id}`
//      }
//    }
//    return null;
//  }

const client = new ApolloClient({
   uri,
   cache,
});

// const wsClient = new SubscriptionClient(`ws://localhost:${4000}/subscriptions`, {
//   reconnect: true
// });

// const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
//   networkInterface,
//   wsClient
// );


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
            <AppProvider>
               <Page>
                  <BrowserRouter>
                     <Page>
                        <Header />
                        <Switch>
                           <Route exact path="/" component={Songs} />
                           <Route exact path="/song/:id" component={Song} />
                           {/* <Route exact path="/songs" component={Songs}/> */}
                           {/* <Route path="/contact/:contactId" component={ContactSingle}/> */}
                        </Switch>
                     </Page>
                  </BrowserRouter>
               </Page>
            </AppProvider>
         </ApolloProvider>
      );
   }
}

export default App;
