import React from 'react';
import { Image } from 'react-bootstrap';
import Staring from './../logo/staring.jpg';

function Donate() {
  return (
    <>

      <div className='mb-auto' style={{
       marginTop: '6rem'
      }}>

       <div className='mb-auto' style={{
       textAlign: 'center'
       }}>

        <Image src={Staring} width='400 auto' rounded thumbnail />

       </div>

       <div className='mb-auto' style={{
        marginTop: '1rem',
        fontSize: '1rem',
        textAlign: 'center'
       }}>

        <h5>
        Hold your money and be patient. The donation opportunity is coming soon.
        </h5>

       </div>

      </div>

    </>
  );
};

export default Donate;
