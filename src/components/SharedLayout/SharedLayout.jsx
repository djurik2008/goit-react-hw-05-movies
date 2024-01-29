import MainMenu from 'components/MainMenu/MainMenu';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <MainMenu />
      <Outlet />
    </>
  );
};

export default SharedLayout;
