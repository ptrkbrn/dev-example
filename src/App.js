/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import Listing from './Listing';
import './App.css';

function App() {
  const [listings, setListings] = useState([]);
  // on page load, fetches first 3 item listings
  useEffect(() => {
    fetch('https://gemlux.com/collections/rigging-kits/products.json')
      .then((res) => res.json())
      .then((data) => {
        // sets item listings in state
        setListings(data.products.slice(0, 3));
      });
  }, []);
  return (
    <div className="App">
      <h1>Rigging Kits</h1>
      <div className="container">
        {listings.map((listing) => (
          <Listing
            title={listing.title}
            image={listing.images[0].src}
            key={listing.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
