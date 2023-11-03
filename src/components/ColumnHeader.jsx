import React from 'react'

const ColumnHeader = ({ Icon1, Icon2, Icon3, title, number }) => {
    return (
        <div className='column-header-section'>
            <div className='three-together'>
                <Icon1 />
                <p>{title}</p>
                <span>{number}</span>
            </div>
            <div className='two-together'>
                <Icon2 />
                <Icon3 />
            </div>
        </div>
    )
}

export default ColumnHeader