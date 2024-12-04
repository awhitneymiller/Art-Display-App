import { useState } from 'react';
import './App.css';

function Heading({title}){
  return <h1>{title}</h1>
}

function Button({ label, action }) {
  return <button onClick={action}>{label}</button>;
}

function App() {
  const [imageUrl, setImageUrl] = useState('');

  function getData() {
    const randomStatusCode = [100, 200, 300, 400, 500][Math.floor(Math.random() * 5)]; // Random status code
    const apiUrl = `https://http.cat/${randomStatusCode}`;
    setImageUrl(apiUrl);
  }

  return (
    <>
      <div className = "catgif">
      <img src="cat.gif"></img>
      </div>
      <div className="flex-container">
      <Heading title={"Cat Error Codes"} />
        <Button action={getData} label="Show Cat!" />
        {imageUrl && <img src={imageUrl} alt="Random HTTP Cat" />}
      </div>
    </>
  );
}

export default App;
