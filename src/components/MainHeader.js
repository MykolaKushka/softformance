import logo from '../media/logo.svg';

export default function MainHeader() {
  return (
    <header className='main-header'>
      <a href='/'>
        <img src={logo} alt='' />
      </a>
    </header>
  );
}
