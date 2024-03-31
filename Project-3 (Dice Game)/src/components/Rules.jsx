

export default function Rules() {
    return (
        <div className='flex justify-center'>
            <div className='border border-black w-fit p-3 bg-red-100 rounded-2xl'>
                <h1 className='font-bold text-2xl mb-3'>How to play Dice Game</h1>
                <ul className='flex flex-col gap-1'>
                    <li>Select any number.</li>
                    <li>Click on the dice image.</li>
                    <li>After click on  dice  if selected number is equal to dice number you will get same point as dice. </li>
                    <li>If you get wrong guess then  2 point will be dedcuted. </li>
                </ul>
            </div>
        </div>
    )
}
