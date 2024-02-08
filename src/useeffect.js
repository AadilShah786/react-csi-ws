import React, { useState, useEffect } from 'react';


// function Datafetcher(prop) {
function Datafetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

  // Display the fetched data
  return (
    <div>
      <h1>Fetched Data:</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default Datafetcher;
