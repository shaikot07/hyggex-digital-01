/* eslint-disable react/prop-types */


const StudyTab = ({src, type}) => {
    return (
        <div className="w-[500px] h-[300px] rounded-3xl bg-gradient-to-b from-blue-900 to-blue-600 ">
            {/* <video src=""></video> */}
            <video controls className="w-[500px] h-[300px] rounded-3xl">
                <source src={src} type={type} />
               
            </video>
        </div>
    );
};

export default StudyTab;