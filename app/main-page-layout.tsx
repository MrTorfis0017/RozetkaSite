import HeaderMenu from "@/app/static/icons/menu.svg";
import RozetkaLogo from "@/app/static/icons/rozetka-header.svg";
import CatalogLaptop from "@/app/static/icons/catalog-laptop.svg";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {findSideBarCategories} from "@/app/api/main-page/api";
import StatusEnum from "@/types/status-enum";

const MainPageLayout = () => {
    const menuCatalog:string[] = useAppSelector((state) => state.sideBarSlice.catalogList);
    const status = useAppSelector((state) => state.sideBarSlice.status);
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(findSideBarCategories());
    }, [])
    return (
        status === StatusEnum.DONE ? (
            <div>
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
                            <div key={index} className="catalog-list">
                                <img src={CatalogLaptop} alt="catalog-img" width="20px" height="20px"/>
                                <text className="catalog-value">
                                    {item}
                                </text>
                            </div>
                        )
                    })}
                </div>
            </div>
        ) : (
            <div>Loading...</div>
        )
    )
}

export default MainPageLayout;