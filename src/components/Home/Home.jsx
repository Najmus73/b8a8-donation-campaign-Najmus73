const Home = () =>{
    return (
        <div>
        <div className="flex flex-col items-center pt-24">
             <h1 className="text-4xl font-bold">I Grow By Helping People In Need</h1>
             <div className="pt-7">
                <input className="border p-1.5 rounded-l-lg" type="text" placeholder="Search here..." />
                <button className="bg-red-400 p-1.5 px-4 rounded-r-lg">Search</button>
             </div>
        </div>
        </div>
    )
}
export default Home;