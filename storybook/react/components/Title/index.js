import React from 'react'

import css from './index.scss'

const Title = ({ children }) => {
    return (
        <h1 className={css.Title}>
            {children}
        </h1>
    )
}

export default Title
