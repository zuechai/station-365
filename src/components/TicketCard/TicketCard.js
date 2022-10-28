import { useState } from "react";
import { getAllUsers } from "../../utils/apiCalls";
import "./TicketCard.scss";

export default function TicketCard({ ticket }) {
  const [users, setUsers] = useState();

  const getUsers = async () => {
    let results = await getAllUsers();
    setUsers(results.data);
  };

  getUsers();
  console.log(users);

  if (!users) {
    return "loading...";
  }

  if (users) {
    return (
      <>
        {/* <div className="ticket-card"> */}

        {/* <div className="ticket-card__container"> */}
        <div className="ticket__title ">
          <p>{ticket.title}</p>
        </div>
        <div className="ticket__description">
          <p>{ticket.description}</p>
        </div>
        <div className="ticket__submitted">
          <p>{users.find((user) => ticket.submittedBy === user.id).name}</p>
        </div>
        <div className="ticket__votes-for">
          <p>{ticket.votesFor.length}</p>
        </div>
        <div className="ticket__votes-against">
          <p>{ticket.votesAgainst.length}</p>
        </div>
        <div className="ticket__resolved">
          <p>{ticket.isResolved ? "Open" : "Closed"}</p>
        </div>

        {/* </div> */}

        {/* </div> */}
      </>
    );
  }
}
