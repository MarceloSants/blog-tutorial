import Navigation from "./components/navigation";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PageRenderer from "./page-renderer";

function App() {
  const user = {
    firstName: 'Marcelo',
    lastName: 'Santos'
  }

  return (
    <Router>
      <div className="App">
        <Navigation user={user}/>
        <Routes>
          <Route path="/:page" Component={PageRenderer} />
          <Route path="/" element={<Navigate to="/home"/>} />
          <Route Component={() => 404} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;