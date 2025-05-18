import { createContext, useState, ReactNode } from 'react';
import TabList from './TabList';
import Tab from './Tab';
import TabPanel from './TabPanel';

interface TabsContextType {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

export const TabsContext = createContext<TabsContextType | null>(null);

interface TabsProps {
    children: ReactNode;
    defaultIndex?: number;
}

export default function Tabs({ children, defaultIndex = 0 }: TabsProps) {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    return (
        <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
            <div className="tab-box">{children}</div>
        </TabsContext.Provider>
    );
}

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;
