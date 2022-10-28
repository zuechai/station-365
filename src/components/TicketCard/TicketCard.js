import { useState, useEffect } from "react";
import { getAllUsers } from "../../utils/apiCalls";
import "./TicketCard.scss";

export default function TicketCard({ ticket }) {
  return (
    <>
      <div className="ticket__title ">
        <p>{ticket.title}</p>
      </div>
      <div className="ticket__description">
        <p>{ticket.description}</p>
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
    </>
  );
}
