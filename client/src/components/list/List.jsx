import React from 'react'
import { listData } from '../../lib/dummyData.js'
import "./list.scss"
import Card from '../card/Card.jsx'


function List() {
    return (
        <div className='list'>
            {listData && listData.map(item => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    )
}

export default List