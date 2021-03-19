import React from 'react'

import MenuItems from '../menuitems/MenuItems'
import './directory.scss'


class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections: [
                {title: 'HATS',
                imageUrl: 'https://www.neweracap.com/medias/sys_master/MLB/MLB/he4/had/9684106444830/MLBLigature-Mets-1000x1000.jpg',
                id: 1
            },
            {title: 'Jackets',
                imageUrl: 'https://5.imimg.com/data5/DU/CW/MY-5868356/men-s-leather-jacket-500x500.jpg',
                id: 2
            },
            {title: 'sneakers',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Black_Converse_sneakers.JPG/1200px-Black_Converse_sneakers.JPG',
            id: 3
        },
        {title: 'women',
                imageUrl: 'https://static.toiimg.com/photo/msid-73872442/73872442.jpg?799492',
                size : 'large',
                id: 4
            },
            {title: 'men',
                imageUrl: 'https://nextluxury.com/wp-content/uploads/Top-75-Best-Manly-Hobbies-For-Men-1.jpg',
                size : 'large',
                id: 5
            }
            ]
        }
  }
  render(){
      return(
              <div className = 'menu'>
                  {this.state.sections.map(({title, imageUrl, id, size})=> (
                     <MenuItems title = {title} imageUrl = {imageUrl} id= {id} size = {size}/>
                  ))}

              </div>
         
      )
  }


}
export default Directory;