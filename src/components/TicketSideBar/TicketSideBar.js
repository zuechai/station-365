import { useState, useEffect } from "react";
import {
  getAllTickets,
  getOpenTickets,
  getInProgressTickets,
  getClosedTickets,
  getUserTickets,
} from "../../utils/apiCalls";

import "./TicketSideBar.scss";

export default function TicketSideBar({ setTicketData, userId }) {
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
        setTicketData(results.data);
      } catch (e) {
        console.log(e);
      }
    };
    const getOpen = async () => {
      try {
        const results = await getOpenTickets();
        setTicketData(results.data);
      } catch (e) {
        console.log(e);
      }
    };
    const getInProgress = async () => {
      try {
        const results = await getInProgressTickets();
        setTicketData(results.data);
      } catch (e) {
        console.log(e);
      }
    };
    const getClosed = async () => {
      try {
        const results = await getClosedTickets();
        setTicketData(results.data);
      } catch (e) {
        console.log(e);
      }
    };
    const getMyTickets = async () => {
      try {
        const results = await getUserTickets(userId);
        setTicketData(results.data);
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
      getOpen();
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
      getMyTickets();
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
