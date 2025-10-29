const Middle = (props) => {
  return(
    <div className="my-13 mx-2 px-3  ">
          <div className="flex justify-baseline items-baseline gap-1">
            <h2 className="font-semibold text-xl ">{props.companyName}</h2>
            <span className="font-medium text-gray-400 text-xs">{props.datePosted}</span>
          </div>
          <div>
            <div className="profile name">
              <h1 className="font-bold text-2xl ">Frontend Engineer</h1>
            </div>
            <div className="tag flex justify-start gap-1 relative top-3">
              <span className="bg-gray-200  text-xs font-medium px-3 py-1 rounded-sm ">{props.tag1}</span>
              <span className="bg-gray-200  text-xs font-medium px-3 py-1 rounded-sm ">{props.tag2}</span>
            </div>
          </div>
        </div>
  )
};

export default Middle;