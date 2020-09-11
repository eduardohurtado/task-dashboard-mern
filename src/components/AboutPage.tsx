import React, { Component } from "react";

//Tools
import LazyImage from "./tools/LazyImage";

//Style SCSS
import "../sass/aboutPage.scss";

export default class AboutPage extends Component {
  render() {
    const mystyles = {
      color: "green",
    } as React.CSSProperties;

    const imageBackground = {
      alt: "Background",
      width: "100%",
      height: "350px",
      src: "./src/img/mern.jpg",
    };

    const imageMern = {
      alt: "MernStack",
      width: "85%",
      height: "auto",
      src: "./src/img/mern-stack-1.png",
    };

    return (
      <div className="aboutPage">
        {/* <div className="empty"></div> */}
        <LazyImage
          alt={imageBackground.alt}
          width={imageBackground.width}
          height={imageBackground.height}
          src={imageBackground.src}
        />
        <div className="container">
          <div className="bodyPage">
            <div className="center">
              <h1 className="aboutTitle">I'M GLAD TO HAVE YOU HERE!</h1>
            </div>
            <p>
              This software was born as a personal practice to improve skills in
              ReactJS and the Node environment, also, this is a React-Router
              multi tab and mobile first application.
            </p>
            <h2 className="center">
              <b>MERN STACK</b>
            </h2>
            <p>
              What is the MERN Stack? MERN stands for MongoDB, Express, React,
              Node, after the four key technologies that make up the stack.
            </p>
            <ul>
              <li>MongoDB - document database</li>
              <li>Express(.js) - Node.js web framework</li>
              <li>React(.js) - a client-side JavaScript framework</li>
              <li>Node(.js) - the premier JavaScript web server</li>
            </ul>
            <p>
              MERN is one of several variations of the{" "}
              <b style={mystyles}>MEAN stack</b> (MongoDB Express Angular Node),
              where the traditional Angular.js frontend framework is replaced
              with React.js. Other variants include MEVN (MongoDB, Express, Vue,
              Node), and really any frontend JavaScript framework can work.
            </p>
            <p>
              Express and Node make up the middle (application) tier. Express.js
              is a server-side web framework, and Node.js the popular and
              powerful JavaScript server platform. Regardless of which variant
              you choose, ME(RVA)N is the ideal approach to working with
              JavaScript and JSON, all the way through.
            </p>
            <h3>How does the MERN stack work?</h3>
            <p>
              The MERN architecture allows you to easily construct a 3-tier
              architecture (frontend, backend, database) entirely using
              JavaScript and JSON.
            </p>
            <div className="center">
              <LazyImage
                alt={imageMern.alt}
                width={imageMern.width}
                height={imageMern.height}
                src={imageMern.src}
              />
            </div>
            <h3>React.js Front End</h3>
            <p>
              The top tier of the MERN stack is React.js, the declarative
              JavaScript framework for creating dynamic client-side applications
              in HTML. React lets you build up complex interfaces through simple
              Components, connect them to data on your backend server, and
              render them as HTML.
            </p>
            <p>
              React’s strong suit is handling stateful, data-driven interfaces
              with minimal code and minimal pain, and it has all the bells and
              whistles you’d expect from a modern web framework: great support
              for forms, error handling, events, lists, and more.
            </p>
            <h3>Express.js and Node.js Server Tier</h3>
            <p>
              The next level down is the Express.js server-side framework,
              running inside a Node.js server. Express.js bills itself as a
              “fast, unopinionated, minimalist web framework for Node.js,” and
              that is indeed exactly what it is. Express.js has powerful models
              for URL routing (matching an incoming URL with a server function),
              and handling HTTP requests and responses.
            </p>
            <p>
              By making XML HTTP Requests (XHRs) or GETs or POSTs from your
              Angular.js front-end, you can connect to Express.js functions that
              power your application. Those functions in turn use MongoDB’s
              Node.js drivers, either via callbacks for using Promises, to
              access and update data in your MongoDB database.
            </p>
            <h3>MongoDB Database Tier</h3>
            <p>
              If your application stores any data (user profiles, content,
              comments, uploads, events, etc.), then you’re going to want a
              database that’s just as easy to work with as Angular, Express, and
              Node.
            </p>
            <p>
              That’s where MongoDB comes in: JSON documents created in your
              Angular.js front end can be sent to the Express.js server, where
              they can be processed and (assuming they’re valid) stored directly
              in MongoDB for later retrieval. Again, if you’re building in the
              cloud, you’ll want to look at Atlas. If you’re looking to set up
              your own MERN stack, read on!
            </p>
            <h3>Is MERN a full-stack solution?</h3>
            <p>
              Yes, MERN is a full-stack, following the traditional 3-tier
              architectural pattern, including the front-end display tier
              (React.js), application tier (Express.js and Node.js), and
              database tier (MongoDB).
            </p>
            <h3>Why choose the MERN stack?</h3>
            <p>
              Let’s start with MongoDB, the document database at the root of the
              MERN stack. MongoDB was designed to store JSON data natively (it
              technically uses a binary version of JSON called{" "}
              <b style={mystyles}>BSON</b>), and everything from its command
              line interface to its query language (MQL, or MongoDB Query
              Language) is built on JSON and JavaScript.
            </p>
            <p>
              MongoDB works extremely well with Node.js, and makes storing,
              manipulating, and representing JSON data at every tier of your
              application incredibly easy. For cloud-native applications,
              <b style={mystyles}>MongoDB Atlas</b> makes it even easier, by
              giving you an auto-scaling MongoDB cluster on the cloud provider
              of your choice, as easy as a few button clicks.
            </p>
            <p>
              Express.js (running on Node.js) and React.js make the
              JavaScript/JSON application MERN full stack, well, full.
              Express.js is a server-side application framework that wraps HTTP
              requests and responses, and makes it easy to map URLs to
              server-side functions. React.js is a frontend JavaScript framework
              for building interactive user interfaces in HTML, and
              communicating with a remote server.
            </p>
            <p>
              The combination means that JSON data flows naturally from front to
              back, making it fast to build on and reasonably simple to debug.
              Plus, you only have to know one programming language, and the JSON
              document structure, to understand the whole system!
            </p>
            <p>
              MERN is the stack of choice for today’s web developers looking to
              move quickly, particularly for those with React.js experience.
            </p>
            <h3>MERN Use Cases</h3>
            <p>
              Like any web stack, you can build whatever you want in MERN -
              though it’s ideally suited for cases that are JSON-heavy,
              cloud-native, and that have dynamic web interfaces.
            </p>
            <p>A few examples might be:</p>
            <ul>
              <li>Workflow management</li>
              <li>News aggregation</li>
              <li>Todo apps and Calendars</li>
              <li>Interactive forums / social products</li>
            </ul>
            <p>And whatever else you can dream up!</p>
            <h3>Related Resources:</h3>
            <ul>
              <li>
                <a
                  target="blank"
                  href="https://en.wikipedia.org/wiki/MEAN_(solution_stack)"
                >
                  <b style={mystyles}>What is the MEAN Stack?</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
