import { useState } from "react";
import Heading from "../layout/Heading";
import { useForm } from "react-hook-form";
import { contactSchema } from "../../schemas/contactSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Form, Button } from "react-bootstrap";

export default function ContactPage() {
  const [isSuccess, setSuccess] = useState(false);
  const siteTitle = "Contact";

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(contactSchema),
  });

  function onSubmit(data) {
    setSuccess(true);
  }
  return (
    <>
      <Heading content="Contact" />
      <Container>
        <Heading title={siteTitle} />
        {isSuccess && <p>Form sent</p>}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>First name: </Form.Label>
            <Form.Control
              type="text"
              ref={register({ required: true })}
              name="firstName"
              placeholder="Your frist name"
            />
            {errors.firstName && <span>{errors.firstName.message}</span>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Last name: </Form.Label>
            <Form.Control
              type="text"
              ref={register({ required: true })}
              name="lastName"
              placeholder="Your last name"
            />
            {errors.lastName && <span>{errors.lastName.message}</span>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              ref={register({ required: true })}
              name="email"
              placeholder="Your email"
            />
            {errors.email && <span>{errors.email.message}</span>}
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Select a topic</Form.Label>

            <Form.Control
              as="select"
              custom
              ref={register({ required: true })}
              name="Select"
            >
              <option></option>
              <option>Championships</option>
              <option>General</option>
              <option>Teams</option>
              <option>This website</option>
              <option>Drivers</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Message: </Form.Label>
            <Form.Control
              type="text"
              ref={register({ required: true })}
              name="message"
              placeholder="Your message her"
            />
            {errors.message && <span>{errors.message.message}</span>}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
