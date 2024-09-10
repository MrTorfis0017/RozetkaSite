'use client'
import 'swiper/css';
import 'swiper/css/navigation';
import React from "react";
import MySwiper from "@/app/_components/swiper/swiper";
import CategoryHeader from "@/app/_components/category-page/header/category-header";
import '../../main.scss'
import styles from './category-page-styles.module.scss'
import StoreProvider from "@/app/store-provider";
import CategoryList from "@/app/_components/category-page/list/category-list";

const Page = ({params}: { params: { id: number } }) => {

    return (
        <div className={styles.categoryPage}>
            <StoreProvider>
                <CategoryHeader categoryId={params.id}/>
                <MySwiper id={params.id}/>
                <CategoryList id={params.id}/>
            </StoreProvider>
        </div>
    )
}

export default Page;