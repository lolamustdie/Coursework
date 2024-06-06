import React from 'react';
import { useParams } from 'react-router-dom';

function TeamDetails() {
    const { id } = useParams();

    const teams = [
        {
            image: "https://europeancoffeetrip.com/wp-content/uploads/2024/04/article_091-Iryna-Basko-Ukraine-1024x683.jpg",
            title: "Ірина Баско", text: "Два роки тому кавових девайсів українського виробництва взагалі не було. Нам хотілося робити щось своє у своїй країні власноруч. Назвемо це лагідною українізацією кавової культури.",
            id: 1
        },
        {
            image: "https://kavova.net.ua/attachments/img_20230309_121553_636-jpg.729/",
            title: "Христина Гавриш", text: "Alpha Coffee – це більше проєкт для душі. Це те, як я бачу каву і я бачу її дещо ширше, ніж просто напій. Для мене важлива і хімія кави, вплив продуктів харчування на нас – людей, бо я хімік і для мене вкрай важливі оці всі молекулярні штуки.", id: 2
        },
        {
            image: "https://blackfield.coffee/wp-content/uploads/2019/04/takava21-min.jpg",
            title: "Діма Леник", text: "Вважаю, що за баром повинні стояти особистості, тому одягатися вони повинні так, як хочуть.", id: 3
        }
    ]

    const team = teams.find(team => team.id === parseInt(id));

    return (
        <div className="text-center">
            <img src={team.image} alt="Team image"/>
            <h2>{team.title}</h2>
            <p>{team.text}</p>
        </div>
    );
}

export default TeamDetails;
