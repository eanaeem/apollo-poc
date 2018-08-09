import React, { Component } from 'react';
import {  withRouter } from 'react-router-dom';

import { Mutation } from 'react-apollo';
import { Form, TextField, Button, FormLayout } from '@shopify/polaris';

import { SONGS_QUERY } from '../query/songs';
import { ADD_SONG } from '../mutation/songs';
class SongForm extends Component {
   state = {
      title: '',
      url: ''

   }
   handleChange(field, value) {
      this.setState({ [field]: value });
   }
   handleSubmit = () => {
      // console.log(this.props);
      const { title, url } = this.state;
      const variables = { title, url };
      const update = (store, { data:{newSong} }) => {
         console.log(store);
         const data = store.readQuery({ query: SONGS_QUERY });
         console.log(data);
         data.songs.push(newSong);
         store.writeQuery({ query: SONGS_QUERY, data});
      };
      this.props.addSong({ variables, update })
         .then(res => this.setState({title:'', url:''}))
         .catch(err => console.log('err', err));
   }


   renderForm() {
      const { title, url } = this.state;
      return <Form onSubmit={this.handleSubmit}>
         <FormLayout>
            <TextField
               value={title}
               onChange={(value) => this.handleChange('title', value)}
               label="Title"
               placeholder='Title'
            />
            <TextField
               value={url}
               onChange={(value) => this.handleChange('url', value)}
               label="url"
               placeholder='url'
            />

            <Button onClick={this.handleSubmit}>Submit</Button>
         </FormLayout>
      </Form>

   }

   render() {
      return (
         <div style={{ paddingTop: '2.5rem'}}>
            {this.renderForm()}
         </div>
      )
   }
}

const AddSong = (props) => (
   <Mutation mutation={ADD_SONG}>
      {(addSong, { data }) => {
         // console.log('props in mutatin', props);
         return <SongForm addSong={addSong} data={data} />

      }}
   </Mutation>
);

export default withRouter(AddSong);



// export default graphql(AddSongQuery)(Songs);
