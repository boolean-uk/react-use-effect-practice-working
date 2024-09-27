import { useEffect, useState } from "react";

import "./App.css";
import SearchForm from "./components/SearchForm";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [people, setPeople] = useState([]);

  const getPeople = async (searchTerm) => {
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${searchTerm}`
    );
    const data = await response.json();
    setPeople(data.results);
  };

  useEffect(() => {
    if (searchQuery !== "") {
      getPeople(searchQuery);
    }
  }, [searchQuery]);

  return (
    <>
      <h1>Dave&apos;s Application</h1>
      <SearchForm setSearchQuery={setSearchQuery} />

      <ul>
        {people.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
