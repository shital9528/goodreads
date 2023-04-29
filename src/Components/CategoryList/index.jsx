import React from 'react'
import Category from './Category';
const CategoryList = () => {
    const items = [
        {catId: 1, catName: "Function"},
        {catId: 2, catName: "History"},
        {catId: 3, catName: "Science"},
        {catId: 4, catName: "External Affairs"},

    ];
  return (
    <div>
     <h2 className='text-center'>All category</h2> 
     <div className='row'>
        {items.map((item)=>(
            <Category data={item} />
        ))}
     </div>
    </div>
  );
};

export default CategoryList
