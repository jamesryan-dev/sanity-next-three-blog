import { LayoutComp } from "./styled";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Layout = ({ children }): JSX.Element => {
  return (
    <>
      <LayoutComp className="layout">{children}</LayoutComp>
    </>
  );
};

export default Layout;
