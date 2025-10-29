const Header = (props) =>{
  return(
     <div className="flex justify-between  p-1 items-center m-2 px-3  ">
          <img src={props.logo} alt="lund la ga gamer" className="h-[60px] w-[60px]  rounded-full  border-gray-300 border-2 object-cover"/>
          {/* card top right content */}
            <div className=" border-gray-400 border rounded-[5px] text-center   h-[15%] text-sm flex  justify-center items-center hover:cursor-pointer">
              <p className="text-xs text-gray-400 ml-1">
                Save
              </p>
              <div className=" w-3 mx- relative mr-1 ">
                <img src="https://img.icons8.com/?size=100&id=IfaXTZvk5Mvr&format=png&color=99A1AF" alt="" />
              </div>
            </div>
        </div>
  )
}

export default Header;