import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AddButton, ButtonContainer, ButtonText, InputContainer, InputText, TitlePage } from './HomeStyle';
import ListaItens from '../../components/ListaItens/ListaItens';
import { ItensCompraService } from '../../services/ItensCompraService';
import { ItemCompra as ItemCompraModel } from '../../models/ItemCompra.';
import { Api } from '../../services/api';
import ItemCompra from '../../components/ItemCompra/ItemCompra';


const Home = () => {
  const [novoItem, setNovoItem] = useState('');
  const [listaCompras, setListaCompras] = useState<ItemCompraModel[]>([]);
  const itemCompraService = new ItensCompraService(); 

  const addItem = async () => {
    if (novoItem) {
      try {
        const item = {
          id: Api.generateKey(),
          descricao: novoItem
        };
        setListaCompras([await itemCompraService.addItem(item), ...listaCompras]);
        setNovoItem('');
      } catch(err) {
        console.error(err);
      }
    }
  };

  const getItems = async () => {
    try {
      const items = await itemCompraService.getItems();
      setListaCompras(items);
    } catch(err) {
      console.error(err);
    }
  };

  const deleteItem = async (id: string) => {
    await itemCompraService.deleteITem(id)
    getItems();
  }

  useEffect(() => {
    getItems();
  }, [])

  return (
    <View>
      <TitlePage> Lista de compras </TitlePage>
      <InputContainer>
        <InputText 
          placeholder="Adicionar um item..."
          value={novoItem}
          onChangeText={(novoItem) => setNovoItem(novoItem)}
        />
        <AddButton onPress={addItem}>
          <ButtonText> Add </ButtonText>
        </AddButton>
      </InputContainer>
      <ListaItens
        onDelete={(id) => deleteItem(id)}
        listaCompras={listaCompras}
      />
    </View>
  );
};

export default Home;
