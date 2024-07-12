import React from 'react';
import { items } from './data';
import { notFound } from 'next/navigation';
import Image from 'next/image';


const getData = (cat) => {
    const data = items[cat]

    if(data){
        return data
    }
    else{
        notFound()
    }
}

const Category = ({params}) => {
    const data = getData(params.cate);
    // console.log(data);
    return (
        <div className='px-12'>
            <h1 className='text-6xl font-bold'>Our Works <span className='font-semibold text-xl'>/{params.cate}</span></h1>

            <div>
                {
                    data.map(item => <div className='flex gap-12 justify-center items-center mt-6 pb-6' key={item.id}>
                        <Image src={item.image} alt='item_image'  width={500} height={500}/>
                        <div className='w-1/2'>
                        <h1 className='text-4xl font-bold'>{item.title}</h1>
                        <p>{item.desc}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Category;