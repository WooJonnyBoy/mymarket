import { memo } from "react";
import Styles from "../../Pages/Layout/Layout.module.css";
import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import { useMatchMedia } from "../../hooks/myMatcMedia";


const Container: React.FC = memo(() => {
    const { isMobile } = useMatchMedia();
    return (
        <div className={Styles.container}>
            <main className={Styles.main}>
                {!isMobile && <NavBar />}
                <div className={Styles.outlet}>
                
                    <Outlet />
                </div>
            </main>
        </div>
    );
});

export default Container;
