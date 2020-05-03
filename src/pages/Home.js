import React from 'react'
import { Alert } from 'react-bootstrap';
import Share from './share'

const Home = () => (
    <div>
      <Alert variant="success">
        <Alert.Heading>HOME</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This example
          text is going to run a bit longer so that you can see how spacing within an
          alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things nice
          and tidy.
        </p>
      </Alert>
      <Share url="https%3A%2F%2Flocal-ogp.firebaseapp.com%2Fsite%2F3FlAZuy4VoimmVqVm8z0" />      
    </div>
)

export default Home;