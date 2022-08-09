import React, { useEffect, useState } from 'react'
import {Favorite,StarRounded,AddRounded} from '@mui/icons-material';
import {Items} from './Data';
import {actionType} from './reducer';
import {useStateValue} from './StateProvider';
let cardData = [];
function ItemCard({imgSrc,name,ratings,price,itemId}) {
  
  const [isFavourite,setIsFavourite] = useState(false);
  const [currentValue,setCurrentValue] = useState(Math.floor(ratings))

  const [isCart,setCart] = useState(null)
  const [{},dispatch] = useStateValue()
  useEffect(()=>{
    if(isCart){
      cardData.push(isCart);
      dispatch({type:actionType.SET_CART, cart: cardData,})
    }
  },[isCart])

  const handleClick = (value) =>{
    setCurrentValue(value)
  }

  return (
    <div className='itemCard' id={itemId}>
      <div className={`isfavourite ${isFavourite?'active':''}`}
      onClick={()=>setIsFavourite(!isFavourite)}>
        <Favorite/>
      </div>
      <div className="imgBox">
        <img src={imgSrc} alt="" className='itemImg'/>
      </div>
      <div className="itemContent">
        <h3 className='itemName'>{name}</h3>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null,{length : 5}).map((e,i)=>(
              <i key={i} className={`rating ${currentValue > i ? 'orange':'gray'}`}
              onClick={()=>handleClick(i+1)}
              >
                <StarRounded/>
              </i>
            ))}
            <h3 className="price"><span>$</span>{price}</h3>
          </div>
          <i className='addToCart' onClick={()=>setCart(Items.find((n)=>n.id===itemId))}>
            <AddRounded/>
          </i>
        </div>
      </div>
    </div>
  )
}

export default ItemCard