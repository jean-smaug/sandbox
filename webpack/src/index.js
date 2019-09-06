import React from 'react'

import style from './index.scss'

console.log('csdvdsbfdsfdsdsd', style)

class Button extends React.Component {
    render() {
        return (
            <button className={style.custom}>{this.props.children}</button>
        )
    }
}

export default Button

// export default {boom: "badawhoua"}