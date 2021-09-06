import {React} from 'react';
import {Grid} from 'semantic-ui-react';
import Item from '../Item/item';




  
  export default function ItemList ({items}) {
            
    return(
        
        <div>
            <Grid container columns={3}>
            {items.map((item,idx) =>{

                return(

                    <Grid.Column>
                        <Item 
                            item={item}
                            key={idx}
                        />

                        
                    </Grid.Column>

                )
            })
            }

            </Grid>
            


        </div>
    )
  }


