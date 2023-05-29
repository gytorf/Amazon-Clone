import React from 'react';
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../features/user/apiProductSlice';
import img from '../images/tshirts_black.jpg'

const Category=(data:any)=>{

  return<>
  <div className='bg-slate-200 pb-2 hover:bg-slate-300 mt-20'>
    <div>
      <img src={img} className=' ' />        
    </div>
    <div className='p-1'>
      <p className=' text-xl'>432.44$</p>
      {data.name}
    </div>

  </div>
  </>
}

const Main=()=>{

const {data,isSuccess,error} = useGetProductsQuery();
console.log(data);
console.log(error);

return (
    <div className='w-full pl-44 pr-44 grid grid-cols-8 gap-1 '>

      {/* grid */}
      {isSuccess ? data?.payload?.map((a:any)=>{return Category(a) }): ""}


    </div>
)
}

export default Main