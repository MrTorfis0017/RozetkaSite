'use client'
import Header from "@/app/_components/header/header";
import Sidebar from "@/app/_components/sidebar/sidebar";
import React from "react";
import StoreProvider from "@/app/store-provider";

export default function MainLayout({children}: { children: React.ReactNode }) {
    return (
        <div>
            <StoreProvider>
                <Header/>
                <div style={{padding: "0 32px"}}>
                    <Sidebar/>
                </div>
                <main>{children}</main>
            </StoreProvider>
        </div>
    );
}