import * as React from "react";
import { Button, ButtonToolbar, FormGroup, FormControl } from "react-bootstrap";

interface IMealData{
  weight: number;
  calorie: number;
  numberof: number;
}

class App extends React.Component<{}, any> {
  constructor (props: IMealData){
    super(props);
    const data = {weight: 1, calories: 1, meals: 1, result: 0};
    this.state = {data};
    this.onFormChange = this.onFormChange.bind(this);
    this.onCalculate = this.onCalculate.bind(this);
  }

  onCalculate (event: any) {
    const ress = (((this.state.weight * 30)+70)/this.state.calories)/this.state.meals;
    this.setState({result : ress});
  }

  onFormChange(event: any){
    this.setState({[event.target.name]: event.target.value });
  }

  public render() {
    return (
      <div className="App">
        <header>
          <h1 className="">Mat beräknaren</h1>
        </header>
          <FormGroup>
            <h4>Vikt (kg)</h4> 
            <FormControl id="weight" name="weight" type="text" onChange={this.onFormChange} value={this.state.weight} />
            <h4>Antal Kalorier per Gram</h4> 
            <FormControl id="calories" name="calories" type="text" onChange={this.onFormChange}  value={this.state.calories} />
            <h4>Antal mål om dagen</h4> 
            <FormControl id="meals" name="meals" type="text" onChange={this.onFormChange}  value={this.state.meals} />
          </FormGroup>
          <ButtonToolbar>
            <Button bsStyle="primary" onClick={this.onCalculate}>Stuff</Button> 
          </ButtonToolbar>    
          <FormGroup>
            <FormControl id="feedresult" componentClass="textarea" value={this.state.result} />
          </FormGroup>

      </div>
    );
  }
}

export default App;
