import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? 'text-blue-500'
                    : 'text-red-500'
            }
        >
            {children}
        </Link>
    );
}
