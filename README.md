react-anim
==========

react页面进场动画组件。动画基于animate.css。thx

## Run Demo


```
1. npm install
2. npm start
```


## Usage

```
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
                <Anim
	                style={{background:'red',height:'900px'}}
	                className='hahaha' id='111'>
                    <div>demo</div>
                </Anim>
            </div>
        );
    }
}
ReactDOM.render(<APP/>, document.getElementById('AppContainer'));
```

## API

* style: 添加到anim组件根节点的style
* id:添加到anim组件根节点的id属性
* className:添加到anim组件根节点的class属性
* type:进场动画类型，默认:fadeIn
