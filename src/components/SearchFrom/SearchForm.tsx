import { useState, useEffect } from "react";
import "./styles.css";
import Button from "../Button/Button";
import { SearchContext } from "../SearchResults/SearchContext";
export function SearchForm() {
  const [name, setName] = useState('')
  const [haserror, setHaserror] = useState(false)

  function handleNameChange(event: any) {
    setName(event.target.value)
    setHaserror(event.target.value.trim().length == 0)
  }


  function handleClick() {
    const [users, setusers] = useState([]);
    useEffect(() => {
      (async () => {
        const data = await fetch(`https://dummyjson.com/users/search?q=John`);
        const getusers = await data.json();
        setusers(getusers);
      })();
    }, [])
    return (
      <SearchContext.Provider value={{ users }} />
    )
  }

  return (
    <div className="searchForm">
      <form>
        <label htmlFor="name">Введите запрос</label>
        <input type="text" id="name" className="control" value={name} style={{
          border: haserror ? '3px solid red' : '',
        }}
         onChange={handleNameChange} />
        <Button disabled={haserror} onClick={handleClick} isActive = {!haserror}>Найти</Button>
      </form>
    </div>
  );
}
