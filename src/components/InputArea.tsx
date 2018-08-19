import * as React from "react";
import "./InputArea.css";

class InputArea extends React.Component {

    render() {
      return (
          <div>
            <div className="InputArea">
                <h4>Mat</h4>
                <select id="feedlist" name="feedlist" className="feedlist" >
                    <option>Kattmat</option>
                    <option>Hundmat</option>
                </select>
                <h4>Vikt (gram)</h4> 
                <input id="feedamount" className="feedinput" />
            </div>    
          </div>
      );
      
    }
}

export default InputArea;