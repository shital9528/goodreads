import React from 'react'
import { Link } from 'react-router-dom';
const category = (props) => {
    const {catId, catName} = props.data;
  return (
    <div className='col-md-3'>
      <Link to='/book'>
        <div className='card'>
            <img src ="https://placehold.it/400/888888" className="card-image-top" >

            </img>
            <div className='card-body'>
                <h5 className='card-title'>{catName}</h5>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default category
