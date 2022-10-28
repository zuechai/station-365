import "./HomePage.scss";
import { useState } from "react";
import TicketList from "../../components/TicketList/TicketList";
import TicketSideBar from "../../components/TicketSideBar/TicketSideBar";

const ticketURL = `http://localhost:8080/tickets`;

export default function HomePage({ userId }) {
  const [ticketData, setTicketData] = useState([]);
  const [vote, setVote] = useState(0);

  // const onClick = (event) => {
  //   event.preventDefault();

  //   setVote(vote + 1);
  //   setVote((vote) => !vote + 1);
  // };

  if (!ticketData) {
    return <p> Loading... </p>;
  }

  return (
    <div className="hp">
      <div className="hp__sidebar">
        <TicketSideBar setTicketData={setTicketData} userId={userId} />
      </div>
      <div className="hp__ticket-list">
        <TicketList ticketData={ticketData} />
      </div>
    </div>
  );
}
