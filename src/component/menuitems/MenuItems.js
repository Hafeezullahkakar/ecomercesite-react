import React from 'react'
import '../menuitems/menuitems.scss'
import {withRouter} from 'react-router-dom'

const MenuItems= ({title , imageUrl, size , history , linkUrl, match}) => {
    return(
   <div  className= 'menuitems' 
                onClick= {()=> history.push(`${match.url}${linkUrl}`)}>

    <div  style ={{backgroundImage:
         `url(${imageUrl})`}} className = 'backgroundImage' />
    
    <div className = 'content'>
        <h1 className = 'title'> {title.toUpperCase()} </h1>
        <span className = 'subtitle'>SHOP NOW</span>
    </div>
</div>
    )

}
export default withRouter(MenuItems);