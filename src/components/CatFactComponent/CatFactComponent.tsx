import { useState, useRef } from 'react';
import './CatFactComponent.css';
import { ApiService } from '../../services/api_service';

export function CatFactComponent() {
  const [fact, setFact] = useState('');
  const inputRef = useRef();

  const fetchCatFact = async () => {
    const data = await ApiService(`https://catfact.ninja/fact`);
    setFact(data.fact);
    if (inputRef.current) {
      inputRef.current.setSelectionRange(0, data.fact.indexOf(' '));
    }
  };

  const handleButtonClick = () => {
    fetchCatFact();
  };

  return (
    <div className="cat-fact-container">
      <input className="cat-fact-input" type="text" value={fact} onChange={() => {}} />
      <button className="cat-fact-button" onClick={handleButtonClick}>Get Cat Fact</button>
    </div>
  );
};