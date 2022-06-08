import '../scss/header.scss';
import Drawer from './DrawerComponent';
import Logo from './Logo';
import Login from './Login';
import BottomNav from './BottomNav';

export default function Header() {

  return (
    <div className='header'>
      <Drawer />
      <Logo />
      <Login />
      <BottomNav />
    </div>
  )
}