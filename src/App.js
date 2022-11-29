import { useState } from 'react';
import './App.css';
import Button from './component/Button';
import Header from "./component/Header";
import Info from "./component/Info";

function App() {
  //var readMoreClicked =false;
  //const [readMoreClicked, setReadMoreClicked] = useState(false);
  const [text, setText] = useState("Default text");

  return (
    <div className="App">
        <Header/>   
        <Info 
        heading={"Heading 0"}
        text={"vtyvbtyvtvbtvvvvvvvvvvvvvvvvvvvvv bbbvu bvtyvtv vcvyugbyunyyyubuuuub"}
        dontShowButton={false}
        buttonHeading={" Visit Site "} 
        />
        
        <Button
         text={"Read More"}
         onClick={() =>{
          setText("Read More was clicked!");
         }}
         />
         <Button
        text={"Read Less"}
        onClick={() =>{
         setText("Read Less was clicked!");
        }}
         />
         <h1 style={{margin: "1rem"}}>{text}</h1>
    </div>
  );
}

export default App;
