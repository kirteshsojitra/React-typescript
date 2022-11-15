import React from "react";
import Greet from "./Components/Greet";
import Person from "./Components/Person";
import PersonList from "./Components/PersonList";
import Advanced from "./Components/Advanced";
import Heading from "./Components/Heading";
import ElementHeading from "./Components/ElementHeading";
import "./App.css";
import Input from "./Components/Input";
import Button from "./Components/Button";
import Container from "./Components/Container";
import LoggedIn from "./Components/State/LoggedIn";
import User from "./Components/State/User";
import User1 from "./Components/State/User1";
import Count from "./Components/State/Count";
import Count1 from "./Components/State/Count1";
import {ThemeContextProvider} from "./Components/Context/ThemeContext";
import Box from "./Components/Context/Box";
import {UserContextProvider} from "./Components/Context/UserContext";
import {User2} from "./Components/Context/User2";
import DomRef from "./Components/ref/DomRef";
import MutableRef from "./Components/ref/MutableRef";
import Counter from "./Components/class/Counter";
import Private from "./Components/auth/Private";
import Profile from "./Components/auth/Profile";
import List from "./Components/Generics/List";
import RandomNumber from "./Components/restriction/RandomNumber";
import Toast from "./Components/TemplateLiterals/Toast";
import Button1 from "./Components/html/Button1";
import CustomComponent from "./Components/html/CustomComponent";
import Test from "./Components/Polymorphic/Test";
function App() {
  const myObj = {
    first: "kirtesh",
    last: "sojitra",
  };

  const myArr = [
    {first: "kirtesh", last: "sojitra"},
    {first: "samir", last: "navadiya"},
    {first: "priyank", last: "vasoya"},
  ];
  return (
    <div className="App">
      <Greet name="kirtesh" mobile={6353871709} isLoggedIn={false} />
      <Person names={myObj} />
      <PersonList nameList={myArr} />
      <Advanced status="sucess" />
      <Heading>Hello Heading!</Heading>
      <ElementHeading>
        <Heading>hello</Heading>
      </ElementHeading>
      <Button
        handleClick={(event, id) => console.log("Button Clicked!", event, id)}
      />
      <Input value=" " handleChange={(event) => console.log(event)} />
      <Container styles={{color: "red"}} />
      <LoggedIn />
      <User />
      <User1 />
      <Count />
      <Count1 />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User2 />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <Counter message="kirtesh" />
      <Private isLoggedIn={false} component={Profile} />
      <Private isLoggedIn={true} component={Profile} />
      {/* <List
        items={["samir", "kirtesh"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[{id: 1, first: "kirtesh", last: "sojitra"}]}
        onClick={({id, first, last}) => console.log(first)}
      />
      <RandomNumber value={10} isPositive />
      <Toast position="center" />
      <Button1 variant="primary" onClick={() => console.log("Clicked")}>
        Primary Button Text
      </Button1>
      <CustomComponent name="kirtesh" mobile={12355677778} isLoggedIn={true} />
      <Test as="h1" size="lg">
        Heading
      </Test>
      <Test as="p" size="md">
        Paragraph
      </Test>
      <Test as="label" htmlFor="someId" size="sm" color="secondary">
        Lable
      </Test>
    </div>
  );
}

export default App;
