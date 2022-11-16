import styled from 'styled-components';

export const Board = styled.div`
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  padding: 16px;
  flex: 1;

  > header {
    font-size: 14px;
    padding:  8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  button {
    height: 128px;
    padding: 40px 16px;
    background-color: #FFFFFF;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    strong {
      font-weight: 500;
      font-size: 16px;
      color: #333333;
    }

    span {
      font-size: 14px;
      color: #666666;
    }
  }
`;
