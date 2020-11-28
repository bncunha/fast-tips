import styled from 'styled-components/native';
import { Colors } from '../../utils/constants';

export const TitlePage = styled.Text`
  font-size: 30px;
  color: ${Colors.secondary};
  text-align: center;
  font-family: 'Roboto-Medium';
  margin-top: 50px;
`;

export const InputContainer = styled.View`
  background-color: #fff;
  flex-direction: row;
  margin: 30px 0px;
  elevation: 4;
  border-radius: 5px;
`;

export const InputText = styled.TextInput`
  padding: 25px 10px;
  flex: 1;
`;

export const ButtonContainer = styled.View`
  flex-basis: 50px;
`;

export const AddButton = styled.TouchableHighlight`
  margin: 0;
  background-color: #16697a;
  width: 70px;
  align-items: center;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  elevation: 4;
`;

export const ButtonText = styled.Text`
  color: #f8f1f1;
  text-align: center;
  margin-top: 30px;
`;
