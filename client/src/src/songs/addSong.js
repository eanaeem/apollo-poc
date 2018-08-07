import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Form, TextField, Button, FormLayout } from '@shopify/polaris';


class SongForm extends Component {
   state = {
      title: '',
      url: ''

   }
   handleChange(field, value) {
      this.setState({ [field]: value });
   }
   handleSubmit = () => {
      console.log(this.props);
      const { title, url } = this.state;
      console.log(title, url);
      this.props.addSong({ variables: { title, url } })
         .then(res => console.log('res', res))
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
         <div>
            {this.renderForm()}
         </div>
      )
   }
}


const ADD_SONG = gql`
   mutation createSong($title: String, $url: String!) {
      newSong(title: $title, url: $url) {
         id
         title
      }
   }
`;


const AddSong = (props) => (
   <Mutation mutation={ADD_SONG}>
      {(addSong, { data }) => {
         console.log('props in mutatin', props);
         console.log(data, addSong)
         return <SongForm addSong={addSong} data={data} />

      }}
   </Mutation>
);

export default withRouter(AddSong);



// export default graphql(AddSongQuery)(Songs);
