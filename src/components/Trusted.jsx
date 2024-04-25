
const Trusted = () => {
  return (
    <div className="w-full bg-white dark:bg-bgBlack text-bgBlack dark:text-white flex flex-col items-center pt-10">
        <h2 className="text-xl font-bold opacity-40">Trusted by</h2>  
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-around gap-10 p-4">
            <img src="logo-google.png"/>
            <img src="logo-hp.png"/>
            <img src="logo-microsoft.png"/>
            <img src="logo-vector.png"/>
        </div>
        <div className="w-full pt-10 mt-20 bg-bgBlack"></div>    
    </div>
  )
}

export default Trusted
