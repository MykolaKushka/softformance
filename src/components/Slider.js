import miguelangel from '../media/miguelangel.jpg';
import miguelangel2x from '../media/miguelangel@2x.jpg';

export default function Slider() {
  const imageStyles = {
    backgroundImage: `image-set(url(${miguelangel}) 1x, url(${miguelangel2x}) 2x)`,
  };

  return (
    <section className='section-slider'>
      <div className='slider-item'>
        <div className='slider-item-text'>
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
          <p className='slider-item-author'>
            <strong>Wolfgang Männel</strong>
            <br />
            <span>
              Founder and Managing Director, <strong>Fotografen365</strong>
            </span>
          </p>
        </div>
        <div className='slider-item-image' style={imageStyles}></div>
      </div>
      <div className='slider-nav'>
        <button className='slider-nav-left'></button>
        <button className='slider-nav-right'></button>
      </div>
    </section>
  );
}
