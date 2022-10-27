import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/Homepage';
import PageHeader from './components/PageHeader/PageHeader';

function App() {
  return (<>
    <div className='App'>
      <Router>
        <PageHeader />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  </>)
}

export default App;