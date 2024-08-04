import styles from "./header-styles.module.scss";
import React from "react";


const Header = () => {
    return (
        <div className={styles.header}>
            <img src='/icons/menu.svg' className={styles.menuIcon} alt="Menu"/>
            <img src='/icons/rozetka-header.svg' alt="Logo"/>
            <button className={styles.button}>
                <text className={styles.catalogText}>
                    Catalog
                </text>
            </button>
            <input className={styles.searchField} type="text"/>
        </div>
    )
}

export default Header;