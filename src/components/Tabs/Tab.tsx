import { useContext } from 'react';
import { TabsContext } from './Tabs';

interface TabProps {
    index: number;
    children: React.ReactNode;
}

export default function Tab({ index, children }: TabProps) {
    const context = useContext(TabsContext);
    if (!context) throw new Error('Tab must be used within a Tabs component');

    const { activeIndex, setActiveIndex } = context;

    return (
        <button
            onClick={() => setActiveIndex(index)}
            className={`tab-item ${activeIndex === index ? 'active' : ''}`}
        >
            {children}
        </button>
    );
}
