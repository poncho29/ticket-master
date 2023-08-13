import { useState } from "react";
import { PropTypes } from "prop-types";

export const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(search)
    }
  }

  return (
    <div>
      <p>Busca un evento</p>
      <input
        type="text"
        placeholder="Busca tu evento favorito"
        value={search}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
    </div>
  )
}

Navbar.propTypes = {
  onSearch: PropTypes.func
}