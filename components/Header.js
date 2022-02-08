import Link from 'next/link';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <div className='header'>
            <h1>Next.js with NodeJS</h1>
            <div>
                {/* <NavLink to = "/list">
                    list
                    </NavLink>  */}
            </div>
        </div>
    )
}