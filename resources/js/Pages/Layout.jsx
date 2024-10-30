import React, { useEffect } from 'react'
import { Link } from '@inertiajs/inertia-react'
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <main>
        <Navbar />
        <Sidebar />
      {children}
    </main>
  )
}
