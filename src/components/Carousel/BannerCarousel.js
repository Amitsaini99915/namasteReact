import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; 

const BannerCarouel = ({bannerSection, responsive,src}) =>{
    return (
        <div className="carousel_wrapper">
          <h2 className="carousel_heading">Best offers for you</h2>
          <Carousel responsive={responsive}>
            {bannerSection.map((element) => {
              return (
                <div className="carousel_img" key={element.id}>
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