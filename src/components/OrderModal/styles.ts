import styled from 'styled-components';


export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 480px;
  background-color: #FFFFFF;
  border-radius: 8px;
  padding: 32px;

  display: flex;
  flex-direction: column;
  gap: 32px;


  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }
    button {
      line-height: 0;
      border: 0;
      background-color: transparent;
    }
  }


  .status-container {
    div {
      margin-top: 8px;
      display: flex;
      gap: 8px;
    }
  }
`;


export const OrderDetails = styled.div`
  .product-details {
    display: flex;
    gap: 12px;

    img {
      width: 40px;
      height: 40px;
      border-radius: 6px;
    }

    > span {
      display: block;
      min-width: 20px;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 4px;

      span {
        font-size: 14px;
        color: #666666;
      }
    }

    & + .product-details {
      margin-top: 16px;
    }
  }

  .total {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
  }
`;


export const Label = styled.span`
  display: block;
  opacity: 0.8;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
`;


export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .primary {
    background-color: #333333;
    border-radius: 48px;
    border: 0;
    padding: 12px;
    color: #FFFFFF;
    font-size: 16px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .secondary {
    border: 0;
    background-color: transparent;
    color: #D73035;
    font-weight: 600;
  }
`;
