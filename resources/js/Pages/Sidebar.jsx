import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import NavLink from '@/Components/NavLink';

const Sidebar = ({ href, isCollapsed, toggleSidebar }) => {
    const sidebarItems1 = [
      { id:1, href: "/dashboard", label: "Systems"},
      { id:2, href: "/dashboard", label: "Users & Group"},
      { id:3, href: "/dashboard", label: "Competition"},
      { id:4, href: "/about", label: "About" },
    ];

    const sidebarItems2 = [
        { id:1, href: "/dashboard", label: "System Code"},
        { id:2, href: "/dashboard", label: "Properties"},
        { id:3, href: "/menu", label: "Menus"},
        { id:4, href: "/dashboard", label: "APIList"},
      ];
  
  return (
        <aside className="aside is-placed-left is-expanded rounded-lg">
            <div className="flex items-center justify-between p-6">
            <img src="./images/svg-gobbler.svg" alt="User" />
            <img src="./images/menu-open.svg"alt="User" />
            </div>
        <div className="menu is-menu-main pl-4">
            <ul className="menu-list">
                {sidebarItems1.slice(0,1).map((item) => (
                    <li key={item.id}>
                        <NavLink href={item.href} active={item.href}>
                        <svg className="h-8 w-8 text-slate-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                            <span className= {`flex items-center text-white py-2.5 px-4 hover:bg-gray-700 transition ${isActive ? "bg-gray-700" : ""}`}>{item.label}</span>
                        </NavLink>
                    </li>
                ))}

                {sidebarItems2.map((item) => (
                    <li key={item.id}>
                        <NavLink href={item.href} active={item.href}>
                        <svg className="h-8 w-8 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="6" height="6" rx="1" />  <rect x="14" y="4" width="6" height="6" rx="1" />  <rect x="4" y="14" width="6" height="6" rx="1" />  <rect x="14" y="14" width="6" height="6" rx="1" /></svg>                        
                        <span className= {`flex items-center py-2.5 px-4 hover:bg-gray-700 transition ${isActive ? "text-gray-700" : "text-gray-600"}`}>{item.label}</span>
                        </NavLink>
                    </li>
                ))}
                </ul>

            <ul className="menu-list">
            {sidebarItems1.splice(1).map((item) => (
                <li key={item.id}>
                        <NavLink href={item.href} active={item.href}>
                        <svg className="h-8 w-8 text-slate-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                        <span className= {`flex items-center text-gray-600 py-2.5 px-4 hover:bg-gray-700 transition ${isActive ? "bg-gray-700" : ""}`}>{item.label}</span>
                        </NavLink>
                </li>
            ))}
            </ul>

        </div>
      </aside>
    );
  };

export default Sidebar
