import { ReactNode } from 'react';

interface TabListProps {
    children: ReactNode;
}

export default function TabList({ children }: TabListProps) {
    return <div className="tab-lists">{children}</div>;
}
