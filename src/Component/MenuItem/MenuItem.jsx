import { CiHome } from "react-icons/ci";
import {  FaChevronRight } from "react-icons/fa";


const MenuItem = () => {
    return (
        <div className="mt-10">
            <ul className="menu-horizontal px-1">
                <li className="flex items-center text-[#696671] text-1xl font-semibold "><CiHome className="text-2xl"/><FaChevronRight className="text-[#06286E]"/> Flashcard</li>
                <li className="flex items-center text-[#696671] text-1xl font-semibold "><FaChevronRight className="text-[#06286E]"/> Mathematics</li>
                <li className="flex items-center text-[#06286E] text-1xl font-semibold "><FaChevronRight className="text-[#06286E]"/> Relation and Function</li>
            </ul>
        </div>
    );
};

export default MenuItem;