import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/Homepage";
import PageHeader from "./components/PageHeader/PageHeader";
import TicketPage from "./pages/TicketPage/TicketPage";
import { useState, useEffect } from "react";
import { getLoggedInUser } from "./utils/apiCalls";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const results = await getLoggedInUser();
        setLoggedInUser(results.data);
      } catch (e) {
        console.log(e);
      }
    };

    if (!loggedInUser) {
      getUser();
    }
  }, [loggedInUser]);

  if (loggedInUser) {
    return (
      <>
        <div>
          <Router>
            <PageHeader username={loggedInUser.name} />
            <Routes>
              <Route path="/" element={<HomePage userId={loggedInUser.id} />} />
              <Route path="/tickets" element={<TicketPage />} />
              {/* <Route path="/user" element={<UserPage />} /> */}
            </Routes>
          </Router>
        </div>
      </>
    );
  }

  if (!loggedInUser) {
    return <h1>Please wait... Loading User and ticket information</h1>;
  }
}

export default App;
