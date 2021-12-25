import React, { Component } from "react"
import { Carousel } from "react-bootstrap"
import i from "../assets/i.png"
import i1 from "../assets/i1.png"
export default class CarousleBox extends Component{
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={i}
                    alt="akcii"
                    />
                </Carousel.Item>
                <img
                    className="d-block w-100"
                    src={i1}
                    alt="akcii1"
                    />

            </Carousel>
        )
    }
}