import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Hats = () => {
  return <div>Page !</div>;
};

const Shoes = () => {
  return <div>Page 222</div>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" component={Hats} />
          <Route path="/e" component={Shoes} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
