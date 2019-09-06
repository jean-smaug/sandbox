import React from 'react'

class Button extends React.Button {
    render() {
        return (
            <button>{this.props.children}</button>
        )
    }
}

export default { Button }
