import styled from "styled-components";

export const LargeImageComp = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  img {
    width: 100%;
    object-fit: ${(props: { fitToWindow: boolean }) =>
      props.fitToWindow ? "cover" : "contain"};
  }

  @media only screen and (max-width: 768px) {
    img {
      object-fit: cover;
    }
  }
`;
