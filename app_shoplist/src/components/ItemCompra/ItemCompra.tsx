import React from 'react';
import { Text } from 'react-native';
import { ItemCompra as ItemCompraModel } from '../../models/ItemCompra.';
import { Container, DeleteButton, DeleteTrash, ItemDescription } from './ItemCompraStyle';

interface ItemCompraProps {
  itemCompra: ItemCompraModel;
  onDelete: (id: string) => void;
};

const ItemCompra: React.FC<ItemCompraProps> = ({itemCompra, onDelete}: ItemCompraProps) => {

  return (
    <Container>
      <ItemDescription> 
        {itemCompra.descricao} 
      </ItemDescription>
      <DeleteButton onPress={() => onDelete(itemCompra.id)}>
        <DeleteTrash
          source={require('./../../assets/icons/trash.png')}
        />
      </DeleteButton>
    </Container>
  );
};

export default ItemCompra;