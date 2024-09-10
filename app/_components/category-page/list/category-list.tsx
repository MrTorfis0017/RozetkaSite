'use client'
import styles from './category-list-styles.module.scss'
import {useEffect} from "react";
import {findSubcategoriesById} from "@/app/_api/category-page/api";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import Category from "@/types/category";

type CategoryListProps = {
    id: number;
}

const CategoryList: React.FC<CategoryListProps> = ({id}) => {
    const dispatch = useAppDispatch();
    const categoryList = useAppSelector((state) => state.categorySlice.categoryList)
    const status = useAppSelector((state) => state.categorySlice.allRequestsComplete);

    useEffect(() => {
        dispatch(findSubcategoriesById(id));
    }, []);

    return (
        status ? (
            <div className={styles.mainDiv}>
                <div className={styles.categoryList}>
                    {
                        categoryList.map((item: Category) => {
                            return (
                                <div key={item.id} className={styles.categoryCard}>
                                    <img src={`/images/${item.photo}`} alt="Category Card Image"/>
                                    <div>{item.name}</div>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        ) : (
            <div>
                Loading...
            </div>
        )
    )
}
export default CategoryList;