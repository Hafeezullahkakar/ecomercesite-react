import React from 'react'
import ShopData from './ShopData'
import Preview from '../preview/Preview'
class ShopPage extends React.Component{
    constructor(){
        super();
        this.state = {
            collections: ShopData  
         }
    }
    render(){
        const {collections } = this.state;
        return(
            <div className = 'shoppage'>
              {collections.map(({id, ...otherCollectionProps})=>(
                  <Preview key = {id} {...otherCollectionProps}/>
              ))}
            </div>
        )
    }
}
export default ShopPage;