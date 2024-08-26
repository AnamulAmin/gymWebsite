import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/variants';
import Title from './Title';
import AOS from 'aos';
import Image1 from "./../../assets/img/photogalary/1.jpg";
import Image2 from "./../../assets/img/photogalary/2.jpg";
import Image3 from "./../../assets/img/photogalary/3.jpg";
import Image4 from "./../../assets/img/photogalary/4.jpg";
import Image5 from "./../../assets/img/photogalary/5.jpg";
import Image6 from "./../../assets/img/photogalary/6.jpg";
import Image7 from "./../../assets/img/photogalary/7.jpg";
import Image8 from "./../../assets/img/photogalary/8.jpg";
import Image9 from "./../../assets/img/photogalary/9.jpg";
import Image10 from "./../../assets/img/photogalary/10.jpg";

const animations = [
    'slide-down',
    'zoom-in',
    'zoom-in-up',
    'zoom-in-down',
    'zoom-out',
    'zoom-out-up',
    'zoom-out-down',
];

const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
};

const images = [
    { url: Image1, location: "Shia Masjid Branch" },
    { url: Image2, location: "Shia Masjid Branch" },
    { url: Image3, location: "Shia Masjid Branch" },
    { url: Image4, location: "Lalmatia Branch" },
    { url: Image5, location: "Lalmatia Branch" },
    { url: Image6, location: "Shia Masjid Branch" },
    { url: Image7, location: "Lalmatia Branch" },
    { url: Image8, location: "Lalmatia Branch" },
    { url: Image9, location: "Lalmatia Branch" },
    { url: Image10, location: "Shia Masjid Branch" }
];

const PhotoGallery = () => {
    useEffect(() => {
        AOS.init(); 
    }, []);

    const [currentImage, setCurrentImage] = useState(null);
    const randomAnimation = getRandomAnimation();

    const openModal = (index) => {
        setCurrentImage(index);
    };

    const closeModal = () => {
        setCurrentImage(null);
    };

    const nextImage = () => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="mt-10 pt-5 p-4 container mx-auto">
            <Title title="PHOTO GALLERY" subtitle="Watch Real Gym Pictures" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="cursor-pointer rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                    >
                        <img 
                            src={image.url}
                            alt={`Gallery Image ${index + 1}`}
                            className="rounded-lg"
                            onClick={() => openModal(index)}
                        />
                    </motion.div>
                ))}
            </div>

            {currentImage !== null && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="relative">
                        <img src={images[currentImage].url} alt={`Gallery Image ${currentImage + 1}`} className="max-h-screen max-w-full rounded-lg" />
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white bg-gray-800 bg-opacity-75 p-2 rounded-t-lg z-50">
                           <p className="text-center"> {images[currentImage].location}</p> 
                        </div>
                        <button
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-2xl bg-gray-800 rounded-full p-2"
                            onClick={prevImage}
                        >
                            &#8592;
                        </button>
                        <button
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-2xl bg-gray-800 rounded-full p-2"
                            onClick={nextImage}
                        >
                            &#8594;
                        </button>
                        <button
                            className="absolute top-2 right-2 text-white text-2xl bg-gray-800 rounded-full p-2"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PhotoGallery;
