import React,{Component} from "react";
import {Button, Container, Form, FormControl, Nav, Navbar,} from "react-bootstrap";
import logo from './logo192.png'
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "../Pages/Home.js";
import About from "../Pages/About.js";
import Orders from "../Pages/Orders";
import Contact from "../Pages/Contact";
export default class Header extends Component{
    render(){
        return(
            <>
                <Navbar collapseOnSelect expand="md" bg="black" variant="dark">
                 <Container>
                 <Navbar.Brand href="/">
                     <img
                           src={logo}
                            height="100"
                           width="200"
                          className="d-inline-block algin-top"
                          alt="Logo"
                      />
                  </Navbar.Brand>
                     <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                      <Navbar.Collapse id="responsive-navbar-nav"/>
                                <Nav className="mr-auto">
                                  <Nav.Link href="/home">Главная</Nav.Link>
                                 <Nav.Link href="/orders">Корзина</Nav.Link>
                                 <Nav.Link href="/about">О нас</Nav.Link>
                                    <Nav.Link href="/contact">Связаться с нами</Nav.Link>
                                </Nav>
            </Container>
        </Navbar>
            <Router>
                <Routes>
                    <Route path="/home" element={Home} />
                    <Route path="/about" element={About} />
                    <Route path="/orders" element={Orders} />
                    <Route path="/contact" element={Contact}/>
                </Routes>
            </Router>

        </>
    );
    }
}