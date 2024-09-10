import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './swiper-styles.scss'
import {Navigation} from 'swiper/modules';
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {useEffect} from "react";
import {findSliderImages} from "@/app/_api/category-page/api";

type MySwiperProps = {
    id: number;
}

const MySwiper: React.FC<MySwiperProps> = ({id}) => {
    const dispatch = useAppDispatch()
    const slideBarImages: string[] = useAppSelector((state) => state.categorySlice.slideBarImages);
    const status = useAppSelector((state) => state.categorySlice.allRequestsComplete);

    useEffect(() => {
        dispatch(findSliderImages(id));
    }, [])

    return (
        status ? (
            <div className="swiper-div">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {slideBarImages.map((item: string) => {
                        return (
                            <SwiperSlide key={item}>
                                <img className='swiper-img' src={`/images/${item}`} alt="Slider img"/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        ) : (
            <div>Loading...</div>
        )
    )
}

export default MySwiper;