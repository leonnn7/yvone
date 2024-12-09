import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ImageSliderProps {
  images: string[];
  productName: string;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images, productName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (image: string) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="rounded-lg overflow-hidden shadow-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div 
              className="relative cursor-pointer aspect-square"
              onClick={() => openModal(image)}
            >
              <img
                src={image}
                alt={`${productName} - Bild ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="max-w-4xl max-h-[90vh] w-full relative">
            <img
              src={currentImage}
              alt={productName}
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(false);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};