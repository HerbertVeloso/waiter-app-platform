import { Actions, Container, Label, OrderDetails, Overlay } from './styles';

import { useEffect } from 'react';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose(): void;
  onCancelOrder(): Promise<void>;
  onChangeOrderStatus(): Promise<void>;
  isLoading: boolean;
}

export function OrderModal({ visible, order, onClose, onCancelOrder, isLoading, onChangeOrderStatus }: OrderModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);


  if (!visible || !order) {
    return null;
  }

  const totalPrice = order.products.reduce((acc, { product, quantity }) => {
    return acc += product.price * quantity;
  }, 0);

  return (
    <Overlay>
      <Container>
        <header>
          <strong>Mesa {order.table}</strong>
          <button onClick={onClose}><img src={closeIcon} alt='Icone X' /></button>
        </header>

        <div className='status-container'>
          <Label>Status do Pedido</Label>
          <div>
            <span>
              {order.status === 'WAITING' && '🕑'}
              {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em produção'}
              {order.status === 'DONE' && 'Pronto'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <Label>Itens</Label>

          {order.products.map(({ _id, product, quantity }) => (
            <div className='product-details' key={_id}>
              <img
                src={`http://localhost:3001/uploads/${product.imagePath}`}
                alt={product.name}
              />
              <span>{quantity}x</span>
              <div>
                <strong>{product.name}</strong>
                <span>{formatCurrency(product.price)}</span>
              </div>
            </div>
          ))}

          <div className='total'>
            <Label>Total</Label>
            <strong>{formatCurrency(totalPrice)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          {order.status !== 'DONE' && (
            <button
              type='button'
              className='primary'
              disabled={isLoading}
              onClick={onChangeOrderStatus}
            >
              <span>
                {order.status === 'WAITING' && '👩‍🍳'}
                {order.status === 'IN_PRODUCTION' && '✅'}
              </span>
              <strong>
                {order.status === 'WAITING' && 'Iniciar Produção'}
                {order.status === 'IN_PRODUCTION' && 'Concluir Pedido'}
              </strong>
            </button>
          )}

          <button
            type='button'
            className='secondary'
            onClick={onCancelOrder}
            disabled={isLoading}
          >Cancelar Pedido</button>
        </Actions>

      </Container>
    </Overlay>
  );
}
