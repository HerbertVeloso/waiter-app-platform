import styled from 'styled-components';

export const Container = styled.header`
  background-color: #D73035;
  padding: 24px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .texts {
    h1 {
      font-size: 32px;
      font-weight: 600;
      color: #FFFFFF;
      margin-bottom: 6px;
    }

    h2 {
      font-size: 16px;
      font-weight: 400;
      color: #FFFFFF;
    }
  }
`;
