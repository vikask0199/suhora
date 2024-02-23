import { Box, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Text } from "@chakra-ui/react";
import "./HomeHeader.css"

const HomeCarousel = () => {
  //   const [currentIndex, setCurrentIndex] = useState(0);
  //   const totalItems = 6;

  //   const images = [
  //     'https://m.media-amazon.com/images/I/61HKEoYWwsL._AC_UF1000,1000_QL80_.jpg',
  //     'https://wallpapers.com/images/featured/beautiful-3vau5vtfa3qn7k8v.jpg',
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5xTleKB4CNB-4j68dFuh2CpygeSyfciMZYFho1Rrj-p8kVF7FOeWf-4iLoi2U_JGO6A0&usqp=CAU',
  //     'https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg',
  //     'https://webneel.com/wallpaper/sites/default/files/images/08-2018/2-nature-wallpaper-grass.jpg',
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfUoQf0a1023gexLX5Nfwtay3o4NClwNut5QiuSj64d7_NFWOjCmum3Mq3Cp6uHV0gfnE&usqp=CAU',
  //   ];

  //   const nextSlide = () => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  //   };

  //   const prevSlide = () => {
  //     setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  //   };

  //   useEffect(() => {
  //     const intervalId = setInterval(nextSlide, 300000000);

  //     return () => clearInterval(intervalId);
  //   }, []);

  //   return (
  //     <Box overflow="hidden" className="backgroundImage">
  //       <Box style={{ width: '250vw', height: '50vh', position: 'relative', marginTop: "160px" , marginLeft:"15vw"}}>
  //         <Box
  //           style={{
  //             display: 'flex',
  //             transition: 'transform 0.5s ease',
  //             transform: `translateX(-${currentIndex * 34}vw)`,
  //           }}
  //         >
  //           {images.map((image, index) => (
  //             <Box
  //               key={index}
  //               style={{
  //                 width: '25vw',
  //                 height: '30vh',
  //                 background: `url(${image})`, 
  //                 backgroundSize: 'cover',
  //                 backgroundPosition: 'center',
  //                 margin: '5vh 9vh',
  //                 borderRadius: '2vh',
  //                 display: 'flex',
  //                 justifyContent: 'center',
  //                 alignItems: 'center',   
  //               }}
  //               className={`${currentIndex === index  ? "animation" : ""}`}
  //             >
  //               {/* {index + 1} */}
  //             </Box>
  //           ))}
  //         </Box>
  //       </Box>

  //          <HStack position="absolute" bottom='56vh' left="24.5vh">
  //             <Box fontSize="xx-large" cursor="pointer" color="white" onClick={prevSlide}><IoIosArrowBack/></Box>
  //             <Text fontSize="lg" color="white">{currentIndex +1}/{totalItems}</Text>
  //             <Box fontSize="xx-large" cursor="pointer" color="white" onClick={nextSlide}><IoIosArrowForward/></Box>
  //          </HStack>
  //     </Box>  
  //   );
  // };
  const [items, setItems] = useState<HTMLElement[] | null>(null);
  const [thumbnails, setThumbnails] = useState<HTMLElement[] | null>(null);
  const [itemActive, setItemActive] = useState<number>(0);

  useEffect(() => {
    const sliderItems = document.querySelectorAll('.slider .list .item');
    const sliderThumbnails = document.querySelectorAll('.thumbnail .item');
    setItems(Array.from(sliderItems) as HTMLElement[]);
    setThumbnails(Array.from(sliderThumbnails) as HTMLElement[]);
  }, []);

  useEffect(() => {
    if (items && thumbnails) {
      const itemActiveOld = document.querySelector('.slider .list .item.active') as HTMLElement;
      const thumbnailActiveOld = document.querySelector('.thumbnail .item.active') as HTMLElement;
      itemActiveOld.classList.remove('active');
      thumbnailActiveOld.classList.remove('active');

      items[itemActive].classList.add('active');
      thumbnails[itemActive].classList.add('active');
    }
  }, [items, thumbnails, itemActive]);

  const handleNext = () => {
    if (items) {
      setItemActive((prevItemActive) => (prevItemActive + 1) % items.length);
    }
  };

  const handlePrev = () => {
    if (items) {
      setItemActive((prevItemActive) =>
        prevItemActive === 0 ? items.length - 1 : prevItemActive - 1
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [itemActive]);


  return (
    <div className="slider">
      <div className="list">
      <div className="item active">
                <img src="image/img1.png" />
                <div className="content">
                    <p>design</p>
                    <h2>Slider 01</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                    </p>
                </div>
            </div>
            <div className="item">
                <img src="image/img2.jpg" />
                <div className="content">
                    <p>design</p>
                    <h2>Slider 02</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                    </p>
                </div>
            </div>
            <div className="item">
                <img src="image/img3.jpg" />
                <div className="content">
                    <p>design</p>
                    <h2>Slider 03</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                    </p>
                </div>
            </div>
            <div className="item">
                <img src="image/img4.jpg" />
                <div className="content">
                    <p>design</p>
                    <h2>Slider 04</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                    </p>
                </div>
            </div>
            <div className="item">
                <img src="image/img5.jpg" />
                <div className="content">
                    <p>design</p>
                    <h2>Slider 05</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.
                    </p>
                </div>
            </div>
      </div>
      {/* button arrows */}
      <div className="arrows">
        <button id="prev" onClick={handlePrev}>
          {'<'}
        </button>
        <button id="next" onClick={handleNext}>
          {'>'}
        </button>
      </div>
      {/* thumbnail */}
      <div className="thumbnail">
        <div className="item active">
          <img src="image/img1.png" />
            <div className="content">
              Name Slider
            </div>
        </div>
        <div className="item">
          <img src="image/img2.jpg" />
            <div className="content">
              Name Slider
            </div>
        </div>
        <div className="item">
          <img src="image/img3.jpg" />
            <div className="content">
              Name Slider
            </div>
        </div>
        <div className="item">
          <img src="image/img4.jpg" />
            <div className="content">
              Name Slider
            </div>
        </div>
        <div className="item">
          <img src="image/img5.jpg" />
            <div className="content">
              Name Slider
            </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCarousel;
