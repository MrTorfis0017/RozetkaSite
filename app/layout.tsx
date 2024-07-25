import {Stack} from "@mui/material";
import './main-styles.scss'
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import {Box} from "@mui/system";
import RozetkaLogo from './static/images/rozetka-header.svg'

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Stack direction="row" className="header">
            <MenuIcon className="menu-icon"/>
            <Box
            component="img"
            src={RozetkaLogo}
            />
        <main>{children}</main>
        </body>
        </html>
    )
}