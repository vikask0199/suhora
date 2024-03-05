import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import agri from "../../../assets/img/industries/agri.webp";
import defence from "../../../assets/img/industries/defense.webp";
import disaster from "../../../assets/img/industries/disaster.webp";
import energy from "../../../assets/img/industries/energy.webp";
import forest from "../../../assets/img/industries/forest.webp";
import infra from "../../../assets/img/industries/infra.webp";
import mining from "../../../assets/img/industries/mining.webp";
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
                    Adapts to your mission. Scales to your needs.
                    </div>
                    <NavLink to="/defence-and-intelligence" className="buttons">
                        <button>Learn More</button>
                    </NavLink>
                </div>
            </div>
            <div className="item">
                <img src={disaster} />
                <div className="content">
                     {/* <div className="author">VIKAS</div> */}
                    <div className="title">Disaster & Insurance</div>
                    <div className="des">Data-driven insights for disaster preparedness and insurance planning.</div>
                    <NavLink to="/disaster-and-insurance" className="buttons">
                        <button>Learn More</button>
                    </NavLink>
                </div>
            </div>
            <div className="item">
                <img src={energy} />
                <div className="content">
                     {/* <div className="author">VIKAS</div> */}
                    <div className="title">Renewable Energy</div>
                    <div className="des">Orbit to Outlet: Satellite-Driven Solar Innovation.</div>
                    <NavLink to="/renewable-energy" className="buttons">
                        <button>Learn More</button>
                    </NavLink>
                </div>
            </div>
            <div className="item">
                <img src={mining} />
                <div className="content">
                     {/* <div className="author">VIKAS</div> */}
                    <div className="title">Mining</div>
                    <div className="des">Beyond Boundaries - Satellite-driven Mining Excellence!</div>
                    <NavLink to="/mining" className="buttons">
                        <button>Learn More</button>
                    </NavLink>
                </div>
            </div>
            <div className="item">
                <img src={infra} />
                <div className="content">
                     {/* <div className="author">VIKAS</div> */}
                    <div className="title">Infrastructure</div>
                    <div className="des">Sky-Built Precision: AI-Powered Construction Monitoring.</div>
                    <NavLink to="/infrastructure" className="buttons">
                        <button>Learn More</button>
                    </NavLink>
                </div>
            </div>
            <div className="item">
                <img src={forest} />
                <div className="content">
                     {/* <div className="author">VIKAS</div> */}
                    <div className="title">Forestry</div>
                    <div className="des">From Space to Safety: Satellite Insight for Fire-Free Forests.</div>
                    <NavLink to="/forestry" className="buttons">
                        <button>Learn More</button>
                    </NavLink>
                </div>
            </div>
            <div className="item">
                <img src={agri} />
                <div className="content">
                     {/* <div className="author">VIKAS</div> */}
                    <div className="title">Agriculture</div>
                    <div className="des">Satellite data-powered harvest. Optimize yield, minimize risk.</div>
                    <NavLink to="/agriculture" className="buttons">
                        <button>Learn More</button>
                    </NavLink>
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
                    {/* <div className="description">
                        Description
                    </div> */}
                </div>
            </div>
            <div className="item">
                <img src={disaster} />
                <div className="content">
                    <div className="title">
                    Disaster & Insurance
                    </div>
                    {/* <div className="description">
                        Description
                    </div> */}
                </div>
            </div>
            <div className="item">
                <img src={energy} />
                <div className="content">
                    <div className="title">
                    Renewable Energy
                    </div>
                    {/* <div className="description">
                    Harnessing satellite data to revolutionize solar energy efficiency and reach.
                    </div> */}
                </div>
            </div>
            <div className="item">
                <img src={mining} />
                <div className="content">
                    <div className="title">
                    Mining
                    </div>
                    {/* <div className="description">
                        Description
                    </div> */}
                </div>
            </div>
            <div className="item">
                <img src={infra} />
                <div className="content">
                    <div className="title">
                    Infrastructure
                    </div>
                    {/* <div className="description">
                        Description
                    </div> */}
                </div>
            </div>
            <div className="item">
                <img src={forest} />
                <div className="content">
                    <div className="title">
                    Forestry
                    </div>
                    {/* <div className="description">
                        Description
                    </div> */}
                </div>
            </div>
            <div className="item">
                <img src={agri} />
                <div className="content">
                    <div className="title">
                    Agriculture
                    </div>
                    {/* <div className="description">
                        Description
                    </div> */}
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
