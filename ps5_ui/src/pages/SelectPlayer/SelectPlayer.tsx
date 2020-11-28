import React from 'react';
import PS5Logo from '../../assets/PS5_logo.png';
import { DateTime, Container, Logo } from './styled';
import moment from 'moment';

export default function SelectPlayer() {

  return (
    <Container className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <Logo src={PS5Logo} alt="Playstation Logo"/>
        </div>
        <div className="col-lg-6 justigy-">
          <DateTime> { moment().format('HH:mm') } </DateTime>
        </div>
      </div>
      <span> DualSense connected </span>
      <h1> Who is using the controller? </h1>
    </Container>
  )
}