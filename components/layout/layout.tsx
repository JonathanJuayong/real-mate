import { Navbar } from './navbar';

export const Layout: React.FC<{}> = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
    )
  }