import React from "react";

import styled from "styled-components";

const Image = styled.img`
  border-radius: 4px;
  max-width: 100%;
  max-height: 100%;
`;

function Card({ image }) {
  return <Image src={image} alt="image" />;
}

export default Card;
