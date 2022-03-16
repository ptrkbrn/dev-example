/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import Listing from './Listing';
import './App.css';

function App() {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    fetch('https://gemlux.com/collections/rigging-kits/products.json')
      .then((res) => res.json())
      .then((data) => {
        setListings(data.products.slice(0, 3));
      });
  }, []);
  console.log(`listings: ${listings}`);
  return (
    <div className="App">
      <h1>Rigging Kits</h1>
      <div className="container">
        {listings.map((listing) => <Listing title={listing.title} image={listing.images[0].src} />)}
      </div>
    </div>
  );
}

export default App;
