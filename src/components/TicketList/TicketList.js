import "./TicketList.scss";
import TicketCard from "../TicketCard/TicketCard";

export default function TicketList({ ticketData }) {
  return (
    <>
      <div className="ticket-header">
        <h1 className="ticket-header__title">Tickets</h1>
      </div>
      <div className="ticket">
        <div className="ticket-rows">
          <p className="ticket__title">TITLE</p>
          <p className="ticket__description">DESCRIPTION</p>
          <p className="ticket__votes-for">VOTES FOR</p>
          <p className="ticket__votes-against">VOTES AGAINST</p>
          <p className="ticket__resolved">Status</p>
        </div>
        {ticketData.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </>
  );
}
