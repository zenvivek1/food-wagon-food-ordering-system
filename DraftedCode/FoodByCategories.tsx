import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchAllCategories } from '../redux/slices/foodCatergories';
import FoodLoader from '../Pages/Loader/FoodLoader';

const categories = [
  {
    name: 'Italian',
    image:
      'https://images.unsplash.com/photo-1603133872878-684f208fb84b',
  },
  {
    name: 'Chinese',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947',
  },
  {
    name: 'Indian',
    image:
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0',
  },
  {
    name: 'Japanese',
    image:
      'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec',
  },
  {
    name: 'Thai',
    image:
      'https://images.unsplash.com/photo-1604908554168-42f7e1c6f3f4',
  },
]

const FoodByCategories = () => {
  const dispatch = useAppDispatch();
  // const { allCategories } = useAppSelector((state) => state.foodCategories);

  // useEffect(() => {
  //   dispatch(fetchAllCategories());
  // }, [dispatch]);
  
  // Debug log to see persistent updates
  // console.log("Rendered allCategories:", allCategories);

  return (
    <div className="w-full bg-white py-10 px-6">
      <div className="max-w-[80%] mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center">
          Food By Categories
        </h1>
        <p className="text-gray-500 mt-1 text-center">
          Explore our diverse range of cuisines, from classic dishes to innovative flavors.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-8">
          {Array.isArray(categories) && categories.length > 0 ? (
            categories.map((cat) => (
              <div
                key={cat.name}
                className="relative h-56 rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* background image */}
                <img
                  src={
                    cat.image || 
                    categories.find((c) => c.name.toLowerCase() === cat.name.toLowerCase())?.image || 
                    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                  }
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* text */}
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-white text-xl font-semibold tracking-wide">
                    {cat.name}
                  </h2>
                  <span className="text-sm text-orange-400">
                    Explore →
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className='col-span-5'>
            {/* <FoodLoader/> */}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FoodByCategories
