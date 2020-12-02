import styled, { css } from 'styled-components';
import PsButton from '../PsButton/PsButton';

interface UserImageProps {
  type?: 'new' | 'guest' | 'user';
}

interface CardContainerProps {
  type?: 'new' | 'guest' | 'user';
  mainColor?: string;
}

export const UserImage = styled.img<UserImageProps>`
  width: ${props => {
    if (props.type === 'new') return'65px;';
    else if (props.type === 'guest') return '75px;';
    else return '130px;';
  }}
  height: ${props => {
    if (props.type === 'new') return'65px;';
    else if (props.type === 'guest') return 'auto;';
    else return '130px;'
  }}
  margin: auto;
  display: block;
  margin-bottom: 20px;
  transition: all 0.4s ease;
`;

export const UserContainer = styled.div`
  margin: auto;
  max-width: 200px;
  text-align: center;
  transition: all 0.4s ease;
`;

export const UserName = styled.span`
  font-weight: 700;
  text-align: center;
  margin-bottom: 13px;
  display: block;
  font-size: 20px;
`

export const LastOnline = styled.span`
  font-size: 14px;
  font-weight: 400;
  display: block;
  margin-bottom: 28px;
`;

export const PsPlus = styled.img`
  width: 20px;
  margin-left: 10px;
`;

export const LoginButtonContent = styled.div`
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
`;

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;


  background: #fff;
  width: 280px;
  height: 310px;
  padding-top: 40px;
  padding-bottom: 40px;
  transition: all 0.4s ease;
  cursor: pointer;

  ${props => props.type === 'user' && css<CardContainerProps>`  
    &:hover {
      background: linear-gradient(0deg, #000 0%, ${(props: any) => props.mainColor} 100%);
      transform: translateY(-10px);
      box-shadow: 0px 5px 7px -2px #a0a0a0;
      height: 360px;
      max-height: 360px;
    }

    &:hover ${UserImage} {
      width: 170px;
      height: auto;
      transform: translateY(-60px)
    }

    &:hover ${UserContainer} {
      transform: translateY(-60px);
      color: #fff;
    }

    &:hover ${LoginButtonContent} {
      visibility: visible;
      opacity: 1;
    }
  `}

  ${props => props.type !== 'user' && css`  
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0px 5px 7px -2px #a0a0a0;
    }
  `}
`;