import * as React from "react";
import "./App.css";
import InputArea from "./InputArea";


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mat beräknaren</h1>
        </header>
        <InputArea />
      </div>
    );
  }
}

export default App;
