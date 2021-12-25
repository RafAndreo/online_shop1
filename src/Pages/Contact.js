import React, {Component} from "react";
import { Button, Container, Form } from "react-bootstrap";
export default class Contact extends Component{
    render(){
        return(
            <Container style={{width: "500px"}}>
                <h1 className="text-center">Свяжитесь с нами</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Ваша электронная почта</Form.Label>
                    <Form.Control type="email" placeholder="Введите вашу почту"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                    <Form.Label>Отзывы и предложения</Form.Label>
                    <Form.Control as="textarea" rows="3"/>
                    <Button variant="primary" type="submit">Отправить</Button>
                    </Form.Group>
                </Form>
        </Container>
        );
    }
}
