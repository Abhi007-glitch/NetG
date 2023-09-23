
const DropDownElement = ({png_url,element_name})=>{
    
    return (
        <div className="flex px-1 ">
            {png_url!=="" && <img src={png_url} className="h-5 w-5" /> }
            <p className="text-base ">{element_name}</p>
        </div>
    )

}

export default DropDownElement;