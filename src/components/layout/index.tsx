import { Outlet } from 'react-router-dom';
import Channel from '../server';
import * as St from './layout.module';

const Layout = () => (
  <St.Main>
    <Channel />
    <Outlet />
  </St.Main>
);

export default Layout;
