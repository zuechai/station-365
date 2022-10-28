import "./TicketCard.scss";

export default function TicketCard({ ticket }) {
  return (
    <>
      <div className="ticket">
        <div className="ticket-rows">
          <div className="ticket__title ">
            <p>{ticket.subject}</p>
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
        </div>
      </div>
    </>
  );
}
