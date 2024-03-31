import { useEffect, useState } from "react"
import Rules from "./Rules"
import Errorr from "./Errorr"

export default function Game() {

    const [ruleText, setruleText] = useState("Show")
    const [rule, setRule] = useState(false)

    const [score, setscore] = useState(2)

    const [error, seterror] = useState(false)
    const [val, setval] = useState(null)
    const [randNumber, setrandNumber] = useState(1)

    let arr = [1, 2, 3, 4, 5, 6];

    const resetScore = () => {
        setscore(0)
    }

    function calculation() {
        // if (val === randNumber)
        //     setscore(pre => pre + randNumber)
        // else
        //     setscore(pre => pre - 2)

        if (val === randNumber)
            setscore(score + randNumber)
        else
            setscore(score - 2)
        setval(null)
    }

    function getRandomNumber() {
        if (val === null) {
            seterror(true)
        }
        else {
            seterror(false)
            let a = 0;
            do {
                a = Math.floor(Math.random() * 6 + 1);
            } while (a === randNumber)
            setrandNumber(a);

        }
    }

    useEffect(() => {
        calculation();
    }, [randNumber]);



    return (
        <div className="flex justify-center flex-col items-center">
            <div className="w-4/5 flex justify-between mt-9">
                <div id="score" className="flex flex-col justify-center items-center">
                    <p className="font-bold text-6xl">{score}</p>
                    <p className="font-semibold">Total Score</p>
                </div>
                <div id="nummber">
                    <div id="numList">

                        <ul className="flex gap-4">
                            {arr.map((value, i) => (
                                <li key={i} ><button onClick={() => (setval(value), seterror(false))} className={`active:bg-black active:text-white size-max border border-black font-bold pt-2 pb-2 pl-4 pr-4 `}>{value}</button></li>
                            ))}
                        </ul>
                    </div>
                    <p className="text-end mt-4 font-bold">Select Number</p>
                </div>
            </div>

            {/* //!Game header end */}

            <div id="dice_part " >

                <div id="dice" className="w-52 flex flex-col items-center gap-2">
                    <div className="w-full text-center">
                        {error === true ? <Errorr /> : <p className="font-bold text-2xl">Selected No : {val}</p>}
                    </div>






                    <div id="image" className="cursor-pointer" onClick={getRandomNumber}>
                        <img src={`public/images/dice_${randNumber}.png`} className="size-40" />
                    </div>


                    {/* //!section */}
                    <p className="font-extrabold">Click on Dice to Roll</p>
                    <button onClick={resetScore} className="w-full border border-black bg-white text-black rounded font-bold p-2  active:bg-black active:text-white duration-100">Reset Score</button>
                    <button className="w-full border border-black bg-black text-white rounded font-bold p-2 active:bg-white active:text-black duration-100" onClick={() => (setRule(!rule), setruleText(ruleText === 'Show' ? 'Hide' : 'Show'))}>{ruleText} Rules</button>
                </div>

            </div>
            <div className="mt-3">
                <div >
                    {rule ? <Rules /> : null}
                </div>
            </div>


        </div>
    )
}
