import React from 'react';
import { Image } from 'react-bootstrap';
import NoraEng from './../logo/nora-eng.jpg'

function Home() {
  return (
    <>
      <div style={{
          display: 'flex',
          marginTop: '2rem',
          marginLeft: '2rem',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <h1 style={{
            textAlign: 'center'
            }}>This is Nora!</h1>
          <h5> Hi, I'm Nora, the best puppy-software-engineer in the world!</h5>
          <hr />
          <br />
      </div>
     <div style={{
		display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridRowGap: '1rem',
                gridColumnGap: '2rem',
                marginLeft: '5rem'
		}}
                >
              <Image src={NoraEng} width='700 auto' rounded thumbnail/>
              <div style={{
                marginRight: '3rem',
                fontSize: '1.3rem',
                textAlign: 'left'
              }}>
                <p>Let me introduce you the best restaurant-data-analysis
                  platform, yes, it's named as my name - Nora.
                  The sites are still under development, so if you feel the UI
                  design is ugly, that must be your problem.</p>
                <p>This platform is built on so many stuff. If you want to see
                  the design doc, please go to the doc section. If you want to
                  learn how to build a same web application with a fantastic
                  data-pipeline, go check out the tutorials section. If you
                  want to play around with current data in our database, try
                  data samples and query samples. Ya, I know there are only two
                  query examples. Don't judge me, we only have few data for
                  now. But if you are a kind person, you can donate us to
                  update the service tier on AWS. That said, you'll enjoy the
                  huge amount of data brought by money power. See? Donate
                  button is at the top-right corner.</p>
                <p>OK, you can leave the home page and click the navigation
                    bars and hang around this beautiful thing.</p>
              </div>
    </div>
    </>
  );
};


export default Home;


