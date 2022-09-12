import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
        <main>
          <Route path="/">
            <Navigation />
          </Route>
      <Switch>
        <Router path="/pet-details-not-found">
          <PetDetailsNotFound />
        </Router>
        <Route path="/search">
          <SearchPage />
        </Route>
          <Route path="/:type/:id">
            <PetDetailsPage />
          </Route>
          <Route path="/:type?">
            <HomePage />
          </Route>
      </Switch>
        </main>
    </Router>
  );
}

export default App;
