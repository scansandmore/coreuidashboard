import React,{ Component } from "react";
//import { CSpinner } from "@coreui/react-pro";
import "./scss/style.scss";
import thunk from 'redux-thunk'
import { createStore,compose, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import Routers from './navigation/router'
import { Provider } from 'react-redux'
import reducers from './store'

let store = null
const middleware = [thunk]
store = compose(applyMiddleware(...middleware))(createStore)(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
let persistor = persistStore(store)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routers />
      </PersistGate>
    </Provider>
    );
  }
}

export default App;
