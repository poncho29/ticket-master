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
    <div className="w-100 h-14 flex items-center justify-between px-4 bg-slate-600">
      <p className="text-xl text-white font-bold uppercase md:text-2xl">La Boletera</p>
      <input
        type="text"
        placeholder="Busca tu evento favorito"
        value={search}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        className="px-2 py-1 border-0 rounded-md focus:outline-none"
      />
    </div>
  )
}

Navbar.propTypes = {
  onSearch: PropTypes.func
}