import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabSection = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const category = []
    const initialIndex = categories.indexOf(category)
    // console.log(initialIndex);
    // const [tabIndex, setTabIndex] = useState(initialIndex);
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-[32px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-900 to-blue-500'>Relations and Functions ( Mathematics )</h2>
            <div className='bg-slate-400 w-[500px] h-[389px] mx-auto mt-16'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Study</Tab>
                        <Tab>Quiz</Tab>
                        <Tab>Test</Tab>
                        <Tab>Game</Tab>
                        <Tab>Others</Tab>
                    </TabList>
                    <TabPanel>
                        {/* <OrderTab items={salad}></OrderTab> */}
                        <h1>hello this is study </h1>
                    </TabPanel>
                    <TabPanel>
                        {/* <OrderTab items={pizza}></OrderTab> */}
                        <h1>hello this is Quiz</h1>
                    </TabPanel>
                    <TabPanel>
                        {/* <OrderTab items={soup}></OrderTab> */}
                        <h1>hello this is test </h1>
                    </TabPanel>
                    <TabPanel>
                        {/* <OrderTab items={desserts}></OrderTab> */}
                        <h1>hello this is game </h1>
                    </TabPanel>
                    <TabPanel>
                        {/* <OrderTab items={drinks}></OrderTab> */}
                        <h1>hello this is other </h1>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default TabSection;