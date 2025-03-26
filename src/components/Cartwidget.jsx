import React from 'react';
import { Badge, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons'; // Icono del carrito

const CartWidget = () => {
  // Definir una cantidad hardcodeada
  const cantidad = 5;

  return (
    <Button type="text" icon={<ShoppingCartOutlined />} style={{ fontSize: '24px' }}>
      <Badge count={cantidad} overflowCount={99} />
    </Button>
  );
}

export default CartWidget;
