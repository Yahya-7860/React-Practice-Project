import PropTypes from 'prop-types'

export default function Button({ text, filterWalaTrigger }) {
    return (
        <div>
            <button onClick={() => filterWalaTrigger(text)} className='text-white bg-gradient-to-t from-red-600 to-red-800 pt-1.5 pb-1.5 pl-3 pr-3 rounded active:bg-gradient-to-b font-bold text-sm'>{text}</button>
        </div>
    )
}  

Button.propTypes = {
    text: PropTypes.string
};
