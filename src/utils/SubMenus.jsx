import { BsSearch } from "react-icons/bs";

const SubMenus = () => {
    
  return (
    <>
      <div className=" bg-white w-[200px] border border-red-600 ">
        <ul className="flex flex-col p-4 border border-red-600">
          {[1, 2, 3].map((item, i) => (
            <li key={i} className="">
              <p href="" className="py-1 cursor-pointer">Home</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SubMenus;
