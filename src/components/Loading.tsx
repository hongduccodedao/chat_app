import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledLoading = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 99rem;
  position: relative;
  margin: 0 auto;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    border: 4px solid transparent;
    border-right-color: #ff6bcb;
    border-bottom-color: #ffa400;
    animation: circleLoading 1s forwards infinite linear;
  }

  @keyframes circleLoading {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return (
    <StyledContainer>
      <StyledLoading></StyledLoading>
    </StyledContainer>
  );
};

export default Loading;
