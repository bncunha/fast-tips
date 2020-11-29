import styled from 'styled-components';
import { Colors } from '../../utils/constants';
import Dualsense from '../../assets/dualsense.png';

export const Container = styled.div`
  background: ${Colors.background};
  height: 100%;
  padding: 50px;
  overflow: hidden;
  background-size: 120%;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: -60px;
`;

export const Logo = styled.img`
  width: 150px;
`;

export const DateTime = styled.span`
  display: block;
  text-align: right;
`;

export const TitleContainer = styled.div`
  margin-top: 50px;
`;

export const DualsenseBackground = styled.div`
  background: url(${Dualsense}), ${Colors.background};
  width: 100%;
  height: 100%;
  background-size: 120%;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: -60px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
`;
