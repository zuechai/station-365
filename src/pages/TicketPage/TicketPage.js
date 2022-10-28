import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import "./TicketPage.scss";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Textarea from "../../components/Textarea/Textarea";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function TicketPage() {
  const [card, setCard] = useState([]);
  const [newFormObj, setFormObj] = useState({});
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isValid) {
      const createTicket = async () => {
        try {
          const results = await axios.post(
            "http://localhost:8080/tickets",
            newFormObj
          );
          setCard(results.data);
          console.log(results.data);
          setIsValid(false);
          alert("New Ticket added!");
          navigate("/");
        } catch (e) {
          console.log(e);
        }
      };

      createTicket();
    }
  }, [isValid, newFormObj]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const subject = form.subject.value;
    // const target_date = form.target_date.value;
    const priority = form.priority.value;
    const category = form.category.value;
    const team = form.team.value;
    const employee = form.employee.value;
    const description = form.description.value;

    const formObj = {
      id: uuidv4(),
      subject,
      description,
      //   timestamp: new Date().toDateString(),
      //   target_date: new Date().toLocaleDateString(),
      priority,
      category,
      team,
      employee,
      votesFor: 0,
      votesAgainst: 0,
      isResolved: false,
    };

    console.log(formObj);

    setFormObj({ ...formObj });
    setIsValid(true);

    const validForm = () => {
      if (subject === "" || description === "") {
        setIsValid(false);
      }
      setIsValid(true);
    };
  };
  return (
    <>
      <div className="ticketpage">
        <h1 className="ticketpage__title">New Ticket Details</h1>
        <p>
          Ready to get started? Please fill out the following form to submit a
          request.
        </p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__first">
          <InputField
            label="Subject"
            placeholder="Fullname"
            type="text"
            name="subject"
          />
          <div className="form__first-select">
            <h3 className="input__label">Select Priority</h3>
            <select className="input__value" name="priority">
              <option type="text" value="">
                Please Select
              </option>
              <option type="text" value="Very High">
                Very High
              </option>
              <option type="text" value="High">
                High
              </option>
              <option type="text" value="Medium">
                Medium
              </option>
              <option type="text" value="Low">
                Low
              </option>
              <option type="text" value="Very Low">
                Very Low
              </option>
            </select>
          </div>
          <div className="form__first-select">
            <h3 className="input__label">Select Category</h3>
            <select className="input__value" name="category">
              <option type="text" value="">
                Please Select
              </option>
              <option type="text" value="Design">
                Design
              </option>
              <option type="text" value="Development">
                Development
              </option>
              <option type="text" value="Security">
                Security
              </option>
              <option type="text" value="Machine Learning">
                Machine Learning
              </option>
              <option type="text" value="HR">
                HR
              </option>
            </select>
          </div>
        </div>
        <div className="form__second">
          <div className="form__first-select">
            <h3 className="input__label">Select Team</h3>
            <select className="input__value" name="team">
              <option type="text" value="">
                Please Select
              </option>
              <option type="text" value="Team BugKillers">
                Team BugKillers
              </option>
              <option type="text" value="Cleanup Crew">
                Cleanup Crew
              </option>
              <option type="text" value="Team Lightspeed">
                Team Lightspeed
              </option>
              <option type="text" value="Boat Crew 2">
                Boat Crew 2
              </option>
              <option type="text" value="The Survivors">
                The Survivors
              </option>
            </select>
          </div>
          {/* <InputField
                    className='form__date'
                    label='Target Completion Date'
                    type='date'
                    name='target_date'
                /> */}
        </div>
        <div className="form__third">
          <InputField
            label="Employee(s) connected to issue"
            placeholder="Employee Names"
            type="text"
            name="employee"
          />
        </div>
        <Textarea label="Ticket Details" type="textarea" name="description" />

        <div className="form__button">
          <button>Submit</button>
          <Link to="/">
            <button className="form__cancel">Cancel</button>
          </Link>
        </div>
      </form>
    </>
  );
}
