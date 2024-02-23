import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 6;

  const images = [
    'https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg',
    'https://wallpapers.com/images/featured/beautiful-3vau5vtfa3qn7k8v.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5xTleKB4CNB-4j68dFuh2CpygeSyfciMZYFho1Rrj-p8kVF7FOeWf-4iLoi2U_JGO6A0&usqp=CAU',
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
    <Box overflow="hidden">
      <Box style={{ width: '250vw', height: '50vh', position: 'relative', marginTop: "30px" }}>
        <Box
          style={{
            display: 'flex',
            transition: 'transform 0.5s ease',
            transform: `translateX(-${currentIndex * 24}vw)`,
          }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              style={{
                width: '20vw',
                height: '30vh',
                background: `url(${image})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                margin: '5vh',
                borderRadius: '2vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',   
                fontSize: '3em',
              }}
              className={`${currentIndex === index - 1 ? "animation" : ""}`}
            >
              {/* {index + 1} */}
            </Box>
          ))}
        </Box>
      </Box>
      <button onClick={prevSlide} style={{ position: 'absolute', top: '50%', left: '0', zIndex: '1' }}>
        Prev
      </button>
      <button onClick={nextSlide} style={{ position: 'absolute', top: '50%', right: '0', zIndex: '1' }}>
        Next
      </button>
    </Box>
  );
};

export default HomeCarousel;
