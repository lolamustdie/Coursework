import React from 'react';
import CarouselBoxHk from "../Components/CarouselBoxHk";
import {Button, Card, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function Home() {
    const teams = [
        {
            image: "https://europeancoffeetrip.com/wp-content/uploads/2024/04/article_091-Iryna-Basko-Ukraine-1024x683.jpg",
            title: "Ірина", text: "Співзасновниця DOTYK", id: 1
        },
        {
            image: "https://kavova.net.ua/attachments/img_20230309_121553_636-jpg.729/",
            title: "Христина", text: "Засновниця ALPHA COFFEE", id: 2
        },
        {
            image: "https://blackfield.coffee/wp-content/uploads/2019/04/takava21-min.jpg",
            title: "Діма", text: "Шеф-бариста TAKAVA", id: 3
        }
    ]

    return (
        <div>
            <CarouselBoxHk/>
            <Container>
                <h2 className="text-center m-4">Наша команда</h2>
                <div className="row">
                    {teams.map((team, index) => (
                        <div className="col" key={index}>
                            <Card className="m-4 text-center" bg="light">
                                <Card.Img variant="top" src={team.image} />
                                <Card.Body>
                                    <Card.Title>{team.title}</Card.Title>
                                    <Card.Text>{team.text}</Card.Text>
                                    <Link to={`/team/${team.id}`}>
                                        <Button variant="primary">Про команду</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;