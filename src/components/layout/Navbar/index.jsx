"use client"
import DesktopNavbar from "./Desktop";
import MobileNavbar from "./Mobile";
import MobileTopBar from "./Mobile/TopBar";

export default function Navbar() {
    return (
        <>
            <div className="hidden lg:block">
                <DesktopNavbar />
            </div>
            <div className="lg:hidden">
                <MobileTopBar />
                <MobileNavbar />
            </div>
        </>
    );
}
