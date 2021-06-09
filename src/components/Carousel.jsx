import React, { Component }  from 'react';
import ImageGallery from "react-image-gallery";


export default class Carousel extends Component {
    render() {
        const images = [
            {
              original: "/images/MKD1.jpeg",
              thumbnail: "/images/MKD1.jpeg",
            },
            {
              original: "/images/MKD1.jpeg",
              thumbnail: "/images/MKD1.jpeg",
            },
            {
              original: "/images/MKD1.jpeg",
              thumbnail: "/images/MKD1.jpeg",
            },
          ];
        return (
            <div>
                <h3>Nosotros</h3>
              <ImageGallery className="images1" items={images}  />
            </div>
        )
    }
}
