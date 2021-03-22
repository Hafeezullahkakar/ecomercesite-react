import React from 'react'
import './preview.scss'
import CollectionItem from '../collection-item/CollectionItem'

const Preview = ({title, items})=>{
    return(
    <div className = 'collection-preview'>
    <p className = 'title'>{title.toUpperCase()}</p>
    <div className = "preview">
        {items.filter((item, idx)=>idx <4).map(({id, ...otherItemProps})=>(
            <CollectionItem key = {id} {...otherItemProps}/>
        ))}
        </div>
    </div>

    )
}

export default Preview;