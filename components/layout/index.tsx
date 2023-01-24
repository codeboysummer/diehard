import Navbar from "../nav/Navbar";
import SideNav from "../nav/SideNav";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <>
  <Navbar/>
  <SideNav/>
  {children}
  
  
  
  </>;
};

export default Layout;
