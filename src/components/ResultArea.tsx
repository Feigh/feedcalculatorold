import * as React from "react";
import "./ResultArea.css";

class ResultArea extends React.Component <{ amount: string; }, {}> {

    constructor(props: any) {
        super(props);
        this.state = this.props.amount;
    
      }

    render() {
        return (
            <div>
                <button id="feedcal" className="feedbutton" >Beräkna</button>        
                <div className="ResultArea">        
                    <textarea  id="feedresult" className="feedresult" rows={5} value={this.props.amount} />
                </div>
            </div>
        );
    }
}

export default ResultArea;
