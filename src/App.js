import React from "react";
import { Router, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ImageDetail from "./pages/ImageDetails";
import { createBrowserHistory as createHistory } from "history";
import TopBar from "./TopBar";
import ImageSearchPage from "./ImageSearchPage";
import "./App.css";
import {Provider} from 'react-redux';
import {createStore } from 'redux';
import rootReducer from './reducers';
import Navbars from "./components/Header/navbars";


export const  store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const history = createHistory();
function App() {
  return (
    <div className="App">
        <Provider store={store}>
      <Router history={history}>        
      <Navbars/>
        <Route path="/" exact component={HomePage} />
        <Route path="/imagesearch" exact component={ImageSearchPage} />        
        <Route exact path={'/image/:id'} component={ImageDetail}/>
      </Router>
      </Provider>
    </div>
  );
}
export default App;