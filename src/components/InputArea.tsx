import * as React from "react";
import "./InputArea.css";

class InputArea extends React.Component {

    render() {
      return (
        <div>
          <div>
            <div className="container">
                <select id="feedlist" name="feedlist" className="feedlist" >
                    <option>stuff</option>
                </select>
                <input id="feedamount" className="feedinput" />
            </div>
            
          </div>
        </div>
      );
      
    }
}

export default InputArea;