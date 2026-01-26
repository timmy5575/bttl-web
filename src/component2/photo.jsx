import React, { useState } from "react";
import './photo.css'


import Img1 from "../assets/gallery/img1.JPG";
import Img2 from "../assets/gallery/img18.jpg";
import Img3 from "../assets/gallery/img3.JPG";
import Img4 from "../assets/gallery/img4.jpg";
import Img5 from "../assets/gallery/img5.jpg";
import Img6 from "../assets/gallery/img6.jpg";
import Img7 from "../assets/gallery/img7.jpg";
import Img8 from "../assets/gallery/img23.jpeg";
import Img9 from "../assets/gallery/img24.jpg";
import Img10 from "../assets/gallery/img25.jpg";
import Img11 from "../assets/gallery/img11.jpg";
import Img12 from "../assets/gallery/img12.jpg";
import Img13 from "../assets/gallery/img19.jpg";
import Img14 from "../assets/gallery/img14.jpg";
import Img15 from "../assets/gallery/img15.jpg";
import Img16 from "../assets/gallery/img16.jpg";
import Img17 from "../assets/gallery/img17.jpg";
import Img18 from "../assets/gallery/img2.jpg";
import Img19 from "../assets/gallery/img8.jpg";
import Img20 from "../assets/gallery/img21.jpeg";

const galleryImages = [
  Img1, Img2, Img3, Img4, Img5, Img6,
  Img7, Img8, Img9, Img10, Img11, Img12,Img13, Img14, Img15, Img16, Img17, Img18,Img20,Img19, 
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  const openLightbox = (index) => setLightbox({ isOpen: true, index });
  const closeLightbox = () => setLightbox({ isOpen: false, index: 0 });
  const nextImage = () =>
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % galleryImages.length
    }));
  const prevImage = () =>
    setLightbox((prev) => ({
      ...prev,
      index:
        (prev.index - 1 + galleryImages.length) % galleryImages.length
    }));

  return (
    <div className="gallery-section">
      <h1>My Gallery</h1>
      <div className="gallery-grid">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className="gallery-item"
            onClick={() => openLightbox(idx)}
          >
            <img src={img} alt={`Gallery ${idx + 1}`} />
          </div>
        ))}
      </div>

      {lightbox.isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close" onClick={closeLightbox}>&times;</span>
          <img
            src={galleryImages[lightbox.index]}
            alt={`Gallery ${lightbox.index + 1}`}
          />
          <button className="prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>&#10094;</button>
          <button className="next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>&#10095;</button>
        </div>
      )}
    </div>
  );
}
