import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import { useAppContext } from "../../Context";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Header() {
  const { isLoad, isBurgerOpen, handleBurgerClick, setIsToggleDarkMode } =
    useAppContext();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      setIsToggleDarkMode(true);
      root.style.setProperty("--black", "#f4f4f4");
      root.style.setProperty("--white", "#252525");
      root.style.setProperty("--dark-black", "#eeeeee");
      root.style.setProperty("--light-black", "#16161613");
      root.style.setProperty("--svg-black", "#eeeeee");
    } else {
      setIsToggleDarkMode(false);
      root.style.setProperty("--black", "#252525");
      root.style.setProperty("--white", "#f4f4f4");
      root.style.setProperty("--dark-black", "#1c1c1c");
      root.style.setProperty("--light-black", "#f4f4f413");
      root.style.setProperty("--svg-black", "#292929");
    }
  }, [darkMode, setIsToggleDarkMode]);

  gsap.registerPlugin(ScrollTrigger);

  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const logoTransitionRef = useRef(null);
  const navRef = useRef(null);
  const navTransitionRef = useRef(null);
  const searchRef = useRef(null);
  const searchTransitionRef = useRef(null);

  useEffect(() => {
    if (isLoad) {
      gsap.fromTo(
        [logoRef.current, navRef.current, searchRef.current],
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 1,
          stagger: 0.15,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        [
          logoTransitionRef.current,
          navTransitionRef.current,
          searchTransitionRef.current,
        ],
        { width: "100%" },
        {
          width: "0%",
          duration: 1,
          delay: 1,
          stagger: 0.15,
          ease: "power4.out",
        }
      );
    }
  }, [
    isLoad,
    logoRef,
    logoTransitionRef,
    navRef,
    navTransitionRef,
    searchRef,
    searchTransitionRef,
    headerRef,
  ]);

  return (
    <div ref={headerRef} className={`${styles.container__header}`}>
      <div className={`${styles.main}`}>
        <NavLink ref={logoRef} to="/" className={`${styles.logo}`}>
          {/* <img src="/images/logo.webp" alt="" /> */}
          <svg
            width="145"
            height="19"
            viewBox="0 0 145 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.171875 18V1.08984H12.1016V5.02734H5.14062V7.72266H11.668V11.3789H5.14062V14.0625H12.1016V18H0.171875Z"
              fill="#F4F4F4"
            />
            <path
              d="M14.1523 18V5.0625H18.957V7.46484H19.0508C19.6836 5.71875 21.0078 4.78125 22.9648 4.78125C25.8125 4.78125 27.4062 6.58594 27.4062 9.69141V18H22.6016V10.7461C22.6016 9.44531 21.9922 8.64844 20.7852 8.64844C19.6484 8.64844 18.957 9.52734 18.957 10.7344V18H14.1523Z"
              fill="#F4F4F4"
            />
            <path
              d="M28.9297 18V15.5625L34.8242 8.625V8.53125H29.1172V5.0625H40.332V7.91016L35.1523 14.4375V14.5312H40.5898V18H28.9297Z"
              fill="#F4F4F4"
            />
            <path
              d="M48.6523 18.2812C44.4102 18.2812 41.8555 15.8438 41.8555 11.543V11.5195C41.8555 7.30078 44.5039 4.78125 48.6523 4.78125C52.8125 4.78125 55.4609 7.26562 55.4609 11.5195V11.543C55.4609 15.8555 52.8828 18.2812 48.6523 18.2812ZM48.6641 14.7188C49.8594 14.7188 50.5859 13.582 50.5859 11.543V11.5195C50.5859 9.51562 49.8242 8.34375 48.6523 8.34375C47.4688 8.34375 46.7305 9.51562 46.7305 11.5195V11.543C46.7305 13.5938 47.4453 14.7188 48.6641 14.7188Z"
              fill="#F4F4F4"
            />
            <path
              d="M64.5898 18.2695C59.9492 18.2695 56.9492 14.8359 56.9492 9.53906V9.52734C56.9492 4.21875 59.9258 0.820312 64.5898 0.820312C68.0938 0.820312 70.6836 2.97656 71.3164 6.14062L71.3398 6.25781H69.7344L69.6641 6.04688C69.0195 3.76172 67.2266 2.30859 64.5898 2.30859C60.9336 2.30859 58.5898 5.13281 58.5898 9.52734V9.53906C58.5898 13.9219 60.957 16.7812 64.5898 16.7812C67.2148 16.7812 68.9961 15.3398 69.6992 12.9375L69.7344 12.832H71.3398L71.3164 12.9492C70.6836 16.1367 68.1055 18.2695 64.5898 18.2695Z"
              fill="#F4F4F4"
            />
            <path
              d="M78.4062 18.2227C75.0781 18.2109 72.8516 15.7734 72.8516 11.9062V11.8828C72.8516 8.01562 75.0898 5.58984 78.4062 5.58984C81.7109 5.58984 83.9609 8.00391 83.9609 11.8828V11.9062C83.9609 15.7852 81.7227 18.2227 78.4062 18.2227ZM78.418 16.8398C80.7969 16.8398 82.3789 14.9883 82.3789 11.9062V11.8828C82.3789 8.80078 80.7852 6.97266 78.4062 6.97266C76.0273 6.97266 74.4453 8.8125 74.4453 11.8828V11.9062C74.4453 15 76.0156 16.8281 78.418 16.8398Z"
              fill="#F4F4F4"
            />
            <path
              d="M90.207 18.2227C87.4414 18.2227 85.6719 16.7461 85.4375 14.5898L85.4258 14.4844H86.9727L86.9961 14.5898C87.2422 15.9961 88.3789 16.9102 90.2188 16.9102C92.0586 16.9102 93.2305 16.0664 93.2305 14.7891V14.7773C93.2305 13.7227 92.6445 13.1484 91.0156 12.7617L89.1758 12.3164C86.8789 11.7656 85.7773 10.7578 85.7773 9.07031V9.05859C85.7773 7.03125 87.5703 5.58984 90.1133 5.58984C92.7148 5.58984 94.3789 7.10156 94.5781 9.19922L94.5898 9.32812H93.1016L93.0898 9.24609C92.8906 7.82812 91.8125 6.90234 90.1133 6.90234C88.4609 6.90234 87.3594 7.75781 87.3594 9V9.01172C87.3594 9.98438 88.0156 10.6055 89.6211 10.9922L91.4609 11.4258C93.8867 12.0117 94.8125 12.9609 94.8125 14.6719V14.6836C94.8125 16.7578 92.8789 18.2227 90.207 18.2227Z"
              fill="#F4F4F4"
            />
            <path
              d="M101.082 18.2227C98.3164 18.2227 96.5469 16.7461 96.3125 14.5898L96.3008 14.4844H97.8477L97.8711 14.5898C98.1172 15.9961 99.2539 16.9102 101.094 16.9102C102.934 16.9102 104.105 16.0664 104.105 14.7891V14.7773C104.105 13.7227 103.52 13.1484 101.891 12.7617L100.051 12.3164C97.7539 11.7656 96.6523 10.7578 96.6523 9.07031V9.05859C96.6523 7.03125 98.4453 5.58984 100.988 5.58984C103.59 5.58984 105.254 7.10156 105.453 9.19922L105.465 9.32812H103.977L103.965 9.24609C103.766 7.82812 102.688 6.90234 100.988 6.90234C99.3359 6.90234 98.2344 7.75781 98.2344 9V9.01172C98.2344 9.98438 98.8906 10.6055 100.496 10.9922L102.336 11.4258C104.762 12.0117 105.688 12.9609 105.688 14.6719V14.6836C105.688 16.7578 103.754 18.2227 101.082 18.2227Z"
              fill="#F4F4F4"
            />
            <path
              d="M112.719 18.2227C109.391 18.2109 107.164 15.7734 107.164 11.9062V11.8828C107.164 8.01562 109.402 5.58984 112.719 5.58984C116.023 5.58984 118.273 8.00391 118.273 11.8828V11.9062C118.273 15.7852 116.035 18.2227 112.719 18.2227ZM112.73 16.8398C115.109 16.8398 116.691 14.9883 116.691 11.9062V11.8828C116.691 8.80078 115.098 6.97266 112.719 6.97266C110.34 6.97266 108.758 8.8125 108.758 11.8828V11.9062C108.758 15 110.328 16.8281 112.73 16.8398Z"
              fill="#F4F4F4"
            />
            <path
              d="M120.336 18V5.8125H121.883V7.88672H121.93C122.539 6.57422 123.91 5.60156 125.879 5.60156C128.574 5.60156 130.168 7.33594 130.168 10.1953V18H128.621V10.4531C128.621 8.19141 127.496 6.98438 125.422 6.98438C123.301 6.98438 121.883 8.50781 121.883 10.7812V18H120.336Z"
              fill="#F4F4F4"
            />
            <path
              d="M144.664 6.9375V7.01953C144.664 10.4414 141.969 13.1367 138.547 13.1367H138.465C135.031 13.1367 132.348 10.4414 132.348 7.01953V6.9375C132.348 3.50391 135.031 0.820312 138.465 0.820312H138.547C141.969 0.820312 144.664 3.50391 144.664 6.9375ZM143.527 6.9375C143.527 4.14844 141.336 1.95703 138.547 1.95703H138.465C135.676 1.95703 133.484 4.14844 133.484 6.9375V7.01953C133.484 9.80859 135.676 12 138.465 12H138.547C141.336 12 143.527 9.80859 143.527 7.01953V6.9375ZM136.109 10.1719V3.78516H138.746C140.234 3.78516 141.113 4.53516 141.113 5.83594V5.84766C141.113 6.67969 140.609 7.38281 139.812 7.65234L141.301 10.1719H139.941L138.605 7.83984C138.57 7.85156 138.535 7.85156 138.488 7.85156H137.293V10.1719H136.109ZM137.305 6.87891H138.641C139.426 6.87891 139.906 6.48047 139.906 5.83594C139.906 5.20312 139.402 4.80469 138.617 4.80469H137.305V6.87891Z"
              fill="#F4F4F4"
            />
          </svg>

          <div
            ref={logoTransitionRef}
            className={`${styles.background__transition}`}
          ></div>
        </NavLink>
        <div ref={navRef} className={`${styles.nav}`}>
          <div
            ref={navTransitionRef}
            className={`${styles.background__transition}`}
          ></div>
          <div className={`${styles.bg__nav}`}>
            <div
              className={`${styles.bg__link} ${
                location.pathname === "/"
                  ? styles.bg__link__1__active
                  : location.pathname === "/web-works"
                  ? styles.bg__link__2__active
                  : location.pathname === "/photo" ||
                    location.pathname === "/photo/ile-maurice" ||
                    location.pathname === "/photo/alpe-dhuez" ||
                    location.pathname === "/photo/guadeloupe" ||
                    location.pathname === "/photo/by-night" ||
                    location.pathname.startsWith("/photo/ile-maurice/") ||
                    location.pathname.startsWith("/photo/alpe-dhuez/") ||
                    location.pathname.startsWith("/photo/guadeloupe/") ||
                    location.pathname.startsWith("/photo/by-night/")
                  ? styles.bg__link__3__active
                  : location.pathname === "/video" ||
                    location.pathname === "/video/ile-maurice" ||
                    location.pathname === "/video/alpe-dhuez" ||
                    location.pathname === "/video/guadeloupe" ||
                    location.pathname === "/video/by-night" ||
                    location.pathname.startsWith("/video/ile-maurice/") ||
                    location.pathname.startsWith("/video/alpe-dhuez/") ||
                    location.pathname.startsWith("/video/guadeloupe/") ||
                    location.pathname.startsWith("/video/by-night/")
                  ? styles.bg__link__4__active
                  : location.pathname === "/about-me"
                  ? styles.bg__link__5__active
                  : ""
              }`}
            ></div>
          </div>

          <NavLink
            to="/"
            className={`${styles.link} ${styles.link__1} ${
              location.pathname === "/" ? styles.activeLink : ""
            } `}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/web-works"
            className={`${styles.link} ${styles.link__2} ${
              location.pathname === "/web-works" ? styles.activeLink : ""
            }  `}
          >
            Projets Web
          </NavLink>
          <NavLink
            to="/photo"
            className={`${styles.link} ${styles.link__2} ${
              location.pathname === "/photo" ||
              location.pathname === "/photo/ile-maurice" ||
              location.pathname === "/photo/alpe-dhuez" ||
              location.pathname === "/photo/guadeloupe" ||
              location.pathname === "/photo/by-night" ||
              location.pathname.startsWith("/photo/ile-maurice/") ||
              location.pathname.startsWith("/photo/alpe-dhuez/") ||
              location.pathname.startsWith("/photo/guadeloupe/") ||
              location.pathname.startsWith("/photo/by-night/")
                ? styles.activeLink
                : ""
            }  `}
          >
            Photo
          </NavLink>
          <NavLink
            to="/video"
            className={`${styles.link} ${styles.link__2} ${
              location.pathname === "/video" ||
              location.pathname === "/video/ile-maurice" ||
              location.pathname === "/video/alpe-dhuez" ||
              location.pathname === "/video/guadeloupe" ||
              location.pathname === "/video/by-night" ||
              location.pathname.startsWith("/video/ile-maurice/") ||
              location.pathname.startsWith("/video/alpe-dhuez/") ||
              location.pathname.startsWith("/video/guadeloupe/") ||
              location.pathname.startsWith("/video/by-night/")
                ? styles.activeLink
                : ""
            }  `}
          >
            Video
          </NavLink>
          <NavLink
            to="/about-me"
            className={`${styles.link} ${styles.link__3} ${
              location.pathname === "/about-me" ? styles.activeLink : ""
            }  `}
            e
          >
            À propos
          </NavLink>
        </div>
        <div ref={searchRef} className={`${styles.reseaux}`}>
          <div
            ref={searchTransitionRef}
            className={`${styles.background__transition}`}
          ></div>
          <div
            className={`${styles.reseaux__link} ${styles.darkmode}`}
            onClick={toggleDarkMode}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM11 17.925C12.9833 17.675 14.6458 16.8042 15.9875 15.3125C17.3292 13.8208 18 12.05 18 10C18 7.95 17.3292 6.17917 15.9875 4.6875C14.6458 3.19583 12.9833 2.325 11 2.075V17.925Z"
                fill="#F4F4F4"
              />
            </svg>
          </div>

          <div className={`${styles.recherche}`}>
            <span className={`${styles.green__point}`}></span>
            Recherche Alternance | 2 ans
          </div>

          {/* <div className={`${styles.recherche}`}>
            <span className={`${styles.green__point}`}></span>
            Alternant chez{" "}
            <img
              className={`${styles.capgemini}`}
              src="/images/couverture/capgemini.png"
              alt=""
            />
          </div> */}

          <div
            className={
              isBurgerOpen
                ? `${styles.burger} ${styles.burger__active}`
                : `${styles.burger}`
            }
            onClick={handleBurgerClick}
          >
            <svg
              width="33"
              height="33"
              clipRule="evenodd"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={`${styles.burger__icon} ${styles.burger__icon__menu}`}
            >
              <path
                d="m22 15.25c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-6.5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"
                fillRule="nonzero"
              />
            </svg>
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${styles.burger__icon} ${styles.burger__icon__cross}`}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5 13.9991L29.9805 0.516214C30.3246 0.172071 30.7796 0 31.2321 0C32.1844 0 33 0.763713 33 1.7655C33 2.22043 32.8279 2.673 32.4838 3.0195L19.0009 16.5L32.4814 29.9805C32.8279 30.327 33 30.7796 33 31.2321C33 32.2386 32.1774 33 31.2321 33C30.7796 33 30.3246 32.8279 29.9805 32.4838L16.5 19.0033L3.0195 32.4838C2.67536 32.8279 2.22043 33 1.76786 33C0.822643 33 0 32.2386 0 31.2321C0 30.7796 0.172071 30.327 0.518571 29.9805L13.9991 16.5L0.516214 3.0195C0.172071 2.673 0 2.22043 0 1.7655C0 0.763713 0.815571 0 1.76786 0C2.22043 0 2.67536 0.172071 3.0195 0.516214L16.5 13.9991Z"
                fill="#202020"
              />
            </svg>
            {/* <div className={`${styles.line} ${styles.line1}`}></div>
            <div className={`${styles.line} ${styles.line2}`}></div> */}
          </div>
          <div />
        </div>{" "}
      </div>
      {location.pathname === "/photo/ile-maurice" ||
      location.pathname === "/photo/alpe-dhuez" ||
      location.pathname === "/photo/guadeloupe" ||
      location.pathname === "/photo/by-night" ? (
        <div className={`${styles.main__photo}`}>
          <div className={`${styles.nav}`}>
            <div className={`${styles.bg__nav}`}>
              <div
                className={`${styles.bg__link} ${
                  location.pathname === "/photo/ile-maurice"
                    ? styles.bg__link__1__active
                    : location.pathname === "/photo/alpe-dhuez"
                    ? styles.bg__link__2__active
                    : location.pathname === "/photo/guadeloupe"
                    ? styles.bg__link__3__active
                    : location.pathname === "/photo/by-night"
                    ? styles.bg__link__4__active
                    : ""
                } `}
              ></div>
            </div>

            <NavLink
              to="/photo/ile-maurice"
              className={`${styles.link} ${styles.link__1} ${
                location.pathname === "/photo/ile-maurice"
                  ? styles.activeLink
                  : ""
              } `}
            >
              Ile Maurice
            </NavLink>
            <NavLink
              to="/photo/alpe-dhuez"
              className={`${styles.link} ${styles.link__2} ${
                location.pathname === "/photo/alpe-dhuez"
                  ? styles.activeLink
                  : ""
              } `}
            >
              Alpe d&apos;Huez
            </NavLink>
            <NavLink
              to="/photo/guadeloupe"
              className={`${styles.link} ${styles.link__2} ${
                location.pathname === "/photo/guadeloupe"
                  ? styles.activeLink
                  : ""
              } `}
            >
              Guadeloupe
            </NavLink>
            <NavLink
              to="/photo/by-night"
              className={`${styles.link} ${styles.link__2} ${
                location.pathname === "/photo/by-night" ? styles.activeLink : ""
              }  `}
            >
              By Night
            </NavLink>
          </div>
        </div>
      ) : null}
    </div>
  );
}
