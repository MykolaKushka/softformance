import Btn from './Btn';

export default function Feedback() {
  return (
    <section className='section-feedback'>
      <h2 className='h1'>Leave your feedback</h2>
      <p>
        If you had a chance to work with us, please, leave your feedback and
        we’ll happily add it to our testimonials page. Thank you!
      </p>
      <div className='section-feedback-btn'>
        <Btn class='btn btn-primary' label='leave your feedback' />
      </div>
    </section>
  );
}
