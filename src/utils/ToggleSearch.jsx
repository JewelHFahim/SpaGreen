/* eslint-disable react/prop-types */
import { BsSearch } from 'react-icons/bs';

// eslint-disable-next-line no-unused-vars
const ToggleSearch = ({ isOpen, toggleModal }) => {
  return (
    <>
      {isOpen && (
        <div className=" bg-white w-[400px] h-[90px] flex justify-center items-center">
          <input type="text" placeholder="Search..." className="bg-[#e6e6e6] w-[270px] h-[40px] px-4 rounded-s-md focus:outline-none"/>
          <button className='border text-[20px] h-[40px] px-3 bg-secondary text-white rounded-e-md'><BsSearch/></button>
        </div>
      )}
    </>
  );
};

export default ToggleSearch;
