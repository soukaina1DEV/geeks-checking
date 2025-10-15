import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) navigate(`/search/${text}`);
    setText("");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
