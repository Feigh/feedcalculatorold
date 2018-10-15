import * as React from "react";

class ResultArea extends React.Component <{  weight: number; calorier: number; meals: number }, {}> {

    constructor(props: any) {
        super(props);
        this.state = this.props.weight;
    
      }

    render() {
        return (
            <div>
                <button id="feedcal" className="btn" >Beräkna</button>        
                <div className="ResultArea">        
                    <textarea  id="feedresult" className="form-control" rows={5} value={this.props.weight} />
                </div>
            </div>
        );
    }
}

export default ResultArea;
