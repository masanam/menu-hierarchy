// src/components/Sidebar.js
import { useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import AllImages from "../../constants/image"; // Update the path as needed

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const sidebarItems = [
    { href: "/admin/home", label: "Dashboard", icon: <AllImages.dashboard /> },
    { href: "/admin/user-roles", label: "User Roles", icon: <AllImages.userRoles /> },
    { href: "/admin/user-management", label: "User Management", icon: <AllImages.userManagement /> },
    { href: "/admin/customers", label: "Customers", icon: <AllImages.customers /> },
    { href: "/admin/auto-response", label: "Auto Response", icon: <AllImages.autoResponse /> },
    { href: "/admin/subscriptions", label: "Subscriptions", icon: <AllImages.subscriptions /> },
  ];

  return (
    <aside className={`${isCollapsed ? "w-14" : "w-64"} h-full bg-gray-800 transition-all duration-300`}>
      <button onClick={toggleSidebar} className="absolute -right-2.5 top-0 w-6 h-6 flex justify-center items-center hover:bg-gray-300 rounded-full transition cursor-pointer">
        {/* Add toggle icon */}
      </button>
      <nav className="mt-4">
        <ul>
          {sidebarItems.map((item) => (
            <SidebarItem key={item.href} href={item.href} label={item.label} isCollapsed={isCollapsed} icon={item.icon} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;