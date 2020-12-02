import styled from 'styled-components';
import { Colors } from '../../utils/constants';

export const PsButtonStyle = styled.button`
  color: #fff;
  background-color: ${Colors.blue};
  border-radius: 30px;
  padding: 10px;
  font-size: 12px;
`;

export const PsButtonIcon = styled.div`
  background: #fff;
  border-radius: 50%;
  color: ${Colors.blue};
  width: 24px;
  height: 24px;
  display: inline-block;
  margin-right: 10px;
  font-weight: 600;
  padding: 4px;
  border: none;
`;
