'use client'
import './main-styles.scss'
import React from "react";
import RozetkaLogo from './static/images/rozetka-header.svg'
import HeaderMenu from './static/images/menu.svg'

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <div className="header">
            <img src={HeaderMenu} className="menu-icon" alt="Menu"/>
            <img src={RozetkaLogo} alt="Logo"/>
            <button className="button">
                <text className="catalog-text">
                    Catalog
                </text>
            </button>
            <input className="search-field" type="text"/>
        </div>
        <main>{children}</main>
        </body>
        </html>
    )
}