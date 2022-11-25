import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from './redux/store'
import NavbarComponent from "./components/NavbarComponent"
import Home from "./components/Home"
import Count from "./components/Count"
import Display from "./components/Display"

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/count">
            <Count />
          </Route>
          <Route path="/display">
            <Display />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
