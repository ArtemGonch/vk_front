import { useState } from 'react';
import './AgePredictionComponent.css';
import { ApiService } from '../../services/api_service';

export function AgePredictionComponent() {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [age, setAge] = useState('');

  const fetchAgePrediction = async () => {
    setLastName(name);
    const data = await ApiService(`https://api.agify.io/?name=${name}`);
    setAge(data.age);
  };

  const handleNameChange = (event:any) => {
    setName(event.target.value);
  };

  const handleFormSubmit = (event:any) => {
    event.preventDefault();
    if (!name){
        alert('Вы отослали пустой запрос, перепроверьте его!');
        return;
    }
    if (name == lastname){
        alert('Вы ввели то же имя!');
        return;
    }
    if (!/^[a-zA-Z]*$/.test(name)) {
        alert('Ваше имя должно содержать только латинсике буквы, исправьте запрос!')
    }
    setTimeout(fetchAgePrediction, 3000);
  };

  return (
    <form className="age-prediction-container" onSubmit={handleFormSubmit}>
      <input className="age-prediction-input" type="text" value={name} onChange={handleNameChange} />
      <button className="age-prediction-button" type="submit">Predict Age</button>
      {age && <p className="age-prediction-result">Age prediction: {age}</p>}
    </form>
  );
};
