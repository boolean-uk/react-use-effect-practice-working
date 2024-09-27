import PropTypes from "prop-types";
import { useState } from "react";

function SearchForm({ setSearchQuery }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(search);
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setSearch(inputValue);
  };

  return (
    <form
      className="three-column-grid__expand-two gap-md"
      onSubmit={handleSubmit}
    >
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        id="search"
        name="search"
        onChange={handleChange}
        value={search}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;

SearchForm.propTypes = {
  setSearchQuery: PropTypes.func,
};
