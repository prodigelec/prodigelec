"use client"
import DesktopNavbar from "./Desktop";
import MobileNavbar from "./Mobile";
import MobileTopBar from "./Mobile/TopBar";

export default function Navbar() {
    return (
        <>
            <div className="hidden md:block">
                <DesktopNavbar />
            </div>
            <div className="md:hidden">
                <MobileTopBar />
                <MobileNavbar />
            </div>
        </>
    );
}
