import React from 'react'
import ReactDOM from 'react-dom'
import Anim from '../src/react-anim'

class APP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <div>
                <Anim style={{background:'red',height:'900px'}} className='hahaha' id='111'>
                    fasdf
                </Anim>
            </div>
        );
    }
}
ReactDOM.render(<APP/>, document.getElementById('AppContainer'));
