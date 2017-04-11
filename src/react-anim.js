'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
import './animate.css'
import classnames from './classNames'



class ReactAnim extends React.Component {
    /**
     * @doc overview
     * @name constructor
     *
     * @returns {Object} -state object
     *
     * @description
     * 返回state数据对象
     *
     */
    constructor(props) {
        super(props);
        this.state = {}
    }

    /**
     * @doc overview
     * @name defaultProps
     *
     * @returns {Object} -props object
     *  - `className` – `{string}` - calssName设置
     *  - `id` – `{string}` - id属性
     *  - `style` – `{string}` - 自定义样式
     *  - `type` – `{string}` - 动画类型，默认fadeIn
     * @description
     * 设置default props
     *
     */
    static defaultProps = {
        className: "",
        id:"",
        style:{},
        type:'fadeIn'
    };

    render() {
        let p = this.props;
        return (
            <div
                style={p.style}
                id={p.id}
                className={classnames('animated', p.type, this.props.className)} >
                {this.props.children}
            </div>
        )
    }

}

export default ReactAnim;
