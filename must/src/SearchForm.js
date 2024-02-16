import React from 'react';

function SearchForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(e.target.searchTerm.value);
  };

  return (
    <div className='search'>
    <form onSubmit={handleSubmit}>
      <input name="searchTerm" type="text" placeholder="Search..." />
      <button type="submit">Search...</button>
    </form>
    </div>
  );
}

export default SearchForm;