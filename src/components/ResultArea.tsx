import * as React from "react";
import "./ResultArea.css";

class ResultArea extends React.Component {

    render() {
        return (
            <div className="ResultArea">        
                <textarea  id="feedresult" className="feedresult" rows={5} />
            </div>
      );
      
    }
}

export default ResultArea;
