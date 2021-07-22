import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Layout from "../../components/layout";
import Input from "../../components/UI/Input";
import { login } from '../../actions'
import { useDispatch, useSelector } from "react-redux";
import {Redirect} from 'react-router-dom';

const SignIn = (props) => {

  // react hooks, helps to create states in functional components.
  // returns an array containing the actual returned value and a function by which we can actually set the value
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const userLoggedIn = (e) => {

    e.preventDefault();

    const user = {
      email, pass
    }
    dispatch(login(user));
  }

  if(auth.authenticate){
    return <Redirect to={`/`} />
  }


  return (
    <>
      <Layout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={userLoggedIn} >
                <Input
                  label="Email ID"
                  placeholder="Enter Your Email ID"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                  label="Password"
                  placeholder="Enter Your Password"
                  value={pass}
                  type="pass"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default SignIn;
