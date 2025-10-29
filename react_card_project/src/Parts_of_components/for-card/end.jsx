const End = (props) =>{
  return(
    <div className=" border-t-2 border-gray-300 my-22 mx-3 px-4  top-9">
          <div className="flex justify-between items-center  my-4">
            <div>
              <h1 className="font-semibold text-xl text-black">{props.pay}</h1>
              <span className="text-xs font-medium text-gray-500">{props.location}</span>
            </div>

              <button className="bg-black px-2 py-2 rounded text-sm text-white hover:cursor-pointer ">Apply Now</button>

          </div>
        </div>
  )
};

export default End;