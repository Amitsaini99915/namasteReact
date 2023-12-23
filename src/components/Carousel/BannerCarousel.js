import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; 

const BannerCarouel = ({bannerSection, responsive,src}) =>{
    return (
        <div className="carousel_wrapper">
          
          <h2 className="carousel_heading text-2xl font-bold my-4 text-[#02060ceb]">Best offers for you</h2>
          <Carousel responsive={responsive}>
            {bannerSection?.map((element) => {
              return (
                <div className="carousel_img pr-4" key={element.id}>
                  <img
                    src={`${src}${element.imageId}`}
                    alt=""
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
    )
}
export default BannerCarouel;