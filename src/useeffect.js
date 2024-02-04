import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetching from a local file
    const fetchData = async () => {
      try {
        // Simulating an asynchronous delay with setTimeout
        setTimeout(() => {
          // Simulated data (replace this with actual data fetching logic)
          const simulatedData = {
            title: 'Sample Data',
            content: 'This is some sample data fetched from a local source.',
          };

          setData(simulatedData);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // The return function in useEffect can be used for cleanup (componentWillUnmount in class components)
    return () => {
      console.log('Component is unmounting');
    };
  }, []); // The empty dependency array [] means this effect runs once after the initial render

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Data:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default DataFetcher;
