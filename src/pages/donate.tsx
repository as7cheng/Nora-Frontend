import React from 'react';
import { Image } from 'react-bootstrap';
import NoraEng from './../logo/nora-eng.jpg'

function Donate() {
  return (
    <>

      <div className='mb-auto' style={{
       display: 'flex',
       marginTop: '2rem',
       marginLeft: '2rem',
       flexDirection: 'column',
       textAlign: 'center'
      }}>

       <h2 style={{
        textAlign: 'center'
       }}>
       This is Nora!
       </h2>

       <h5>Hi, I'm Nora, the best puppy software engineer in the world!</h5>

       <br />

       <br />

       <hr />

       <br />

       <br />

      </div>

      <div className='mb-auto' style={{
       display: 'grid',
       gridTemplateColumns: 'repeat(2, 1fr)',
       gridRowGap: '1rem',
       gridColumnGap: '1rem',
       marginLeft: '5rem'
      }}>

       <div className='mb-auto'>

        <Image src={NoraEng} width='680 auto' rounded thumbnail />

       </div>

       <div className='mb-auto' style={{
        marginRight: '5rem',
        marginTop: '1rem',
        fontSize: '1rem',
        textAlign: 'left'
       }}>

        <p>
        Let me introduce to you the best restaurant data analysis platform. Yes,
        it's named as my name - Nora. The sites are still under development, so
        if you feel the UI design is ugly, that must be your problem.
        </p>

        <p>
        This platform is built on so much stuff. If you want to see the design
        doc, please go to the doc section. If you want to learn how to build
        the same web application with a fantastic data pipeline, go check out
        the tutorials section. If you want to play around with current data in
        our database, try data samples and query samples. Ya, I know there are
        only two query examples. Don't judge me, we only have a few data for now.
        But if you are a kind person, you can donate to us to update the service
        tier on AWS. That said, you'll enjoy the huge amount of data brought by
        money power. See? Donate button is at the top-right corner.
        </p>

        <p>
        OK, you can leave the home page now. Click the navigation bars and hang
        around this beautiful place.
        </p>

       </div>

      </div>

    </>
  );
};

export default Donate;
