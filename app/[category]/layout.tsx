import Header from "@/app/_components/header/header";
import React from "react";

export default function CatalogLayout({
                                            children, // will be a page or nested layout
                                        }: {
    children: React.ReactNode
}) {
    return (
        <section>
            <Header/>
            {children}
        </section>
    )
}