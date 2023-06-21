import { useState } from 'react';
import miguelangel from '../media/miguelangel.jpg';
import miguelangel2x from '../media/miguelangel@2x.jpg';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      text: (
        <>
          <p>
            I have worked with a number of software developers before but none
            of them quite reached the level of professionalism, diligence and
            enthusiasm that I experienced with Vitaliy and his team. They are
            incredibly easy to work with and almost always find great
            programming solutions to our requirements.
          </p>
          <p>
            What I especially liked about the SoftFormance team is their passion
            and understanding for our project. It’s like working with friends.
            Friends that deliver on their promises. I have nothing but praise
            for the work of SoftFormance team and look forward to working with
            this agency in the future.
          </p>
        </>
      ),
      author: 'Wolfgang Männel',
      position: (
        <>
          Founder and Managing Director, <strong>Fotografen365</strong>
        </>
      ),
      backgroundImage: `image-set(url(${miguelangel}) 1x, url(${miguelangel2x}) 2x)`,
    },
    {
      text: (
        <>
          <p>
            What I especially liked about the SoftFormance team is their passion
            and understanding for our project. It’s like working with friends.
            Friends that deliver on their promises. I have nothing but praise
            for the work of SoftFormance team and look forward to working with
            this agency in the future.
          </p>
          <p>
            I have worked with a number of software developers before but none
            of them quite reached the level of professionalism, diligence and
            enthusiasm that I experienced with Vitaliy and his team. They are
            incredibly easy to work with and almost always find great
            programming solutions to our requirements.
          </p>
        </>
      ),
      author: 'Wolfgang Männel',
      position: (
        <>
          Managing Director, <strong>Fotografen</strong>
        </>
      ),
      backgroundImage: `image-set(url(${miguelangel}) 1x, url(${miguelangel2x}) 2x)`,
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <section className='section-slider'>
      {slides.map((slide, index) => (
        <div
          className={`slider-item ${index === currentSlide ? 'active' : ''}`}
          key={index}
        >
          <div className='slider-item-text'>
            {slide.text}
            <p className='slider-item-author'>
              <strong>{slide.author}</strong>
              <br />
              <span>{slide.position}</span>
            </p>
          </div>
          <div
            className='slider-item-image'
            style={{ backgroundImage: slide.backgroundImage }}
          ></div>
        </div>
      ))}
      <div className='slider-nav'>
        <button className='slider-nav-left' onClick={handlePrevSlide}></button>
        <button className='slider-nav-right' onClick={handleNextSlide}></button>
      </div>
    </section>
  );
}
