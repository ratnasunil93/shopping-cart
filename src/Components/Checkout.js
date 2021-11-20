
import React from 'react'
import { useStateValue } from './StateProvider';
import {Card,Button} from 'react-bootstrap';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import {getSubTotal} from './reducer';
import './css/checkout.css'

function Checkout() {
    const [{basket},dispatch]=useStateValue();
//alert(JSON.stringify(basket));
    const removeFromBasket=(id)=>{
      //alert(id);
        dispatch({
          type:'REMOVE_FROM_BASKET',
          id:id
        })
    }
    return (<>
       <div className="checkout text-center"> 
        {basket.length === 0 ? <div><h4>Basket is Empty</h4></div>:<div  className="container" style={{display:'flex'}}>

            <div className="checkout_left">
           {basket.map((item)=>{
               return <><Card variant="card" style={{ width:'25rem' }}>
               <Card.Img variant="card.img" src={item.img} />
               <Card.Body>
                 <Card.Title>{item.title}</Card.Title>
                 <Card.Text>
                  {item.description}
                 </Card.Text>
                 <Card.Text>
                  {item.price}
                 </Card.Text>
                 <Button onClick={()=>removeFromBasket(item.id)} variant="btn">Remove&nbsp;<DeleteOutlineIcon/></Button>
               </Card.Body>
             </Card></>
           }) }
            </div>
            <div className="checkout_right">
            <div className="subtotal"><p>{basket.length} Items in Basket</p><h6>subtotal:${getSubTotal(basket)}</h6><Button  variant="btn">Check out&nbsp;<DoneOutlineIcon/></Button></div>
            </div>
            
         </div>
        }

         </div>
      </>  
    )
}

export default Checkout
