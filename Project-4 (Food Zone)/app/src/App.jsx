import { useState } from 'react';
import { useEffect } from 'react';
import FoodCard from './components/FoodCard'
import Header from './components/Header'
import Button from './components/Button';
import FilteredCards from './components/FilteredCards';

function App() {

  const [data, setdata] = useState([]);
  const [foodtype, setfoodtype] = useState('all')
  const [searchVal, setsearchVal] = useState('')
  const BASE_URL = 'http://localhost:9000';

  useEffect(() => {

    const foodItems = async () => {
      try {

        const response = await fetch(BASE_URL)
        const jsonData = await response.json();
        setdata(jsonData)
      } catch (error) {
        console.log(error)
      }
    }
    foodItems();
  }, [])


  const filterWalaTrigger = (text) => {
    setfoodtype(text.toLowerCase());
  }

  const btn = [
    {
      text: 'All'
    },
    {
      text: 'Breakfast'
    },
    {
      text: 'Lunch'
    },
    {
      text: 'Dinner'
    },

  ]

  return (
    <>
      {/* //!Header */}
      <Header searchVal={searchVal} setsearchVal={setsearchVal} />
      {/* //!Header */}

      {/* {console.log(searchVal)} */}


      {/* //!Button */}
      <div id="button" className="flex gap-2 justify-center mt-4 ">
        {btn.map((item) => (
          <Button key={item.name} text={item.text} filterWalaTrigger={filterWalaTrigger} />
        ))}
      </div>
      {/* //!Button */}




      {/* //!Cards */}
      {searchVal !== '' || foodtype !== 'all' ? <FilteredCards searchVal={searchVal} data={data} foodtype={foodtype} /> : <div className='grid grid-cols-3'>
        {
          data.map((item, i) => (
            <div key={i} className='flex flex-wrap items-center w-full p-3 justify-center'>
              <FoodCard image={item.image} name={item.name} text={item.text} price={item.price} />
            </div>
          ))
        }
      </div>}
      {/* //!Cards */}
    </>
  )
}

export default App
