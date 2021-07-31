import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Components/Header';
import Details from './Pages/Details';
import Home from './Pages/Home';


function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkTheme])


  return (
    <Router>
      <Header
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
      />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route
          path="/details/:country"
          render={(props) => <Details {...props} darkTheme={darkTheme} />}
        />
      </Switch>

    </Router>
  );
}

export default App;
