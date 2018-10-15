import * as React from "react";
import { Col, Grid, Row } from 'react-bootstrap';

class InputArea extends React.Component {

    render() {
      return (
          <div>
            <div >
            <Grid fluid>
                <Row>
                <Col sm={3}>
                    Meep
                </Col>
                <Col sm={9}>
                    {this.props.children}
                </Col>
                </Row>
            </Grid>
            </div>    
          </div>
      );
      
    }
}

export default InputArea;