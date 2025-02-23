import { useRef } from "react";
import Slider from "react-slick";
import myImage from "./Images/Project logo.png"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";

const SliderImage = () => {
    
    let sliderRef=useRef(null)

//     let ImageSlides=[{
//         id:1,
//         url:myImage,
//         alt:"Image1",
//         title:"Image from",
//         width:'200px'
//     },
//     {
//         id:2,
//         url:"https://images.pexels.com/photos/30431968/pexels-photo-30431968/free-photo-of-stylish-woman-standing-at-urban-train-station.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         alt:"Image2",
//         title:"Image from ...",
//         width:'200px'
//     },
//     {
//         id:3,
//         url:"https://images.pexels.com/photos/30241293/pexels-photo-30241293/free-photo-of-modern-architectural-structure-in-paris.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         alt:"Image3",
//         title:"Image from ..",
//         width:'200px'
//     }
// ]
// let defaultSettings={
//     dots:true,
//     infinite:true,
//     speed:500,
//     slidesToShow:2,
//     autoplay:true,
//     autoplaySpeed:3000,
    
//     responsive:[{
//         breakpoint:1024,
//         settings:{
//             slidesToShow:2,
//             slidesToScroll:1,
//             infinite:true,
//             dots:true
//         }
//     },
//     {
//         breakpoint:768,
//         settings:{
//             slidesToShow:1,
//             slidesToScroll:1
//         }
//     }
// ]
// }

const prevArrow=({onClick})=>(
    <button className="custom-arrow prev" onClick={onClick}>
        <FaArrowRight/>
    </button>
)
const NextArrow=({onClick})=>(
    <button className="custom-arrow next" onClick={onClick} style={{backgroundColor:"#000",color:"red"}}>
        <FaArrowLeft/>
    </button>
)
let imagesArray=[
    "https://images.pexels.com/photos/30431968/pexels-photo-30431968/free-photo-of-stylish-woman-standing-at-urban-train-station.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/30241293/pexels-photo-30241293/free-photo-of-modern-architectural-structure-in-paris.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/30431968/pexels-photo-30431968/free-photo-of-stylish-woman-standing-at-urban-train-station.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/30241293/pexels-photo-30241293/free-photo-of-modern-architectural-structure-in-paris.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/30431968/pexels-photo-30431968/free-photo-of-stylish-woman-standing-at-urban-train-station.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/30241293/pexels-photo-30241293/free-photo-of-modern-architectural-structure-in-paris.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
]


// let Carousel=()=>{
    const settings = {
    dots:true,
    arrows:true,
    infinite:true,
    speed:500,
    slidesToShow:2,
    autoplay:true,
    autoplaySpeed:3000,
    slidesToScroll:1,
    nextarrow:<NextArrow/>,
    preiosArrow:<prevArrow/>,

    
    responsive:[{
        breakpoint:1024,
        settings:{
            slidesToShow:2,
        }
    },
    {
        breakpoint:768,
        settings:{
            slidesToShow:1,
        }
    }
]}
// }
    return ( <>
        <h1>This is slider component</h1>
        {/* <div>
            <Slider ref={sliderRef} {...defaultSettings}>
                {
                    ImageSlides.map(images=>(
                        <div className="mini" key={images.id}>
                            <img src={images.url} alt={images.alt} title={images.title} width={images.width}/>
                            <h1>{images.url}</h1>
                        </div>
                    ))
                }
            </Slider>
        </div> */}
        <div className="carousel-container">
            <Slider {...settings}>
                {
                    imagesArray.map((img,index)=>(
                        <div key={index} className="slide">
                                <img src={img} />
                        </div>
                    ))
                }
            </Slider>
            <button>{settings.nextarrow}</button>
        </div>
    </> );
}
 
export default SliderImage;