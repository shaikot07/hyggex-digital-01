import { IoIosAddCircle } from 'react-icons/io';
import Faq from './Faq/Faq';

const MiddelPart = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-2 items-center justify-between w-full'>
                <img className='w-[190px]' src="../../../public/img.png" alt="" />

                <div className='flex items-end justify-end'>
                    <h2 className='flex items-center text-[#06286E] sm:text-1xl md:text-2xl font-semibold text-left'><IoIosAddCircle className='text-4xl' />Create Flashcard</h2>
                </div>
            </div>
            <div className='mt-10'>
                <Faq></Faq>
            </div>
        </div>
    );
};

export default MiddelPart;
