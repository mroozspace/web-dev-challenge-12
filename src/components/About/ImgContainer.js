import styled from 'styled-components';

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 9px 0;
  padding: 0;
  p {
    font-weight: 900;
    font-size: 19px;
  }
  img {
    object-fit: scale-down;
    max-width: 100%;
    transition: filter 300ms;
    &:hover {
      -webkit-filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.2));
      filter: drop-shadow(0px 2px 14px rgba(0, 0, 0, 0.4));
    }
  }
`;
export default ImgContainer;
