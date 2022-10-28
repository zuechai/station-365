import './TicketCard.scss';

export default function TicketCard({ ticket }) {
    return (
        <div className="ticket-card">
            <div className="ticket-card__container">
                <div className="ticket-card__content">
                    <p>{ticket.name}</p>
                </div>
                <div className="ticket-card__content">
                    <p>{ticket.description}</p>
                </div>
                <div className="ticket-card__content">
                    <p>{ticket.target_date}</p>
                </div>
                <div className="ticket-card__content">
                    <p>Votes For: {ticket.votesFor}</p>
                </div>
                <div className="ticket-card__content">
                    <p>Votes Against: {ticket.votesAgainst}</p>
                </div>
                <div className="ticket-card__content">
                    <p>Resolved? = {ticket.isResolved}</p>
                </div>
            </div>
        </div>
    );
}