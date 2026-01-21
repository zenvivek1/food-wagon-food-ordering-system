import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFoodByCategory } from '../../api/services/foods/getFoodCategories'

const [catergoryFood, setcatergoryFood] = useState([])


useEffect(()=>{ 
    try{
        const {id} = useParams()
        const catergoryFood = async()=>{
            const response = await getFoodByCategory(id || "")
            setcatergoryFood(response)
        }
        catergoryFood()
    }
    catch(error){
        console.log(error)
    }
},[])   


const CatergoryFood = () => {
  return (
    <div className='w-full h-screen bg-white py-10 px-6'>   
        {catergoryFood.map((item: any) => (
            <div key={item.id}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </div>
        ))}
    </div>
  )
}

export default CatergoryFood