import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import StudyTab from './StudyTab/StudyTab';

const TabSection = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-[32px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-900 to-blue-500'>Relations and Functions ( Mathematics )</h2>
            <div className=' w-[500px] h-[389px] mx-auto mt-16'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="mb-8 bg-slate-500 pb-2 w-[390px] mx-auto text-[#696671] text-base font-semibold">
                        <Tab>Study</Tab>
                        <Tab>Quiz</Tab>
                        <Tab>Test</Tab>
                        <Tab>Game</Tab>
                        <Tab>Others</Tab>
                    </TabList>
                    <TabPanel>
                        <StudyTab src={""} type={''}></StudyTab>
                    </TabPanel>
                    <TabPanel>
                        <div className='w-[500px] h-[300px] rounded-3xl bg-gradient-to-b from-blue-900 to-blue-600'>
                            <h1 className='text-2xl text-white font-semibold text-center'>hello this is Quiz</h1>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='w-[500px] h-[300px] rounded-3xl bg-gradient-to-b from-blue-900 to-blue-600'>
                            <h1 className='text-2xl text-white font-semibold text-center'>hello this is test</h1>
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className='w-[500px] h-[300px] rounded-3xl bg-gradient-to-b from-blue-900 to-blue-600'>
                            <h1 className='text-2xl text-white font-semibold text-center'>hello this is game</h1>
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className='w-[500px] h-[300px] rounded-3xl bg-gradient-to-b from-blue-900 to-blue-600'>
                            <h1 className='text-2xl text-white font-semibold text-center'>hello this is other</h1>
                        </div>

                    </TabPanel>
                </Tabs>
            </div>

            {/* Add the following style within your component */}
            <style>
                {`
                .react-tabs__tab--selected {
                    border: 4px solid #06286E;
                  
                }
                .react-tabs__tab {
                    border-bottom: -10px;
                }
              `}
            </style>
        </div>
    );
};

export default TabSection;
