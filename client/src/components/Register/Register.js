import React from "react";
import { Form, Button } from "react-bootstrap";
import style from "../Register/Register.module.css";

function Register() {
  return (
    <div className={style.register_container}>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            id={style.formEmail}
            type="name"
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group controlId="formSurname">
          <Form.Label>Surname:</Form.Label>
          <Form.Control
            id={style.formEmail}
            type="surname"
            placeholder="Enter your surname"
          />
        </Form.Group>
        <Form.Group controlId="formCity">
          <Form.Label>City:</Form.Label>
          <Form.Control
            id={style.formEmail}
            type="city"
            placeholder="Enter your city"
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            id={style.formEmail}
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group controlId="formRepeatEmail">
          <Form.Label>Repeat email address:</Form.Label>
          <Form.Control
            id={style.formEmail}
            type="email"
            placeholder="Repeat your email"
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            id={style.formEmail}
            type="password"
            placeholder="Enter your password"
          />
        </Form.Group>
        <p>
          Already have an account?{" "}
          <a className={style.log_tag} href="/register">
            Login
          </a>
        </p>

        <Button variant="secondary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;