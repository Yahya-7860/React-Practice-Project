import FoodCard from "./FoodCard";

export default function FilteredCards({ data, foodtype, searchVal }) {
    let filteredData = data;

    if (foodtype !== 'all') {
        filteredData = filteredData.filter((item) => item.type === foodtype);
    } else {
        filteredData = filteredData?.filter((item) => item.name.toLowerCase().includes(searchVal));
    }






    return (
        <div className="flex flex-wrap justify-center items-center mt-9">
            <div className='flex flex-wrap'>
                {filteredData.map((item, i) => (
                    <div key={i} className='p-3 '>
                        <FoodCard image={item.image} name={item.name} text={item.text} price={item.price} />
                    </div>
                ))}

            </div>
        </div>
    );
}
