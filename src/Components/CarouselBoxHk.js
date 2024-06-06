import React, {Component} from "react";
import {Carousel} from "react-bootstrap";
import one from "../img/one.jpg";
import two from "../img/two.jpg";
import three from "../img/three.jpeg";

class CarouselBoxHk extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={one}
                        alt="One"/>
                    <Carousel.Caption>
                        <h3>Chemex</h3>
                        <p>Альтернативний пристрій для заварювання фільтр-кави, являє собою скляну ємність, що за формою нагадує пісочний годинник</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={two}
                        alt="Two"/>
                    <Carousel.Caption>
                        <h3>Iced coffee</h3>
                        <p>Спосіб подання кавових напоїв. Часто вживається як прохолодний напій.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={three}
                        alt="Three"/>
                    <Carousel.Caption>
                        <h3>Chemex</h3>
                        <p>Альтернативний пристрій для заварювання фільтр-кави, являє собою скляну ємність, що за формою нагадує пісочний годинник</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBoxHk;
