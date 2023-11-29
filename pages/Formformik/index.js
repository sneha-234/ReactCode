import React, {useState , useRef} from 'react'
import { Col, Row, Form, Container, Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik } from 'formik';
import * as yup from 'yup';

import UserList from '../BootstrapForm/userlist';


function Login() {

    const [users, setUsers] = useState([]);
    const formRef= useRef()

    const callApi = () =>
    {
        return new Promise (function(resolve,reject)
        {
            setTimeout (() =>
            {
                resolve ({success:true})
            } ,5000)

        })
    }

    const schema = yup.object().shape({
        name: yup.string().required().min(3).max(20),
        password: yup.string().required().min(8).max(15),
        eMail: yup.string().required(),
    })
   
    const handleSubmitForm = (values , actions ) => {
        callApi().then((res)=>
        {
            if(res.success)
            {
                setUsers([...users, values]);
                actions.resetForm()
            }
        })

    }


    return (
    <Formik
            validationSchema={schema}
            onSubmit={handleSubmitForm}
            initialValues={{
                name: '',
                password: '',
                eMail: ''  
            }}    
               >
               {({ handleSubmit, handleChange, values, touched, errors , isSubmitting }) => (

            <Container>
                <Row>
                    <Col>LIST HERE
                    NAME: {formRef?.current?.values?.name}
                    <UserList users={users}  setUsers= {setUsers} />
                    </Col>
                    <Col>
                        FORM HERE
                        <Card>
                            <Form onSubmit={handleSubmit} >
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
                                            value = {values.name}
                                            isInvalid = { touched.name && !!errors.name}
                                             />
                                        <Form.Control.Feedback type = "invalid">{errors.name}</Form.Control.Feedback>
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
                                            value = {values.password}
                                            isInvalid = { touched.password && !!errors.password}/>
                                                <Form.Control.Feedback type = "invalid">{errors.password}</Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}
                                    className="mb-3"
                                    controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">
                                        E-mail
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="email"
                                            placeholder="e-mail"
                                            onChange={handleChange}
                                            name="eMail" 
                                            value = {values.eMail}
                                            isInvalid = { touched.eMail && !!errors.eMail}/>
                                                <Form.Control.Feedback type = "invalid">{errors.eMail}</Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                                <Button type="submit" disabled = {isSubmitting}> {isSubmitting ? 'Form is Submiiting...' : "Save"} </Button>
                            </Form>

                        </Card>
                    </Col>
                </Row>
            </Container>
        )}
            </Formik>
    )
} 

export default Login;