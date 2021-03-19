import React from 'react'
import '../menuitems/menuitems.scss'

const MenuItems= ({title , imageUrl, size}) => {
    return(

   <div  className= 'menuitems'>
    <div  style ={{backgroundImage: `url(${imageUrl})`}} className = 'backgroundImage' />
    <div className = 'content'>
        <h1 className = 'title'> {title.toUpperCase()} </h1>
        <span className = 'subtitle'>SHOP NOW</span>
    </div>
</div>
    )

}
export default MenuItems;