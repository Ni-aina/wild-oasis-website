import SideNavigation from "@/app/_component/SideNavigation";

const Layout = ({ children }) => {
    return ( 
        <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
            <SideNavigation />
            <main>{children}</main>
        </div>
    );
}
 
export default Layout;