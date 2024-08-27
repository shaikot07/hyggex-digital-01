

const Faq = () => {
    return (
        <div className="pb-28">
            <h2 className="text-[#06286E] text-3xl font-bold">FAQ</h2>
            <div className="w-1/2 mt-6">
                <div className="collapse collapse-arrow bg-base-200 border-2 border-[#06286E]">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-1xl font-medium">
                        Click to Open This One And Close Others
                    </div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet justo sed massa fermentum vehicula in id diam. Nam eget ullamcorper lorem, posuere gravida odio. Quisque lacinia tortor ac dui lobortis vulputate. Integer iaculis dapibus turpis et tincidunt. Maecenas eleifend ut lacus vitae blandit.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mt-4 border-2 border-[#06286E]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-1xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>Hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mt-4 border-2 border-[#06286E]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-1xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>Hello</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;