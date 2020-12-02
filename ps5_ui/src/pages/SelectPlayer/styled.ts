import styled from 'styled-components';
import { Colors } from '../../utils/constants';
import Dualsense from '../../assets/dualsense.png';

export const Container = styled.div`
  background: url(${Dualsense}), ${Colors.background};
  height: 100%;
  padding: 50px;
  background-size: 120%;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: -60px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Logo = styled.img`
  width: 150px;
`;

export const DateTime = styled.span`
  display: block;
  text-align: right;
`;

export const TitleContainer = styled.div`
  margin-top: 30px;
`;

export const DualsenseBackground = styled.div`
  background: url(${Dualsense});
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
  pointer-events: none;
  user-select: none;
`;

export const UsersList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`;

export const UserItem = styled.div`
  flex-basis: 280px;
  max-width: 280px;
  height: 100%;
`;