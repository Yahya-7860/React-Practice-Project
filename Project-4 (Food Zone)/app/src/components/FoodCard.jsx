import PropTypes from 'prop-types'


export default function FoodCard({ image, name, text, price }) {
    return (
        <div className='cursor-default backdrop-blur-lg bg-white/15  flex flex-col justify-center pt-2 pb-2 pl-3 pr-3 border-2 max-w-96 rounded-2xl border-l-red-500 border-t-red-500 border-r-cyan-600 border-b-cyan-600'>
            <div id="image_text" className='flex items-center' >
                <img src={image} alt="" />
                <div id="text" className='text-white'>
                    <h1 className='font-bold text-2xl '>{name}</h1>
                    <p className=''>{text}</p>
                </div>
            </div>
            <div id="price" className=' flex justify-end text-center'>
                <p className='text-white w-20 bg-red-500 pt-1 pb-1 pl-3 pr-3 rounded '>${price}.00</p>
            </div>

        </div>
    )
}

FoodCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
    price: PropTypes.number
};
