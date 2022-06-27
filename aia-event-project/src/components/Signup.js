import React from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap"

export default function Signup() {
    return (
        <div>
            {/* <Card>
                <Card.body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Passowrd</Form.Label>
                            <Form.Control type="email" ref={passowordRef} required />
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                    </Form>
                </Card.body>
            </Card> */}
            <div className="w-100 text-center mt-2">
                Already have a account? Log In
            </div>
        </div>
    )
}
