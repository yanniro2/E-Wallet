import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store'; // Make sure the path to your store file is correct
import Home from './Views/Home';
import AddCard from './Views/AddCard';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/addcard" element={<AddCard />} />
            {/* Add additional routes here as needed */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
