import React from "react";
import classes from "./Body.module.css";
import bakeryImage from "../images/Picture1.png";
import authorImage from "../images/Picture2.png";
import { Code, CopyBlock, irBlack } from "react-code-blocks";
import { Col, Row } from "react-bootstrap";

function Body() {
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
        <h1>Background Information</h1>
        <p>
          Have you ever clicked into a blog or watched a YouTube video and it
          says something like "Learn React in 1 day" or "React from Zero to
          Hero"? I have and often they rarely tell you what skill level that
          person is already at. So often I find myself googling a lot about what
          the author is talking about or the terminologies that are being used.
          So let me give you a little bit of background before we get started on
          my own journey of learning React. I am a student at SAIT a polytechnic
          institute as a 2nd-year student about to graduate with a software
          development diploma. I consider myself a proficient programmer with
          Java, and a beginner programmer with JavaScript, HTML, and CSS. I have
          tried to teach myself Angular which is a JavaScript framework but
          unfortunately was unable to truly grasp all the concepts from
          tutorials, as this was prior to me attending SAIT. This blog will
          break down some of the core concepts of React and how I used them in
          my own bakery app.
        </p>
      </div>
      <div>
        <h1>What is React?</h1>
        <p>
          React is a front-end library that allows you to quickly build
          interactive UI’s, using components that manage their own state and
          renders when changes happen. ReactJS is maintained by Meta (formerly
          Facebook) and is an open-source project.{" "}
        </p>
        <h1>Prerequisites to learning React</h1>
        <p>
          If you’re coming in green from no experience at all with JavaScript,
          HTML, and CSS, then React will be as complicated as any other
          JavaScript framework that you are trying to learn. My advice to anyone
          that is trying to learn React or any other framework is to start with
          the basics first. Have a good understanding of HTML, CSS, and
          JavaScript, without these fundamentals, learning React will be
          painful. Here is a list of fundamentals I mentioned above broken down
          a little bit more. If you find yourself googling about the topics then
          you should get a better understanding of that topic before moving on
          to React.
        </p>
        <div className={classes.indent}>
          <h4>HTML: What all the different HTML tags.</h4>
          <ul>
            <li>
              <code>&lt;div&gt;</code>
            </li>
            <li>
              <code>background-image</code>
            </li>
            <li>
              <code>&lt;li&gt;</code>
            </li>
            <li>
              <code>&lt;h#&gt;</code>
            </li>
            <li>
              <code>&lt;form&gt;</code>
            </li>
            <li>
              <code>&lt;labels&gt;</code>
            </li>
            <li>
              <code>&lt;etc...&gt;</code>
            </li>
          </ul>
          <h4>CSS: How to manipulate and style the different HTML tags.</h4>
          <ul>
            <li>
              <code>background</code>
            </li>
            <li>
              <code>background-image</code>
            </li>
            <li>
              <code>border</code>
            </li>
            <li>
              <code>color</code>
            </li>
            <li>
              <code>font</code>
            </li>
            <li>
              <code>width</code>
            </li>
            <li>
              <code>height</code>
            </li>
            <li>
              <code>etc...</code>
            </li>
          </ul>
          <h4>Vanilla JavaScript: Learn general JavaScript programming.</h4>
          <ul>
            <li>
              <code>variables</code>
            </li>
            <li>
              <code>functions</code>
            </li>
            <li>
              <code>datatypes</code>
            </li>
            <li>
              <code>conditional statements</code>
            </li>
            <li>
              <code>etc...</code>
            </li>
          </ul>
          <h4>Modern JavaScript: Learn ES6 programming</h4>
          <ul>
            <li>
              <code>New variable declarations (let and const keywords)</code>
            </li>
            <li>
              <code>Arrow functions</code>
            </li>
            <li>
              <code>Array functions (Map and Filter)</code>
            </li>
            <li>
              <code>Asynchronous JavaScript (async / await)</code>
            </li>
            <li>
              <code>etc...</code>
            </li>
          </ul>
        </div>
        <br />
        <h1>React Core Concepts</h1>
        <br />
        <div className={classes.indent}>
          <h4>1. Component driven development</h4>
          <p>
            Now that we have gotten that out of the way let’s try to understand
            some of the core concepts of React. React is all about components,
            every web application can be broken down into smaller pieces. Let’s
            take my bakery app for example.
          </p>
          <div>
            <img src={bakeryImage} className={classes.image} />
          </div>
          <br />
          <p>
            From the above screenshot, you can see that I have broken up one
            page into 4 different components and you have probably noticed that
            there is a component within a component as well.{" "}
          </p>
          <blockquote className={classes.blockQuotes}>
            <h6>"So why create a web app using components you might ask?"</h6>
          </blockquote>
          <p>
            Traditionally we would just use HTML, CSS, and JavaScript to create
            a page, and most likely all your code would be in a file to every
            corresponding language. Imagine now having to find a certain part of
            that code through thousands of lines of code, and then going to find
            the corresponding CSS or HTML, it would probably take you some time.
            That’s where breaking things into components would help. For
            example, if the email input field wasn’t validating my email, then I
            would know that I would have to look at my order form component. The
            fact that I can build everything as a component also gives me the
            ability to re-use this component. Taking my bakery app again, let’s
            say that I want to use the side menu in the red rectangle box again
            on another page that I am creating. Well this would be easy as I can
            just import that component into the page that I am creating without
            having to re-write the code again, and if there is a change on that
            component it would get populated to all the pages using that
            component.{" "}
          </p>
          <h4>2. React JSX</h4>
          <p>
            When I first saw JSX I was super confused about how the syntax
            looked. I was coming from a place where my HTML code belonged in an
            HTML file, and now that I was seeing HTML code in my JavaScript file
            it took some time for me to understand. Essentially with JSX, we are
            combining both JavaScript and HTML in one file. Below is a sample
            code of what JSX looks like.{" "}
          </p>
          <div className={classes.demo}>
            <CopyBlock
              language={"jsx"}
              text={`function App() {
    return (
        <div className={classes.center}>
        <h1 className={classes.textCenter}>My Calculator App</h1>
        <Calculator />
        </div>
    );
}`}
              showLineNumbers={true}
              theme={irBlack}
              wrapLines={true}
              codeBlock
            />
          </div>
          <br />
          <p>
            From the above snippet, you can see that it looks like JavaScript
            but there is some HTML inside. Being able to use HTML inside my
            JavaScript gives me the ability to implement any functions I need
            onto the HTML element, this makes it easier and faster to code than
            vanilla JavaScript. The benefits of using JSX is more optimization
            while transpiling the code, combines JavaScript and HTML as one
            file, and easier to create components.
          </p>
          <br />
          <h4>3. React Props</h4>
          <p>
            In React there are components that we talked about above, these
            components will need to interact with each other sometimes. We will
            often need to send some information from one component to another,
            and the way that we would do that with React is through props, which
            stands for properties. Let’s use the bakery app as an example again.
            For the place order button to be active in the Order Information
            component, we need to know if the order form component has all the
            client’s information filled out. Eg. Name, address, etc… If it is
            all filled out along with all the order information filled out, the
            place order button will become active. So how would I do that? By
            using props we can pass property/value to the order information
            component and tell the component that everything is good from the
            order form component, so now the order information component can
            activate the button.
          </p>
          <div>
            <img src={authorImage} className={classes.image2} />
          </div>
          <p>
            Below is a sample code from another project. Here we are calling the
            Author Component and passing the props that we want the Author
            Component to have. From the image above the Author component has 3
            sections, an image, the Authors Name, and a description. We are
            passing in the data from another component to the Author component
            as shown in the below code.
          </p>
          <div className={classes.demo}>
            <CopyBlock
              language={"jsx"}
              text={`<Author
    key={authors.id}
    image={authors.image}
    author={authors.author}
    description={authors.description}
    handleClick={(author) => setAuthor(author)}
/>`}
              showLineNumbers={true}
              theme={irBlack}
              wrapLines={true}
              codeBlock
            />
          </div>
          <br />
          <p>
            Now inside the Author component I can use the props that I have
            passed in. The below code snippet shows how I used the props to pass
            in that data require to generate that element.
          </p>
          <div className={classes.demo}>
            <CopyBlock
              language={"jsx"}
              text={`function Author(props) {
    return (
        <div onClick={() => props.handleClick(props.author)}>
        <div className={classes.avatarDiv}>
            <img
            className={classes.avatar}
            src={require("../../images/" + props.image)}
            alt=""
            />
        </div>
        <h1 className={classes.h1}>{props.author}</h1>
        <p className={classes.first}>{props.description}</p>
        </div>
    );
}`}
              showLineNumbers={true}
              theme={irBlack}
              wrapLines={true}
              codeBlock
            />
          </div>
          <br />
          <p>
            Again think of props as a way to pass data around from component to
            component. Although I should mention that it is easier to pass props
            down from a parent component to a child component. I won’t dive deep
            into how to pass data from each other, but the general idea is to
            know that props are the way that React passes data from one
            component to another.{" "}
          </p>
          <h4>4. React Hooks</h4>
          <br />
          <p>
            React Hooks was introduced in February 2019, it was released on
            React version 16.8.0. As stated in the React Docs, React Hooks are
            functions that allow you to use React state and lifecycle features.
          </p>
          <blockquote className={classes.blockQuotes}>
            <h6>But, what are “States” and “Lifecycles”?</h6>
          </blockquote>
          <p>
            In short, State in React is the current information about an element
            or a variable, and you have told React specifically that you want to
            keep track of it. Think of it as a fan that has settings to turn the
            fan faster or slower, and I want to know whenever someone turns the
            speed of the fan to let me know. So, if someone comes and turns the
            fan faster the state of the fan has changed, and that person that
            changed it lets me know that they have switched the fan faster.
            React keeps track of an element’s state and whenever the element
            changes state just like the fan it goes and notifies components that
            are tracking that element and lets them know that the state has
            changed, and in response to that change the components will react to
            whatever the change was. Like in the fan example by someone turning
            the fan faster, and I felt cold then I would turn it back down or I
            would simply walk away.
          </p>
          <p>
            Lifecycle: I like to think of the React lifecycle as like the human
            lifecycle. Where humans are born, we do a bunch of things in life
            and then we eventually die. In a similar fashion React components
            have 3 main phases. The mounting phase, where the component is
            initialized and renders to the screen. The updates phase, where the
            component is updated anytime there is a change in state. And the
            unmounting stage, where the component is removed from the DOM.{" "}
          </p>
          <p>
            I’ll go over the 3 React Hooks that I used in my bakery app in
            detail, and then briefly touch on the 7 other hooks as I haven’t
            used those hooks. Remember if you want to use any of these hooks you
            will need to import them from the React Library.
          </p>
          <blockquote className={classes.blockQuotes}>
            <h6>
              **All hooks must be imported from the React library before you can
              use them.
            </h6>
          </blockquote>
          <h4>useState</h4>
          <div className={classes.demo}>
            <CopyBlock
              language={"jsx"}
              text={`import React, { useState } from "react";`}
              showLineNumbers={true}
              theme={irBlack}
              wrapLines={true}
              codeBlock
            />
          </div>
          <br />
          <p>
            useState is the React hook that keeps track of your variables state.
            Like I mentioned above, If that variable changes then it will notify
            any component that uses it and then the component will render the
            changes to the DOM. Here is a sample code of what useState looks
            like.
          </p>
          <div className={classes.demo}>
            <CopyBlock
              language={"jsx"}
              text={`const [author, setAuthor] = useState("Arthur Erickson");`}
              showLineNumbers={true}
              theme={irBlack}
              wrapLines={true}
              codeBlock
            />
          </div>
          <br />
          <p>
            The above snippet shows the syntax for creating the useState hook.
            Author represents the variable and setAuthor is the function used to
            set the variable. On the right of the equal sign I am telling the
            hook that the initial state of the variable will be a string which
            is equal to “Arthur Erickson”. The initial state can be an empty
            string and can be any data type that you want. In order to set the
            variable, you would use the code below;
          </p>
          <div className={classes.demo}>
            <CopyBlock
              language={"jsx"}
              text={`setAuthor(“John Doe”);`}
              showLineNumbers={true}
              theme={irBlack}
              wrapLines={true}
              codeBlock
            />
          </div>
          <br />
          <h4>useEffect</h4>
          <div className={classes.demo}>
            <CopyBlock
              language={"jsx"}
              text={`import React, { useEffect } from "react";`}
              showLineNumbers={true}
              theme={irBlack}
              wrapLines={true}
              codeBlock
            />
          </div>
          <br />
          <p>
            useEffect is a hook that you can use if you need React to do
            something after the page has been rendered. For example, I want
            React to calculate the total cost of my client’s purchase in my
            bakery app after all the fields have been inputted in. I can use
            useEffect to help me do this, see the code below.
          </p>
          <div className={classes.demo}>
            <CopyBlock
              language={"jsx"}
              text={`useEffect(() => {
    setCakeTotalValue(
        cakeTotalOptionValue + cheeseValue + almondValue + fruitValue
    );
    }, [
    cakeTotalOptionValue,
    cheeseValue,
    almondValue,
    fruitValue,
    setCakeTotalValue,
    ]);`}
              showLineNumbers={true}
              theme={irBlack}
              wrapLines={true}
              codeBlock
            />
          </div>
          <br />
          <p>
            Here I am using useState variable “cakeTotalValue” to keep track of
            my total by adding all the variables that are placed inside the
            paratheses. Each one of the variables also uses the useState hook,
            meaning that if that variable changes it will also cause the
            useEffect to change as well. Therefore it’ll keep updating the cake
            total every time those variables change. The variables in between
            the square brackets [ ], tells React that any time those variables
            change, please trigger the useEffect hook, and if there isn’t
            anything in between the square brackets, then useEffect hook will
            only run the one time when the component is rendered.{" "}
          </p>
          <h4>useContext</h4>
          <div className={classes.demo}>
            <CopyBlock
              language={"jsx"}
              text={`import React, { useContext } from "react";`}
              showLineNumbers={true}
              theme={irBlack}
              wrapLines={true}
              codeBlock
            />
          </div>
          <br />
          <p>
            useContext is a hook that helped save me from what I could only
            imagine being a nightmare of passing data around from component to
            component. I discussed the idea of props above in the core concepts
            of React, and briefly touch on the idea that it is much simpler to
            transfer props from parent to child components, but not the other
            way around. So passing the props down to the child is as easy as
            putting the props in between the component tag, as seen below.
          </p>
          <div className={classes.demo}>
            <CopyBlock
              language={"jsx"}
              text={`<Author
    key={authors.id}
    image={authors.image}
    author={authors.author}
    description={authors.description}
    handleClick={(author) => setAuthor(author)}
/>`}
              showLineNumbers={true}
              theme={irBlack}
              wrapLines={true}
              codeBlock
            />
          </div>
          <br />
          <p>
            But how do you get the props back up to the parent component? One
            way of doing this is by what they call lifting the state. This is
            where I would pass a function down to the child component and then
            use that function to call a parent function that sets a variable
            that was passed up from the child component. If you take a look at
            the above snippet that is exactly what I have done by passing the
            below code.
          </p>
          <div className={classes.demo}>
            <CopyBlock
              language={"jsx"}
              text={`handleClick={(author) => setAuthor(author)}`}
              showLineNumbers={true}
              theme={irBlack}
              wrapLines={true}
              codeBlock
            />
          </div>
          <br />
          <p>
            HandleClick is a function that takes in an author parameter and then
            sets the setAuthor variable with that parameter. The parameter is
            being passed by the child component which in turn sets the setAuthor
            variable in the parent component. Now if that sounded like it was a
            little more complicated than just passing the props down to the
            child, imagine having a bunch of nested child components and then
            having to pass data back and forth on multiple nested levels. Sound
            like fun??? Well good thing is that was actually the old way of
            doing things and now they have a hook called useContext that will
            help with this problem.
          </p>
          <p>
            useContext helps us define global variables, variables that can be
            accessed and modified from any level, whether you’re the parent or
            the child its easy to access these variables. The first thing that
            we must do is create a context file.
          </p>
          <div className={classes.demo}>
            <CopyBlock
              language={"jsx"}
              text={`import React, { useState, createContext } from "react";

export const CakeContext = createContext();

export const CakeProvider = (props) => {
const [length, setLength] = useState(0);
const [width, setWidth] = useState(0);
const [radius, setRadius] = useState(0);

return (
    <CakeContext.Provider
    value={{
        length: [length, setLength],
        width: [width, setWidth],
        radius: [radius, setRadius],
    }}
    >
    {props.children}
    </CakeContext.Provider>
    );
  };`}
              showLineNumbers={true}
              theme={irBlack}
              wrapLines={true}
              codeBlock
            />
          </div>
          <br />
          <p>
            In my bakery app example, I have set the length, width, and radius
            to a global variable that uses the useState hook. As you know once
            that variable changes the useState will keep track of that
            variable’s state. Now once that has been declared there is a couple
            of things we have to do. First, we need to wrap whatever component
            we want to use the context around with the context provider like
            below. We want the order form component to use the context we
            created, so we wrap it around that component.{" "}
          </p>
          <div className={classes.demo}>
            <CopyBlock
              language={"jsx"}
              text={`import { CakeProvider } from "../components/CakeContext";

function Home() {
    return (
        <CakeProvider>
            <OrderForm />
        </CakeProvider>
    );
}

export default Home;`}
              showLineNumbers={true}
              theme={irBlack}
              wrapLines={true}
              codeBlock
            />
          </div>
          <br />
          <p>
            Secondly, we import the context into the component, in my case, it
            was the orderForm component. We import the useContext library and we
            pass it the context that I created a few steps earlier, which was
            called the CakeContext. Then we set the global variables to local
            variables within that component, and from there we can use those
            variables to access the global ones.{" "}
          </p>
          <div className={classes.demo}>
            <CopyBlock
              language={"jsx"}
              text={`import React, { useContext } from "react";
import { CakeContext } from "./CakeContext";

function OrderForm() {
    const { length, width, radius } = useContext(CakeContext);

    const [lengthValue, setLengthValue] = length;
    const [widthValue, setWidthValue] = width;
    const [radiusValue, setRadiusValue] = radius;

}`}
              showLineNumbers={true}
              theme={irBlack}
              wrapLines={true}
              codeBlock
            />
          </div>
          <br />
          <p>
            Up and till this point you might feel like both ways to access the
            data is somewhat the same, but I assure you that if you have
            multiple components trying to access each other’s properties the
            useContext hook is going to save your life like it did mine.
          </p>
          <blockquote className={classes.blockQuotes}>
            <h6>
              ** Once again I’ll briefly touch on these hooks below and give you
              an idea of what these hooks are used for, but I have not
              personally used them so I don’t have any examples to show you. **
            </h6>
          </blockquote>
          <p>
            <strong>useRef</strong> – The useRef hook allows you to create a
            reference to an element in the DOM and then allows you to change and
            manipulate its value.{" "}
          </p>
          <p>
            <strong>useReducer</strong> – is similar to the useState hook, but
            more complex, in the fact that it will keep track of the state of
            that variable, but can also apply functions when the state changes.
          </p>
          <p>
            <strong>useMemo</strong> – allows React to memorize a complex
            function, and as you pass in your inputs to useMemo it will only
            recompute the function if the inputs have changed. The advantage of
            this hook is so that if there is a function that is complex and
            takes a long time, it won’t continuously recompute and render the
            component, which can cause delays resulting in slower component load
            up.
          </p>
          <p>
            <strong>useCallback</strong> – useCallback is similar to useMemo
            where React memorizes the callback function and only changes and
            re-renders when those values change. Because useState will change
            the variable anything that is interacting with that variable will
            also be triggered, but sometimes if the useState variable changes it
            may not impact the outcome of a function. So with useCallback it
            will only change if the impact from the change changes the outcome
            of the function.
          </p>
          <p>
            <strong>useLayoutEffect</strong> – similar to useEffect, the
            functions within useLayoutEffect will run after React has committed
            all the updates to the DOM.
          </p>
          <p>
            <strong>useDebugValue</strong> – the useDebugValue is a hook for
            developers that create their own hooks and gives you the ability to
            log your own debug values. Giving you some more context on what is
            going on within your hook.
          </p>
          <a href="https://reactjs.org/docs/hooks-intro.html">
            Check out the offical docs here{" "}
          </a>
          <br />
          <br />
        </div>
        <h1>Where do we go from here?</h1>
        <p>
          If the above concepts make sense to you and you feel comfortable
          moving on to the next steps, I would go find some beginner tutorials
          and start building with React. Try to find more recent tutorials and
          not old ones as older material may be outdated and certain features of
          React might be depreciated. Remember hooks just came out in 2019 so
          the concept of hooks is still relatively new.
        </p>
        <br />
        <h1>Wrap Up</h1>
        <p>
          The above is only my own experience in learning React, it is the road
          of what I wished someone would have told me before starting to learn.
          If any of the concepts above still feel confusing to you my advice
          would be to dig a little deeper and get a better understanding before
          getting into React. In my experience, I wasted a lot of time googling
          and searching around, which lead to more confusion, but I hope that my
          time wasted can be your time gained.{" "}
        </p>
      </div>
      <br />
      <br />
      <Row>
        <Col md={{ span: 4, offset: 8 }} style={{ textAlign: "right" }}>
          <a href="">
            <h5>
              NEXT <span>&#62;</span>
            </h5>
            <h6 style={{ color: "red" }}>Tutorial: Create A React App</h6>
          </a>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}

export default Body;
