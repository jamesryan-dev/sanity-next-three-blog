import styled from "styled-components";

export const ErrorMessage = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20vh;
  .content {
    display: flex;
    flex-direction: column;
    width: auto;
    position: relative !important;
    text-align: center;
    h2 {
      margin-bottom: 12px;
    }
    p {
      width: 66.6%;
      margin: 0 auto;
    }
  }
`;
