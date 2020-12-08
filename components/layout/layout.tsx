import { Navbar } from './navbar';
import { AppSidebar } from './appSidebar';
import { useRouter } from 'next/router';

export const Layout: React.FC<{}> = ({ children }) => {
  const { pathname } = useRouter();
  const pathArr = pathname.split("/");
  const appPath = pathArr[pathArr.length - 1];
  const isInsideApp = pathname.includes("app");
  return (
    <>
      {isInsideApp ? (
        <AppSidebar pathname={appPath}>
          {children}
        </AppSidebar>
      ) : (
        <>
          <Navbar />
          {children}
        </>
      )}
    </>
    )
  }