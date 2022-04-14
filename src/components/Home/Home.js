import useEmblaCarousel from 'embla-carousel-react'
import slider1 from "./images/slider1.png"
import slider2 from "./images/slider2.jpg"
import "./style.css"

const Home = () => {
    const [emblaRef] = useEmblaCarousel()


    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <img src={slider1} alt="slider1" />
                </div>
                <div className="embla__slide">
                    <img src={slider2} alt="slider2" />
                </div>
            </div>
        </div>
    );
}

export default Home;
