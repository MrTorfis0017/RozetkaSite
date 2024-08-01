'use client'
import './main-styles.scss'
import React from "react";
import RozetkaLogo from './static/icons/rozetka-header.svg'
import HeaderMenu from './static/icons/menu.svg'
import CatalogLaptop from './static/icons/catalog-laptop.svg'

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const menuCatalog: string[] = ['Ноутбуки и компьютеры','Смартфоны'];
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
        <div className="side-bar">
            {menuCatalog.map((item: string, index: number) => {
                return (
                    <div key={index} className="catalog-list" >
                        <img src={CatalogLaptop} alt="catalog-img" width="20px" height="20px"/>
                    <text className="catalog-value">
                        {item}
                    </text>
                    </div>
                )
            })}
        </div>
        <main>{children}</main>
        </body>
        </html>
    )
}