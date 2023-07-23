import React, { useState } from 'react';
import './App.css';
import RocketLauncher from './RocketLauncher'

function App() {
  let [launch, setLaunch] = useState(true)
  let [rocketName, setRocketName] = useState('Apollo')

const handleChange =(e) => {
  setRocketName(e.target.value)
}

  return (
    <main>
      <h1>Learning Cleanup!</h1>
      <button onClick={() => setLaunch(!launch)}>
      { launch ? "Abort Launch" : "Start Launch" }
      </button>
      {/* Changing the input will run the componet update*/}
      <input type="text" placeholder="Rocket name" onChange={handleChange} />
      { launch ? <RocketLauncher /> : null }
    </main>
  );
}

export default App;