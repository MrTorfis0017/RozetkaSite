'use client'
import React from "react";
import StoreProvider from "@/app/store-provider";
import Header from "@/app/components/header/header";
import Sidebar from "@/app/components/sidebar/sidebar";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <StoreProvider>
            <Header/>
            <Sidebar/>
        </StoreProvider>
        <main>{children}</main>
        </body>
        </html>
    )
}