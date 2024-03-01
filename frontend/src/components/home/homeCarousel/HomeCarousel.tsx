import { useEffect } from "react";
import agri from "../../../assets/img/industries/agri.png";
import defence from "../../../assets/img/industries/defense.png";
import disaster from "../../../assets/img/industries/disaster.png";
import energy from "../../../assets/img/industries/energy.png";
import forest from "../../../assets/img/industries/forest.png";
import infra from "../../../assets/img/industries/infra.png";
import mining from "../../../assets/img/industries/mining.png";
import "./HomeHeader.css";

const HomeCarousel = () => {
  useEffect(() => {
    const nextDom = document.getElementById('next') as HTMLButtonElement;
    const prevDom = document.getElementById('prev') as HTMLButtonElement;
    const carouselDom = document.querySelector('.carousel') as HTMLElement;
    const SliderDom = carouselDom.querySelector('.carousel .list') as HTMLElement;
    const thumbnailBorderDom = document.querySelector('.carousel .thumbnail') as HTMLElement;
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    // const timeDom = document.querySelector('.carousel .time') as HTMLElement;

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    const timeRunning = 3000;
    const timeAutoNext = 7000;

    const showSlider = (type: 'next' | 'prev') => {
      const SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
      const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

      if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    };

    nextDom.onclick = () => showSlider('next');
    prevDom.onclick = () => showSlider('prev');

    let runTimeOut: NodeJS.Timeout;
    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, []);

  return (
      <div className="carousel" >
        <div className="list">
            <div className="item">
                <img src={defence} />
                <div className="content">
                     {/* <div className="author">VIKAS</div> */}
                    <div className="title">Defence & Intelligence</div>
                    <div className="des">
                   Hello please provide content for this page
                    </div>
                    <div className="buttons">
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={disaster} />
                <div className="content">
                     {/* <div className="author">VIKAS</div> */}
                    <div className="title">Disaster & Insurance</div>
                    <div className="des">Hello please provide content for this page
                    </div>
                    <div className="buttons">
                        <button>Learn More</button>
                        
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={energy} />
                <div className="content">
                     {/* <div className="author">VIKAS</div> */}
                    <div className="title">Renewable Energy</div>
                   
                    <div className="des">Hello please provide content for this page
                    </div>
                    <div className="buttons">
                        <button>Learn More</button>
                        
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={mining} />
                <div className="content">
                     {/* <div className="author">VIKAS</div> */}
                    <div className="title">Mining</div>
                   
                    <div className="des">Hello please provide content for this page
                    </div>
                    <div className="buttons">
                        <button>Learn More</button>
                        
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={infra} />
                <div className="content">
                     {/* <div className="author">VIKAS</div> */}
                    <div className="title">Infrastructure</div>
                   
                    <div className="des">Hello please provide content for this page
                    </div>
                    <div className="buttons">
                        <button>Learn More</button>
                        
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={forest} />
                <div className="content">
                     {/* <div className="author">VIKAS</div> */}
                    <div className="title">Forestry</div>
                   
                    <div className="des">Hello please provide content for this page
                    </div>
                    <div className="buttons">
                        <button>Learn More</button>
                        
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={agri} />
                <div className="content">
                     {/* <div className="author">VIKAS</div> */}
                    <div className="title">Agriculture</div>
                   
                    <div className="des">Hello please provide content for this page
                    </div>
                    <div className="buttons">
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
     
        <div className="thumbnail">     
            <div className="item">
                <img src={defence}/>
                <div className="content">
                    <div className="title">
                    Defence & Intelligence
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={disaster} />
                <div className="content">
                    <div className="title">
                    Disaster & Insurance
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={energy} />
                <div className="content">
                    <div className="title">
                    Renewable Energy
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={mining} />
                <div className="content">
                    <div className="title">
                    Mining
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={infra} />
                <div className="content">
                    <div className="title">
                    Infrastructure
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={forest} />
                <div className="content">
                    <div className="title">
                    Forestry
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={agri} />
                <div className="content">
                    <div className="title">
                    Agriculture
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
        </div>

        <div className="arrows">
            <button id="prev">{"<"}</button>
            <button id="next">{">"}</button>
        </div>
      {/* <div className="time"></div> */}
    </div>
  );
}

export default HomeCarousel;


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