import { Box, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Text } from "@chakra-ui/react";

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 6;

  const images = [
    'https://m.media-amazon.com/images/I/61HKEoYWwsL._AC_UF1000,1000_QL80_.jpg',
    'https://wallpapers.com/images/featured/beautiful-3vau5vtfa3qn7k8v.jpg',
    'https://c4.wallpaperflare.com/wallpaper/100/702/409/shallow-focus-photography-of-red-dragonfly-wallpaper-thumb.jpg',
    'https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg',
    'https://webneel.com/wallpaper/sites/default/files/images/08-2018/2-nature-wallpaper-grass.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfUoQf0a1023gexLX5Nfwtay3o4NClwNut5QiuSj64d7_NFWOjCmum3Mq3Cp6uHV0gfnE&usqp=CAU',
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box overflow="hidden" className="backgroundImage">
      <Box style={{ width: '250vw', height: '50vh', position: 'relative', marginTop: "160px" , marginLeft:"15vw"}}>
        <Box
          style={{
            display: 'flex',
            transition: 'transform 0.5s ease',
            transform: `translateX(-${currentIndex * 34}vw)`,
          }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              style={{
                width: '25vw',
                height: '30vh',
                background: `url(${image})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                margin: '5vh 9vh',
                borderRadius: '2vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',   
              }}
              className={`${currentIndex === index  ? "animation" : ""}`}
            >
              {/* {index + 1} */}
            </Box>
          ))}
        </Box>
      </Box>

         <HStack position="absolute" bottom='56vh' left="24.5vh">
            <Box fontSize="xx-large" cursor="pointer" color="white" onClick={prevSlide}><IoIosArrowBack/></Box>
            <Text fontSize="lg" color="white">{currentIndex +1}/{totalItems}</Text>
            <Box fontSize="xx-large" cursor="pointer" color="white" onClick={nextSlide}><IoIosArrowForward/></Box>
         </HStack>
    </Box>  
  );
};

export default HomeCarousel;
