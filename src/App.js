import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router >
    <div>
      <Route path=''>
      <Navigation />

      </Route>
      <Route path='/:type?'>

      <HomePage />
      </Route>
    </div>

    </Router>
  );
}

export default App;
