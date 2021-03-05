import { useEffect, useState } from "react";

const Header = () => {

    const getThemeFromLocalStorag = () => {

        let theTheme = "light-theme";

        if (localStorage.getItem("theme")) {

            theTheme = localStorage.getItem("theme");

        }

        return theTheme;

    }

    const [theme, setTheme] = useState(getThemeFromLocalStorag());

    const toggleTheme = () => {

        if (theme === "light-theme") {

            setTheme("dark-theme");

        } else if (theme === "dark-theme") {

            setTheme("light-theme");
        }

    }

    useEffect( () => {

        document.documentElement.className = theme;

        localStorage.setItem("theme", theme);

    }, [theme]);

    return (

        <header className="todo-header d-flex align-items-center justify-content-between">

            {/* // logo */}
            <div className="todo-logo">
                <h1 className="logo-text text-uppercase">todo</h1>
            </div>

            {/* // toggle-theme */}
            <div className="toggle-theme">
                <button className="toggle-theme-btn d-flex align-items-center justify-content-center" onClick={toggleTheme}>
                    <img src={theme === "light-theme" ? "./images/icon-moon.svg" : "./images/icon-sun.svg"} alt="the toggle theme" className="img-fluid" />
                </button>
            </div>
            
        </header>

    );

}

export default Header;