import DropDownElement from "./DropDownElement";


const DropDown = ()=>{

    return(
     
    <div className=" w-screen py-4  h-screen ">
    <div className="flex flex-col  w-72 ml-auto mr-auto bg-slate-400 py-2 px-2 ">
    <div className="flex ">
       <div className="w-1/5 ">
           {/* userProfileImage Rounded */}
           <img className=" rounded-full  " src="https://media.licdn.com/dms/image/D4D35AQHFsREKckn2LQ/profile-framedphoto-shrink_400_400/0/1677497745980?e=1694847600&v=beta&t=YurdzQRaYv2hKKFyimjWXM9mLlzLBlCdeshHiy4uUbI" alt="User Profile" />
       </div>
       <div className=" px-1 flex flex-col">
           <p>Abhinav Sharma</p>
           <p className="text-sm font-light">abhinav619000@gmail.com</p>
       </div>
    </div>
    <div className="flex flex-col">
       {/* list of options Button  */}
       <DropDownElement png_url="" element_name="Manage Account"/>

    </div>
  </div>
  </div>);
   
};


export default DropDown;