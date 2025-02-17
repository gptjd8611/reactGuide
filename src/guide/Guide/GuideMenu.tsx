import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

interface GuideMenuProps {
    className?: string;
}

export default function GuideMenu({ className }: GuideMenuProps) {
    const componentList = [
        { title: 'Main', path: '/', mainClass: 'guide-gnb__link--main', id: 1 },
        { title: 'Button', path: '/button', id: 2 },
        { title: 'Checkbox', path: '/checkbox', id: 3 },
        { title: 'Radio', path: '/radio', id: 4 },
        { title: 'Input', path: '/input', id: 5 },
        { title: 'Tooltip', path: '/tooltip', id: 6 },
        { title: 'Select', path: '/select', id: 7 },
        { title: 'Alert', path: '/alert', id: 8 },
        { title: 'BottomSheet', path: '/BottomSheet', id: 9 },
        { title: 'LayerPopup', path: '/LayerPopup', id: 10 },
        { title: 'Tab', path: '/Tab', id: 11 },
        { title: 'Accordion', path: '/Accordion', id: 12 },
        { title: 'Table', path: '/Table', id: 13 },
        { title: 'ToastPopup', path: '/ToastPopup', id: 14 },
    ];

    const menuList = componentList.map((menu) => {
        return (
            <li className="guide-gnb__item" key={menu.id}>
                <Link
                    className={cn('guide-gnb__link', menu.mainClass)}
                    href={menu.path}
                >
                    {' '}
                    {menu.title}{' '}
                </Link>
            </li>
        );
    });

    return (
        <>
            <div className="guide-main__menu guide-gnb">
                <ul className="guide-gnb__list">{menuList}</ul>
            </div>
        </>
    );
}
