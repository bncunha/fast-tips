import React from 'react';
import { FlatList, ListRenderItem, ListRenderItemInfo, Text, TouchableWithoutFeedback, View } from 'react-native';
import { ItemCompra as ItemCompraModel } from '../../models/ItemCompra.';
import { Colors } from '../../utils/constants';
import ItemCompra from '../ItemCompra/ItemCompra';

interface ItensProps {
  listaCompras: ItemCompraModel[];
  onDelete: (id: string) => void;
}

const ListaItens: React.FC<ItensProps> = ({listaCompras, onDelete}: ItensProps) => {

  const renderItemCompra = ({item}: ListRenderItemInfo<ItemCompraModel>) => (
    <ItemCompra itemCompra={item} onDelete={(id) => onDelete(id)}></ItemCompra>
  )

  const renderSeparator = () => (
    <View style={{marginBottom: 15}}></View>
  )

  return (
    !listaCompras?.length ?
    <Text style={{
      color: Colors.secondary,
      fontSize: 18,
      textAlign: "center"
    }}> 
      Sua lista de compras está vazia! 
    </Text> :
    <FlatList
      ItemSeparatorComponent={renderSeparator}
      data={listaCompras}
      contentContainerStyle={{paddingBottom: 20, paddingHorizontal: 2}}
      renderItem={renderItemCompra}
      keyExtractor={item => String(item.id)}
    />
  );
};

export default ListaItens;