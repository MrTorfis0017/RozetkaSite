'use client'
import './main-styles.scss'
import React from "react";
import StoreProvider from "@/app/store-provider";
import MainPageLayout from "@/app/main-page-layout";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <StoreProvider>
            <MainPageLayout/>
        </StoreProvider>
        <main>{children}</main>
        </body>
        </html>
    )
}