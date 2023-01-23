import Navbar from "../nav/Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <>
  <Navbar/>
  
  
  {children}</>;
};

export default Layout;
