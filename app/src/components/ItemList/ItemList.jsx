import {React} from 'react';
import {Grid} from 'semantic-ui-react';
import Item from '../Item/item';




  
 const ItemList = ({items}) => {
            
    return(
        
        <div>
            <Grid container columns={3}>
            {items.map((item,idx) =>{

                return(

                    <Grid.Column  key={idx}>
                        <Item 
                            item={item}
                        />
                    </Grid.Column>

                )
            })
            }

            </Grid>
            


        </div>
    )
  }

  export default ItemList


