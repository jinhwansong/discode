import { Outlet, useLocation } from 'react-router-dom';
import Channel from '../server';
import * as St from './layout.module';

const Layout = () => {
  const location = useLocation();
  const loc = location.pathname === '/register' || location.pathname === '/';
  return (
    <St.Main>
      {!loc && <Channel />}
      <Outlet />
    </St.Main>
  );
};

export default Layout;
