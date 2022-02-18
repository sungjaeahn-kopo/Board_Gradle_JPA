import Link from 'next/link';
import React from 'react';

export const Header = () => {
    return (
        <div className='header'>
            <h1>Next.js with NodeJS</h1>
            <div>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/board/list">BoardList</Link></li>
                    <li><Link href="/board/save">BoardPost</Link></li>
                </ul>
                {/* <NavLink to = "/list">
                    list
                    </NavLink>  */}
            </div>
        </div>
    )
}