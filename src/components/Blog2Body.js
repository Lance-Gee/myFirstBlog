import React from "react";
import classes from "./Blog2Body.module.css";
import sample from "../images/blog2/whatAppWillLookLike.png";
import reactInstall from "../images/blog2/React_install.png";
import startup from "../images/blog2/react_startup_terminal.png";
import reactLogo from "../images/blog2/browser_startup.png";
import explorer from "../images/blog2/explorer.png";
import appjs from "../images/blog2/appjs.png";
import appjsMod from "../images/blog2/appjs_modified.png";
import VSTerminal from "../images/blog2/VS_terminal.png";
import { CopyBlock, irBlack } from "react-code-blocks";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import YouTubeEmbed from "./YouTubeEmbed";

function Blog2Body() {
  function MyCodeComponent(props) {
    return (
      <CopyBlock
        text={props.code}
        language={props.language}
        showLineNumbers={props.showLineNumbers}
        startingLineNumber={props.startingLineNumber}
        wrapLines
      />
    );
  }
  return (
    <React.Fragment>
      <div>
        <h1>Background Information and Expectation</h1>
        <p>
          As I stated in my first blog some prerequisites for learning React are
          some basic HTML, CSS, and JavaScript. If you haven't already read my
          first blog I'd suggest reading that first before starting this
          tutorial. From my first blog, you will gain a better understanding of
          the core concepts I will be demonstrating. This blog tutorial is meant
          for beginners, with no prior experience with web development. I will
          be explaining a lot of the details in setting up a React app and
          getting the application up and going. A lot of times in many tutorials
          I have found that the setup of the application is often skimmed
          through quickly or not explained at all. This can often leave the
          reader either unable to move on to the next steps or leaving them
          unable to run the application at all, with errors they don't
          understand. The intent is for the reader to get a better understanding
          of the initial setup of the application so that they can pick up
          things quicker on other React tutorials.
        </p>
      </div>
      <br />
      <div className="text-center">
        <h3>Watch The Tutorial Here.</h3>
        <YouTubeEmbed embedId="7HmoQoCCwek" />
      </div>
      <br />
      <br />
      <div>
        <h1>What we are building</h1>
        <p>
          In this tutorial, we will be building a very simple input field that
          changes the title every time you input something in the input field,
          as well as add the input into a list below. I will not be
          incorporating any CSS frameworks such as Bootstrap in this tutorial,
          as that may distract or confuse anyone that is new coming into
          building web apps. I will solely focus on React and the components it
          offers, and maybe I can blog about a CSS framework on my next blog.
          <br />
          <br />
          Here is a sample of what the application will look like;
        </p>
        <img style={{ width: "300px" }} src={sample} alt="Sample" />
        <h1>System Setup for React</h1>
        <p>
          Ok so before we get started with React we will require a few things to
          be installed on your computer. <br /> <strong>Node.js</strong> -
          Node.js is an open-source server environment, we won't be touching any
          node but we will require it to get some of the packages we require.
          <br />
          <br />
          <strong>NPM (NodeJs Package Manager)</strong> - Is bundled with
          Node.js and is used to download and manage all the packages that we
          will be using in this instance it will only be React. If you don't
          have Node installed already on your computer you will first need to do
          this by going to the below link. Install the correct version based on
          your computer.
        </p>
        <a href="https://nodejs.org/en/download/">NODE JS</a>
        <br />
        <br />
        <p>
          If you have Node installed already on your computer check to see what
          version of node you have. At the time of this article, I am using Node
          version 16.13.1. To check your version you can open a command prompt
          and type in the command below. <br />
          Node -v I will be using VSCode as my code editor, so if your following
          along make sure you download VScode or you can use any other code
          editor of your choice. Below is a link to get VSCode
        </p>
        <div className={classes.demo}>
          <CopyBlock
            language={"jsx"}
            text={`node -v`}
            showLineNumbers={true}
            theme={irBlack}
            wrapLines={true}
            codeBlock
          />
        </div>
        <p>
          I will be using VSCode as my code editor, so if your following along
          make sure you download VScode or you can use any other code editor of
          your choice. Below is a link to get VSCode;
        </p>
        <a href="https://code.visualstudio.com">VSCode</a>
        <br />
        <br />
        <h1>Creating A React App</h1>
        <p>
          The simplest way to start a React app is by using the
          <strong>
            <i> “create-react-app”</i>
          </strong>{" "}
          script. Using{" "}
          <strong>
            <i>“npx”</i>
          </strong>{" "}
          command we can create all the necessary dependencies that React needs.
          Ok, so let's navigate to a folder that you want to create your React
          app in. You will have to go to this folder using the terminal so with
          in the terminal in the folder you chose type the following command.
        </p>
        <div className={classes.demo}>
          <CopyBlock
            language={"jsx"}
            text={`npx create-react-app my-react-app`}
            showLineNumbers={true}
            theme={irBlack}
            wrapLines={true}
            codeBlock
          />
        </div>
        <p>
          Where{" "}
          <strong>
            <i>“my-react-app”</i>
          </strong>{" "}
          is any name you want to call your app. For me I will call my app{" "}
          <strong>
            <i>“blog2-react-tutorial”</i>
          </strong>
          . You should now see a bunch of things being installed in your folder.
          This process could take up to a few minutes depending on your internet
          speed and computer setup.{" "}
        </p>
        <p>..... Few Minutes Later</p>
        <img
          style={{ width: "800px" }}
          src={reactInstall}
          alt="install-screen"
        />
        <br />
        <br />
        <p>
          Alright so now that you have your first React app created lets go into
          the newly created folder which should be in the folder you chose and
          then another folder with the name you created for your app. I'm using
          windows so I'll use the following text to enter the folder.
        </p>
        <div className={classes.demo}>
          <CopyBlock
            language={"jsx"}
            text={`cd blog2-react-tutorial`}
            showLineNumbers={true}
            theme={irBlack}
            wrapLines={true}
            codeBlock
          />
        </div>
        <br />
        <p>
          Remember this is all done within the terminal. Now from within that
          folder lets type the below;
        </p>
        <div className={classes.demo}>
          <CopyBlock
            language={"jsx"}
            text={`npm start`}
            showLineNumbers={true}
            theme={irBlack}
            wrapLines={true}
            codeBlock
          />
        </div>
        <br />
        <p>At this point you should see something like this --></p>
        <img style={{ width: "800px" }} src={startup} alt="startup-terminal" />
        <br />
        <br />
        <p>
          And if your browser hasn't already opened a new tab with your react
          app showing, you can go to the address in your terminal on your
          browser and type -->
          <br />
          <br />
          <strong>http://localhost:3000</strong>
          <br />
          <br />
          which should display something like the below picture.
        </p>
        <img style={{ width: "500px" }} src={reactLogo} alt="react-logo" />
        <br />
        <br />
        <h1>Cleanup Work before we start</h1>
        <p>
          Alright lets start out by deleting some files that we don’t need to
          create this app. In VSCode if you open up your file explorer you will
          see the following files under the “src” folder.
        </p>
        <img style={{ width: "300px" }} src={explorer} alt="explorer" />
      </div>
      <br />
      <p>Lets delete the following files:</p>
      <ul>
        <li>App.test.js</li>
        <li>App.css</li>
        <li>index.css</li>
        <li>logo.svg</li>
        <li>reportWebVitals.jss</li>
        <li>setupTests.js</li>
      </ul>
      <p>
        We will also delete a lot of things from the App.js file. This is what
        App.js looks like now -->
      </p>
      <img style={{ width: "700px" }} src={appjs} alt="app-js" />
      <br />
      <br />
      <p>After deleting it should look like this --></p>
      <br />
      <img style={{ width: "500px" }} src={appjsMod} alt="appJsMod" />
      <br />
      <br />
      <p>
        I've added an &lt;h2&gt; tag to give it a title for now. <br />
        Index.js will look like the below -->
      </p>
      <br />
      <div className={classes.demo}>
        <CopyBlock
          language={"jsx"}
          text={`
  import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';
  import App from './App';
  import reportWebVitals from './reportWebVitals';
  
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
            
            `}
          showLineNumbers={true}
          theme={irBlack}
          wrapLines={true}
          codeBlock
        />
      </div>
      <br />
      <p>
        we will delete a few things from here as well as we won’t need some of
        the functionality for this app. Remove everything so that your index.js
        looks like the one I have below -->
      </p>
      <div className={classes.demo}>
        <CopyBlock
          language={"jsx"}
          text={`
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
            `}
          showLineNumbers={true}
          theme={irBlack}
          wrapLines={true}
          codeBlock
        />
      </div>
      <br />
      <h1>Our Application</h1>
      <p>
        Now let’s start creating some simple components that have some states.
        We will first start with the app.js file open the file up and enter in
        the below code.
      </p>
      <div className={classes.demo}>
        <CopyBlock
          language={"jsx"}
          text={`
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("Blog 2 React Tutorial");

  return (
    <div>
      <h2>{title}</h2>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
}

export default App;
          
            `}
          showLineNumbers={true}
          theme={irBlack}
          wrapLines={true}
          codeBlock
        />
      </div>
      <br />
      <p>
        Let’s walk through what this code is doing. On the first line, we are
        declaring the useState hook, which we are importing that in from react
        library. Line 3 we are declaring the component that we are in, which is
        the App component. Below that we are declare a variable that is using
        the useState hook. If your not sure what useState is, have a look at my
        first blog. We are setting the default value for title as “Blog 2 React
        Tutorial”, and then after that in the return statement we are returning
        the JSX template for the App component, which consists of curly braces
        around the title variable. The curly braces represent special syntax in
        JSX, telling it to interpret the code inside the curly brace as an
        JavaScript expression. In our case it will re-evaluate title to be the
        default value of “Blog 2 React Tutorial”. The input tag has an onChange
        function linked to it, stating that when the input changes set the title
        variable using setTitle to the events target value. You will see this
        take place once we start the application. <br />
        <br />
        Now within VSCode we can open a terminal by going to the terminal tab at
        the top and select “new terminal” from the drop down.
      </p>
      <img style={{ width: "700px" }} src={VSTerminal} alt="vs_terminal" />
      <br />
      <br />
      <p>
        Once you see the terminal appear on your screen. Go to the folder that
        you started your react application in and type{" "}
        <strong>
          <i>“npm start”</i>
        </strong>
        . After a few seconds your application should be running and a browser
        should popup displaying the application.
        <br /> <br /> Play around with what we just created and see what happens
        when you start typing in the input field. <br />
        <br />
        As you can see the Header starts to change as you type. Pretty cool
        right!
      </p>
      <h1>Creating a List of Inputs</h1>
      <p>
        At this point we are able to type into the input field and we are
        getting the result of our input in the h2 header tag. Now lets create a
        list that will populate each time you click the submit button. See the
        code below;
      </p>
      <div className={classes.demo}>
        <CopyBlock
          language={"jsx"}
          text={`
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("Blog 2 React Tutorial");
  const [list, setList] = useState([]);

  function addToList() {
    const item = title;
    setList((list) => [...list, item]);
  }

  return (
    <div>
      <h2>{title}</h2>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={addToList}>submit</button>
      <div>
        <h2>List of Inputs</h2>
        {list.length > 0 &&
          list.map((item, index) => (
            <ul>
              <li key={index}>{item}</li>
            </ul>
          ))}
      </div>
    </div>
  );
}

export default App;
          
            `}
          showLineNumbers={true}
          theme={irBlack}
          wrapLines={true}
          codeBlock
        />
      </div>
      <br />
      <p>
        Ok so lets take a look at the code and see whats happening. We added -->
      </p>
      <div className={classes.demo}>
        <CopyBlock
          language={"jsx"}
          text={`const [list, setList] = useState([]);`}
          showLineNumbers={true}
          theme={irBlack}
          wrapLines={true}
          codeBlock
        />
      </div>
      <br />
      <p>
        This creates a variable called list and is set as an array also using
        the useState hook. <br />
        <br /> We created a function called addToList, this function will help
        us store the inputs we will be entering in the input field. Then in the
        return statement we created a button to submit our input and a header
        along with a list of items.
      </p>
      <div className={classes.demo}>
        <CopyBlock
          language={"jsx"}
          text={`
<button onClick={addToList}>submit</button>
<div>
  <h2>List of Inputs</h2>
  {list.length > 0 &&
    list.map((item, index) => (
      <ul>
        <li key={index}>{item}</li>
      </ul>
    ))}
</div>
    `}
          showLineNumbers={true}
          theme={irBlack}
          wrapLines={true}
          codeBlock
        />
      </div>
      <br />
      <p>
        If the above code looks a little unfamiliar, lets see if we can make
        sense of it. In between the curly braces, we are calling the list
        variable and adding a period along with length, because the list is an
        array we can call the length method on it to see if there is anything in
        the array, by comparing the length of the array to zero. If it is
        greater than zero then there is something in the array, if this is the
        case then we can go down to the next line, which will use the map method
        to run through the array. For those of you unfamiliar with the map
        function, it is a function that goes through every individual item in an
        array and can perform something on it. In our instance, we are just
        going to take the item and display it in our list. From there React will
        give you a warning about keys if you don't include a key in your list.
        Keys help React identify which items have changed. So for us, we are
        using the index of the array to hold the key for the individual list
        items. As stated before anything in curly braces will be interrupted by
        JSX, so the curly braces with item will return the item back to us.{" "}
        <br />
        <br />
        Run the application and type in a few items and press submit. You should
        get a similar results to what I have.
      </p>
      <br />
      <img style={{ width: "300px" }} src={sample} alt="sample" />
      <br />
      <h1>Conclusion</h1>
      <p>
        Awesome you made it to the end! Congratulations on making your first
        React App! So this tutorial should have given you a better understanding
        of stripping down and cleaning up some of the added features that are
        given to you when you run the command{" "}
        <strong>
          <i>npx create-react-app my-react-app</i>
        </strong>
        . We also created an application that uses hooks and in particular, the
        one we used was the useState hook. This application was a very basic
        app, but I hope that you have learned a little more about the React
        world and now with a little more knowledge you can go out and learn
        more!
      </p>
      <br />
      <h1>Challenge</h1>
      <p>
        Alright so if you are up for the challenge, I challenge you to add more
        functions to the basic app that we just created. Here are some of the
        things that you can continue to add and build on to this app;
      </p>
      <ol>
        <li>
          Create a title for this application. Currently, the h2 tag changes
          every time we type something in the input. Let's give this app a
          proper title.
        </li>
        <li>
          Add another button that allows the user to delete that particular
          item.
        </li>
        <li>
          Add a button to each item, that will allow the user to edit the item
          content.
        </li>
      </ol>
      <h6>
        If you are feeling very adventurous then convert this simple app into a
        grocery app, where you can add items to the grocery list, edit, delete
        and check off items that you have already gotten.
      </h6>
      <br />
      <br />
      <Row>
        <Col style={{ textAlign: "left" }}>
          <Link to="/">
            <h5>
              <span>&lt;</span> Previous
            </h5>
            <h6 style={{ color: "red" }}>My First React Blog</h6>
          </Link>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}

export default Blog2Body;
