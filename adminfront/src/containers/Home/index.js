import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/layout'

const Home = props => {
     return (
          <>
          <Layout>
               <Jumbotron style={{margin: '5rem', background: 'white'}} className="text-center">
                    <h1>Welcome to Admin Dashboard</h1>
                    <p>Lorem ipsum dummy text</p>
               </Jumbotron>
          </Layout>
          </>
     )
}

export default Home;