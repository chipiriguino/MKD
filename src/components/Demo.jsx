import React, { Component } from 'react'
import ImageGallery from "react-image-gallery";
export default class Demo extends Component {
    render() {
        const images = [
            {
              original: "/images/logo.png",
              thumbnail: "/images/logo.png",
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
                <section className="et-slide et-slide-galeria" id="tab-other">
            <div>
              <ImageGallery className="carousel" items={images}  />
            </div>
          </section>
            </div>
        )
    }
}
