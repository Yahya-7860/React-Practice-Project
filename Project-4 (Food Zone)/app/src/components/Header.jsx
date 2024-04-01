
export default function Header({ searchVal, setsearchVal }) {
    return (
        <div id="header" className="backdrop-blur-sm bg-white/40 w-full flex justify-center h-16 border-b">

            <div className="w-4/5 mt-3">
                <div id="upperHeader" className=" flex justify-between">
                    <div id="logo">
                        <p className="text-4xl font-bold text-white">F<span className="text-red-600">oo</span>d Z<span className="text-red-600">o</span>ne</p>
                    </div>


                    <div id="searchBar">
                        <input type="text" placeholder="Search" className="bg-white border-y-2 border-red-500 p-2 rounded-md outline-none" value={searchVal} onChange={(e) => (setsearchVal(e.target.value))} />
                    </div>


                </div>
            </div>
        </div>
    )
}
