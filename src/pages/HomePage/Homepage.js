import axios from 'axios';
import './HomePage.scss'
import { useEffect, useState } from "react";
import Button from '../../components/Button/Button';
// import { useParams } from 'react-router-dom'
import TicketList from '../../components/TicketList/TicketList';

const ticketURL = `http://localhost:8080/tickets`;

export default function HomePage() {
    // const { id } = useParams();

    const [ticketData, setTicketData] = useState([]);
    const [vote, setVote] = useState(0);

    useEffect(() => {
        axios
            .get(ticketURL)
            .then((res) => {
                setTicketData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const onClick = (event) => {
        event.preventDefault();

        setVote((vote + 1));
        setVote((vote) => !vote + 1);
    }

    if (!ticketData) {
        return <p> Loading... </p>;
    }


    return (
        <div>
            <TicketList ticketData={ticketData} />
            <Button
                content='Vote'
                onClick={onClick}
            />
            <p>{vote}</p>
        </div>
    );
}