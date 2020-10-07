import React, { useState } from "react";

import styled from "styled-components";

const Input = styled.input`
  padding: 5px;
  width: 60%;
  border-radius: 4px;
`;

const Button = styled.button`
  display: none;
`;

function SearchBar({ placeholder, search, value }) {
  const [input, setInput] = useState(value);

  const searchImage = (e) => {
    e.preventDefault();
    search(input);
  };
  return (
    <form>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
        type="text"
      />
      <Button onClick={searchImage} type="submit" />
    </form>
  );
}

export default SearchBar;
