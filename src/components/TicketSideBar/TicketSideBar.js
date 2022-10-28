import { useState, useEffect } from "react";
import { getAllTickets } from "../../utils/apiCalls";

import "./TicketSideBar.scss";

export default function TicketSideBar() {
  const [isAllTickets, setIsAllTickets] = useState(false);
  const [isOpenTickets, setIsOpenTickets] = useState(true);
  const [isInProgress, setIsInProgress] = useState(false);
  const [isClosedTickets, setIsClosedTickets] = useState(false);
  const [isMyTickets, setIsMyTickets] = useState(false);

  const handleAllTickets = () => setIsAllTickets(true);
  const handleOpenTickets = () => setIsOpenTickets(true);
  const handleInProgress = () => setIsInProgress(true);
  const handleClosedTickets = () => setIsClosedTickets(true);
  const handleMyTickets = () => setIsMyTickets(true);

  useEffect(() => {
    const getAll = async () => {
      try {
        const results = await getAllTickets();
        console.log(results);
      } catch (e) {
        console.log(e);
      }
    };

    if (isAllTickets) {
      setIsAllTickets(false);
      getAll();
      return;
    }
    if (isOpenTickets) {
      setIsOpenTickets(false);
      return;
    }
    if (isInProgress) {
      setIsInProgress(false);
      return;
    }
    if (isClosedTickets) {
      setIsClosedTickets(false);
      return;
    }
    if (isMyTickets) {
      setIsMyTickets(false);
      return;
    }
  }, [
    isAllTickets,
    isOpenTickets,
    isInProgress,
    isClosedTickets,
    isMyTickets,
    setIsAllTickets,
    setIsOpenTickets,
    setIsInProgress,
    setIsClosedTickets,
    setIsMyTickets,
  ]);

  return (
    <section className="sb">
      <h2 className="sb__header" onClick={handleAllTickets}>
        All Tickets
      </h2>
      <div className="sb__divider" />
      <ul className="sb__list">
        <li className="sb__list-item" onClick={handleOpenTickets}>
          Open Tickets
          <div className="sb__list-item-num">{"###"}</div>
        </li>
        <li className="sb__list-item" onClick={handleInProgress}>
          In Progress
          <div className="sb__list-item-num">{"###"}</div>
        </li>
        <li className="sb__list-item" onClick={handleClosedTickets}>
          Closed Tickets
          <div className="sb__list-item-num">{"###"}</div>
        </li>
        <li className="sb__list-item" onClick={handleMyTickets}>
          My Tickets
          <div className="sb__list-item-num">{"###"}</div>
        </li>
      </ul>
      <div className="sb__divider" />
    </section>
  );
}
