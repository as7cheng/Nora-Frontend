import { Figure } from 'react-bootstrap';
import Overall from './../logo/overall.png';
import Pipeline from './../logo/pipeline.png';
import Server from './../logo/server.png';
import Application from './../logo/app.png';

function Doc() {
  return (
    <div style={{
     marginTop: '3rem',
     marginLeft: '15rem',
     marginRight: '15rem',
     marginBottom: '3rem',
     textAlign: 'center',
     fontSize: '1.0rem',
     width: '75rem auto'
    }}>
     <h2>Nora: a Mini Web App with Data-Pipeline</h2>

     <h6>Design Review Doc by Shihan Cheng</h6>

     <hr />

     <br />

     <br />

     <Figure>

      <Figure.Image
       width='1050rem'
       alt='1050rem'
       src={Overall}
       / >

       <Figure.Caption>
       The overall diagram
       </Figure.Caption>

     </Figure>

     <br />

     <br />

     <p style={{textAlign: 'left'}}>
     This is the design doc, which only explains the ideas and progress of Nora.
     If you want to check out more details about everything i.e. how to create
     an app like Nora step by step, please see <a href="./about">tutorials</a>.
     </p>

     <br />

     <ul style={{textAlign: 'left'}}>

      <strong>Codebase</strong>

      <li>
        <a href='https://github.com/s7prime/Nora_Data-PipeLine' target="_blank">
        Data PipeLine
        </a>
      </li>

      <li>
        <a href='https://github.com/s7prime/Nora-Server' target="_blank">
          Server
        </a>
      </li>

      <li>
        <a href='https://github.com/s7prime/Nora_Frontend' target="_blank">
          Frontend
        </a>
      </li>

     </ul>

     <br />

     <br />

     <h4 style={{textAlign: 'left'}}>
     What is Nora?
     </h4>

     <hr />

     <p style={{textAlign: 'left'}}>
     Nora is a restaurants-data analysis platform. All restaurant data come from
     Yelp Fusion API, have been picked, pruned, and re-formated. Users are able
     to find restaurant data and use the analysis for their own purposes. The
     diagram above presents the overall architecture of Nora. We'll go through
     it later.
     </p>

     <br />

     <h4 style={{textAlign: 'left'}}>
     Why is Nora?
     </h4>

     <hr />

     <p style={{textAlign: 'left'}}>
     The main purpose of this project is to include things as many as possible
     that I've learned in the past three months. It almost covered both options
     1 and 2. The second purpose is to create a reliable and automatic data
     pipeline, and a web app to provide the interaction of data queries and analysis.
     </p>

     <p style={{textAlign: 'left'}}>
     Nora is powerful. In this project, as an example, we also fetched data of
     cities to do some complicated analysis based on the restaurant data and cities'
     populations. As the data size expands and more supportive data resources are found
     (e.g. the data of income: household/year of the locations), the analysis will
     be more precise and detailed. Based on this, no matter you want to invest in
     a restaurant, or advertise in restaurants in some specific city, Nora gives
     you a good reference.
     </p>

     <br />

     <h4 style={{textAlign: 'left'}}>
     Components of Nora
     </h4>

     <hr />

     <p style={{textAlign: 'left'}}>
     There are four major components to build Nora:
     </p>

     <ul style={{textAlign: 'left'}}>
      <li>Data PipeLine</li>
      <li>Database</li>
      <li>Server</li>
      <li>User Interface</li>
     </ul>

      <p style={{textAlign: 'left'}}>
      Data PipeLine is the core because it defines the quality of this project.
      Database is our warehouse. Its security and stability are important.
      Server provides the interfaces to deal with requests from frontend, just
      like APIs. UI is the best place to show charm to users. Now, let's talk
      about them.
      </p>

      <br />

      <h4 style={{textAlign: 'left'}}>

       <li>Data Pipeline</li>

      </h4>

      <hr />

      <p style={{textAlign: 'left'}}>
      To guarantee the data pipeline to be independent, we should create an isolated
      environment for it, that is, no one can find it. Moreover, we do not want to
      fetch the data manually, right? It's boring! Thus, our need is to make
      the data pipeline completely independent and automatic.
      </p>

      <p style={{textAlign: 'left'}}>
      For Data PipeLine, we use the following amazing tools:
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      Yelp Fusion API
      </li>

      <p style={{textAlign: 'left'}}>
      We need good data resources. Yelp brings us this wonderful data resource.
      It's free and easy to use.
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      Ninjas API
      </li>

      <p style={{textAlign: 'left'}}>
      Data resource as the support to get city's information.
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      Python
      </li>

      <p style={{textAlign: 'left'}}>
      A rumor indicates that Python has been considered the best language by
      Java, JS and C++. The news resource comes from Python 3.10.
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      Poetry
      </li>

      <p style={{textAlign: 'left'}}>
      Make your projct dependencies look gorgeous.
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      SQLAlchemy
      </li>

      <p style={{textAlign: 'left'}}>
      To connect with the Database and simplify the SQL queries.
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      Docker
      </li>

      <p style={{textAlign: 'left'}}>
      We want the application to run on different OS, Docker promises to give
      us images that we can use on different systems.
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      ECR(Elastic Container Registry)
      </li>

      <p style={{textAlign: 'left'}}>
      After we are done with all codebase of the data pipeline, we build docker image
      and pass it to ECR. ECR is just like DockerHub, where the lambda function
      can implement the image.
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      Lambda Function
      </li>

      <p style={{textAlign: 'left'}}>
      Where we put docker image in. It's serverless that can be run
      independently. Only needs a trigger.
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      EventBridge
      </li>

      <p style={{textAlign: 'left'}}>
      Yes, I'm the trigger, alternative of AirFlow.
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      S3
      </li>

      <p style={{textAlign: 'left'}}>
      S3 bucket is used to hold some files containing sensitive information
      that we don't want others to see.
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      Slack App
      </li>

      <p style={{textAlign: 'left'}}>
      We use slack app to create logs for the data pipeline during the data process.
      The log can provide information like the amount of data fetched, the success
      or failure of any single data entry, etc.
      </p>

      <br />

      <h4 style={{textAlign: 'left'}}>

       <li>Database</li>

      </h4>

      <hr />

      <p style={{textAlign: 'left'}}>
      Once we decided on the data tables and schema, we create a database
      instance on the cloud.
      </p>

      <p style={{textAlign: 'left'}}>
      For Darabase, we use the following tools:
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      PostgreSQL
      </li>

      <p style={{textAlign: 'left'}}>
      Since we have to make a lot of complicated calculations based on the requests,
      we use the relational database to store and handle queries. Note, we <strong>DO
      NOT</strong> push all needed data to frontend and make calculations there.
      This is because a huge of data will fail the HTTP request by chance
      or slow down the delivery speed.
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      RDS
      </li>

      <p style={{textAlign: 'left'}}>
      We need a place to hold our re-fromatted data from the data pipeline and provide
      data for being requested by the server. RDS is a good place since it's secure,
      and has snapshots to make the backup.
      </p>

      <br />

      <br />

      <Figure>

      <Figure.Image
       width='800rem'
       alt='800rem'
       src={Pipeline}
       / >

       <Figure.Caption>
       The complete workflow of data from resource to database instance
       </Figure.Caption>

      </Figure>

      <p style={{textAlign: 'left'}}>
      The Above image shows the workflow and how to combine these tools.
      Still, if you want to know how to create the pipeline, go to tutorials
      where you are able to find the building process step by step.
      </p>

      <br />

      <br />

      <h4 style={{textAlign: 'left'}}>

       <li>
       Server
       </li>

      </h4>

      <hr />

      <p style={{textAlign: 'left'}}>
      The server part is pretty straightforward. It provides interfaces for
      Frontend. Its main function is to connect to Database, get data, handle
      queries and return query results back.
      </p>

      <p style={{textAlign: 'left'}}>
      For Server, we use the following tools:
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      Python, Poetry, PostgreSQL, Docker, RDS
      </li>

      <p style={{textAlign: 'left'}}>
      Yeah, it's us again!
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      Flask
      </li>

      <p style={{textAlign: 'left'}}>
      The framework we use to create the API routes. It's just amazing!
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      EC2
      </li>

      <p style={{textAlign: 'left'}}>
      We need an always-alive place to hold our docker container.
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      Flask-CORS
      </li>

      <p style={{textAlign: 'left'}}>
      A simple solution for cors issues.
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      Flask-SQLAlchemy and Marshmallow
      </li>

      <p style={{textAlign: 'left'}}>
      Almost the same as SQLAlchemy. It's with simpler syntaxes. Marshmallow is
      for serialization and deserialization.
      </p>

      <br />

      <Figure>
       <Figure.Image
       width='700'
       alt='700rem'
       src={Server}
       / >

       <Figure.Caption>
       The workflow of server
       </Figure.Caption>

      </Figure>

      <br />

      <br />

      <p style={{textAlign: 'left'}}>
      The Above image shows the workflow of the Server. You may find out that
      we will not see any of the Data pipelines running. The database is like
      a drop box.
      </p>

      <br />

      <h4 style={{textAlign: 'left'}}>

       <li>
       Frontend
       </li>

      </h4>

      <hr />

      <p style={{textAlign: 'left'}}>
      The frontend is not fully complete because we only have thousands of data.
      But it's enough to show the concept of this project. The goal is to design
      a user-friendly and logical UI.
      </p>

      <p style={{textAlign: 'left'}}>
      For FrontEnd, we use the following tools:
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      TypeScript
      </li>

      <p style={{textAlign: 'left'}}>
      Powerful!
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      Yarn
      </li>

      <p style={{textAlign: 'left'}}>
      Manages the dependencies and helps build the frontend file hold in S3.
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      React
      </li>

      <p style={{textAlign: 'left'}}>
      The components and hook function are fantastic!
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      React-Bootstrap
      </li>

      <p style={{textAlign: 'left'}}>
      This library provides a lot of useful UI components.
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      API Gateway
      </li>

      <p style={{textAlign: 'left'}}>
      We need API management to handle all requests from the frontend. The reasons
      I chose API Gateway instead of connecting EC2 directly are:

       <ul style={{textAlign: 'left'}}>

        <li>
        EC2 uses HTTP, sometimes when you fetch data e.g. using Axios, will not be
        allowed.
        </li>

        <li>
        It's hard to solve the above problem. EC2 changes the public DNS when we
        reboot the instance. So if we want to add the SSL certificate to its address,
        we also need to apply an Elastic IP address.
        </li>

        <li>
        Since we hold frontend in S3, the above solution is not worth it. Also, API
        Gateway performs better because of the easy mode to enable cors and cache. Just
        clicks!
        </li>

       </ul>

      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      Route53
      </li>

      <p style={{textAlign: 'left'}}>
      Where we host the DNS of our domain.
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      S3
      </li>

      <p style={{textAlign: 'left'}}>
      Where we host the entire frontend part.
      </p>

      <li style={{textAlign: 'left', fontWeight: 'bold'}}>
      CloudFront
      </li>

      <p style={{textAlign: 'left'}}>
      A simple solution for web distribution, make the website can be visited quickly
      across the world.
      </p>

      <br />

      <Figure>
       <Figure.Image
       width='1000rem'
       alt='1000rem'
       src={Application}
       / >

       <Figure.Caption>
       This is the workflow of the web application.
       </Figure.Caption>

      </Figure>

      <br />

      <br />

      <h4 style={{textAlign: 'left'}}>The most import thing</h4>

      <hr />

      <p style={{textAlign: 'left'}}>
      <strong>IAM</strong> and <strong>Policies</strong>. Once some connection
      issue appears while you trying to connect services on AWS, check the IAM
      roles and the attached policies.
      </p>

      <br />

      <h4 style={{textAlign: 'left'}}>Challenges</h4>

      <hr />

      <ul style={{textAlign: 'left'}}>
       <li>Data transform</li>
       <li>Data schema design</li>
       <li>Docker images run on Lambda Function</li>
       <li>Edge cases of API requests</li>
       <li>Frontend</li>
       <li>Configuration(domain, DNS host, distribution) for public sites</li>
      </ul>

      <br />

      <h4 style={{textAlign: 'left'}}>Future improvement</h4>

      <hr />

      <ul style={{textAlign: 'left'}}>
       <li>Deploy all AWS services under the same VPC</li>
       <li>Use AirFlow instead of Lambda + EventBridge</li>
       <li>More data entries and supportive data resources</li>
       <li>Backup for RDS and EC2</li>
       <li>Better UI</li>
       <li>Add on signup and login features and create a database for users</li>
      </ul>


    </div>
  );
};

export default Doc;
