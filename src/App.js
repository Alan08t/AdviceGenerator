import React, { Component } from 'react';

import { Advice } from './components/Advice';

class App extends Component {
  render() {
    return (
      <main className="bg-dark-blue flex h-screen w-full">
        <Advice/>
      </main>
    );
  }
}

export default App;
