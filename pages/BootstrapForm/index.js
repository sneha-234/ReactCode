import React, { useRef, useState } from 'react'
import { Col, Row, Form, Container, Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './userlist';

function Login() {

    const [formData, setFormData] = useState({});
    const [users, setUsers] = useState([]);
    const [formErrors , setFormErrors] = useState({});
    const formRef = useRef()


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const ValidationForm = () => {
            const errors = {};
            if (formData.name == "" || formData.name == null) {
              errors.name = "Name is required";
            } else if (formData.name.length <= 2) {
             errors.name = "Enter at-least 3 or more characters";}
           return errors;
        }
    const handleSubmit = (e) => 
    {
        e.preventDefault();
   
        setUsers([...users, formData]);
         //setFormData({})
        formRef.current.reset()
        //setFormData({})
    
    const errors = ValidationForm();
    setFormErrors(errors);

    if (Object.keys(errors).length == 0) 
    {

      formRef.current.reset(); 
  
       setUsers([...users, formData]); 
    
     setFormData({}); 
    }
    };
  


    return (

        <Container>
            <Row>
                <Col>LIST HERE
                    <UserList users={users} setUsers={setUsers} />
                </Col>
                <Col>
                    FORM HERE
                    <Card>
                        <Form  onSubmit={handleSubmit} ref={formRef}>
                            <Form.Group as={Row}
                                className="mb-3"
                                controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    NAME
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control name="name"
                                        placeholder='enter your name'
                                        onChange={handleChange} 
                                        isInvalid={
                                            formErrors.name !== undefined && !!formErrors.name
                                          }/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}
                                className="mb-3"
                                controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Password
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="password"
                                        placeholder="Password"
                                        onChange={handleChange}
                                        name="password"
                                        isInvalid = {formErrors.name !== undefined && formErrors.name} 
                                        />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}
                                className="mb-3"
                                controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    E-mail
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="e-mail"
                                        placeholder="e-mail"
                                        onChange={handleChange}
                                        name = "eMail" />
                                </Col>
                            </Form.Group>
                            <Button type="submit">Save </Button> 
                        </Form>
                        
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default Login