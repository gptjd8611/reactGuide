import { useContext } from 'react';
import { TabsContext } from './Tabs';

interface TabPanelProps {
    index: number;
    children: React.ReactNode;
}

export default function TabPanel({ index, children }: TabPanelProps) {
    const context = useContext(TabsContext);
    if (!context)
        throw new Error('TabPanel must be used within a Tabs component');

    return context.activeIndex === index ? (
        <div className="tab-body">{children}</div>
    ) : null;
}
