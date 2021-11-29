import React from 'react';
import { Image } from 'react-bootstrap';
import Overall from './../logo/overall.png';
import Pipeline from './../logo/pipeline.png';
import Application from './../logo/app.png';

function Doc() {
  return (
    <div style={{
      marginTop: '3rem',
      marginLeft: '15rem',
      marginRight: '15rem',
      marginBottom: '3rem',
      textAlign: 'center',
      fontSize: '1.3rem',
      width: '85rem auto'
    }}>
      <h1>Nora: a Mini Web App with Data-Pipeline</h1>
      <h5 style={{textAlign: 'center'}}>
        Design Review Doc by Shihan Cheng
      </h5>
      <br />
      <Image src={Overall} width='1450 auto' rounded thumbnail />
      <br />
      <br />
      <p style={{textAlign: 'left'}}>This is the design doc, which only
        expain the ideas and processes of Nora. If you want to check out more
        details about everyhing i.e. how to create an app like Nora step by step,
        please see <a href="./about">tutorials</a>.
      </p>
      <br />
      <h3 style={{textAlign: 'left'}}>
        What is Nora?
      </h3>
      <hr />
      <p style={{textAlign: 'left'}}>Nora is a restaurants data analysis
        platform. All data come from Yelp Fusion API, have been picked, pruned
        and re-formated. Users are able to find restaurant data and use the
        analysis for own purpose. The diagram above presents the overall
        architecture of Nora. We'll go through it later.
      </p>
      <br />
      <h3 style={{textAlign: 'left'}}>
        Why is Nora?
      </h3>
      <hr />
      <p style={{textAlign: 'left'}}>
        The main purpose of this project is to
        include things as many as possibleI've learned in the past three months.
        It almost covered both option 1 and 2. The second purpose is to create
        a reliable and automatic datapipeline, and a web app to present the
        data queires and analysis.
      </p>
      <br />
      <h3 style={{textAlign: 'left'}}>
        Components of Nora
      </h3>
      <hr />
      <p style={{textAlign: 'left'}}>
        There are three major components to build Nora:
        <li>
          Data PipeLine
        </li>
        <li>
          Server
        </li>
        <li>
          FrontEnd
        </li>
        Data PipeLine is the core of this project since everyhing is based on
        data resouce nowadays. Server provides the interfaces to deal with
        requests from frontend, just like APIs. FrontEnd is the best place to
        show charm to users. Now, let's talk about them.
      </p>
      <br />
      <h3 style={{textAlign: 'left'}}>
        <li>
          Data Pipeline
        </li>
      </h3>
      <hr />
      <p style={{textAlign: 'left'}}>
        To guarantee the data pipeline be secure, we should create an isolated
        environment of it, that is, no one can find it. And we do not want to
        fetch the data manually, right? It's boring! Thus, our need is to make
        the data pipeline completely independent and automatic.
      </p>
      <p style={{textAlign: 'left'}}>
        In this project, we use following amazing tools:
      </p>
      <li style={{textAlign: 'left'}}>
        Yelp Fusion Api
      </li>
      <p style={{textAlign: 'left'}}>
        We need good data resource. Yelp brings us this wonderful data resource.
        It's free and easy to use.
      </p>
      <li style={{textAlign: 'left'}}>
        Python
      </li>
      <p style={{textAlign: 'left'}}>
      A rumor indicates that Python has been considered the best language by
      Java, JS and C++. The news resource comes from Python 3.10.
      </p>
      <li style={{textAlign: 'left'}}>
        Poetry
      </li>
      <p style={{textAlign: 'left'}}>
        Make your independencies look gorgeous.
      </p>
      <li style={{textAlign: 'left'}}>
        Docker
      </li>
      <p style={{textAlign: 'left'}}>
        Make your independencies look gorgeous.
      </p>



    </div>
  );
};

export default Doc;
