import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; 

const BannerCarouel = ({bannerSection, responsive,src,heading}) =>{
    return (
        <div className="carousel_wrapper">
          
          <h2 className="carousel_heading text-2xl font-bold my-4 text-[#02060ceb]">{heading}</h2>
          <Carousel responsive={responsive}>
            {bannerSection?.map((element) => {
              return (
                <div className="carousel_img md:pr-4" key={element.id}>
                  <img
                  className="w-full"
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