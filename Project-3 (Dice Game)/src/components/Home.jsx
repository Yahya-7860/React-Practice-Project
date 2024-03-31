
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div id="outer" className='flex justify-center items-center h-screen'>
            <div id='inner' className='flex justify-center items-center gap-3'>
                <img src="public\images\dices 1.png" className='' />
                <div id="gameText">
                    <h1 className='text-7xl font-bold'>DICE GAME</h1>
                    <div id="playbtn" className='flex justify-end'>
                        <Link to="/game"><button className='bg-black text-white pt-3 pb-3 pl-4 pr-4 font-semibold rounded flex mt-4 active:bg-white active:text-black active:border active:border-black duration-150'>Play Now</button></Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
