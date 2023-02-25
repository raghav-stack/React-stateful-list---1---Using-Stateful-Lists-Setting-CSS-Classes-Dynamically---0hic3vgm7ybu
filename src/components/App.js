import React, { useState } from 'react'

import '../styles/App.css';

const data = {
  '2018': [
    'Avengers 1',
    'Now you see me',
    'Fast and Furious 7'
  ],
  '2019': [
    'Avengers 2',
    'Now you see me 2',
    'Fast and Furious 8'
  ],
  '2020': [
    'Final Avengers Movie(Iron man dies)',
    'Now you finally used Lenskart',
    'Covid Came'
  ],
  '2021': [
    'Covid Returns',
  ],
  '2022': [
    'Adventures of Saiman',
    'Adventures of Shaktiman'
  ]
}
const App = () => {
  const [selected, setSelected] = useState();

  return (
    <div id="main">
      <select onChange={(e) => setSelected(e.target.value)}>
        <option value={null}></option>
        {Object.keys(data).map((year, idx) => {
          return (
            <option key={idx} value={year}>
              {year}
            </option>
          );
        })}
      </select>
      <div id="selected-year">
        {selected ? `Selected year-${selected}` : "No year selected"}
      </div>
      <ul>
        {selected && data[selected].map((mov, idx) => <li key={idx}>{mov}</li>)}
      </ul>
    </div>
  );
};


export default App;
