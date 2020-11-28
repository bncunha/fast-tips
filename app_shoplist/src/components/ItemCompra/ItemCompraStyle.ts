import styled from 'styled-components/native';
import { Colors } from '../../utils/constants';

export const Container = styled.View`
  background-color: #fff;
  padding: 30px;
  elevation: 4;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ItemDescription = styled.Text`
  color: #000;
  font-family: 'Roboto-Regular';
  font-size: 16px;
`;

export const DeleteButton = styled.TouchableOpacity`
  margin-left: auto;
`;

export const DeleteTrash = styled.Image`
  width: 30px;
  height: 30px;
`;
 