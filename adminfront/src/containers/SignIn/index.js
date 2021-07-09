import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Layout from "../../components/layout";
import Input from "../../components/UI/Input";

const SignIn = (props) => {
  return (
    <>
      <Layout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Input
                  label="Email ID"
                  placeholder="Enter Your Email ID"
                  value=""
                  type="email"
                  onChange={() => {}}
                />

                <Input
                  label="Password"
                  placeholder="Enter Your Password"
                  value=""
                  type="password"
                  onChange={() => {}}
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
