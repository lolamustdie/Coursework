import React, {useEffect, useState} from "react";
import {Button, Container, Form, FormControl, Modal, Nav, Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import logo from "../img/logo192.png";
import Home from '../Pages/Home';
import Contacts from '../Pages/Contacts';
import About from '../Pages/About';
import Blog from '../Pages/Blog';
import TeamDetails from "../Pages/TeamDetails";
import Post from "../Pages/Post";

export default function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email не може бути порожнім')
    const [passwordError, setPasswordError] = useState('Пароль не може бути порожнім')
    const [formValid, setFormValid] = useState(false)
    useEffect ( () => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    },[emailError, passwordError])


    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!re.test(String(e.target.value.toLowerCase()))) {
            setEmailError('Некоректний email')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.length > 8) {
            setPasswordError('Пароль повинен мати не менше 3 і не більше 8 символів')
            if (!e.target.value) {
                setPasswordError('Пароль не може бути порожнім')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        /> Coffee Bean
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav claccName="me-auto">
                            <Nav.Link href="/"> Головна </Nav.Link>
                            <Nav.Link href="/about"> Про нас </Nav.Link>
                            <Nav.Link href="/contacts"> Контакти </Nav.Link>
                            <Nav.Link href="/blog"> Блог </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="me-sm-3"
                            />
                            <Button variant="outline-info">Пошук</Button>
                            <Button className="ms-2" onClick={handleShow}>Авторизуватися</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Авторизація</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Поштова адреса</Form.Label>
                            {(emailDirty && emailError) && <div style={{color: "red"}}>{emailError}</div>}
                            <Form.Control onChange={e => emailHandler(e)} name="email"
                                          value={email} onBlur={e => blurHandler(e)} type="email"
                                          placeholder="Enter email"/>
                            <Form.Text className="text-muted">
                                Ми не передаємо особисту інформацію стороннім особам.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="fromBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                            {(passwordError && passwordDirty) && <div style={{color: "red"}}>{passwordError}</div>}
                            <Form.Control onChange={e => passwordHandler(e)} name="password"
                                          value={password} onBlur={e => blurHandler(e)}
                                          type="password" placeholder="Enter password">
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="fromBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me"/>
                        </Form.Group>

                        <Button disabled={!formValid} variant="primary" type="submit">
                            Далі
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/team/:id" element={<TeamDetails/>}/>
                    <Route path="/post/:id" element={<Post/>}/>
                </Routes>
            </Router>
        </>
    )
}
