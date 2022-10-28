import './TicketList.scss';
import TicketCard from '../TicketCard/TicketCard';

export default function TicketList({ticketData}) {
    return (
        <>
        <div className='ticket'>
            <div className='ticket__header'>
                <h1 className='ticket__header-title'>Tickets</h1>
            </div>
            <div className='ticket__header'>
                <p className='ticket__header-text'>TITLE</p>
                <p className='ticket__header-text'>DESCRIPTION</p>
                <p className='ticket__header-text'>SUBMITTED BY:</p>
                <p className='ticket__header-text'>VOTES FOR</p>
                <p className='ticket__header-text'>VOTES AGAINST</p>
                <p className='ticket__header-text'>RESOLVED?</p>
            </div>
            {ticketData.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
            ))}
        </div>
        </>
    )
}