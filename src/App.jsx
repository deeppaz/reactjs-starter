/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './router/index';
import Index from './layouts';

function App() {
  return (
    <div className="text-3xl">
      <Index />
    </div>
  );
}

export default App;
