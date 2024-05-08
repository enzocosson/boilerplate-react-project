import styles from "./ProjetWeb.module.scss";
import { Link } from "react-router-dom";
import { useAppContext } from "../../Context";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjetWeb = () => {
  const { isLoad } = useAppContext();

  gsap.registerPlugin(ScrollTrigger);

  const titleRef = useRef(null);

  const project1 = useRef(null);
  const hr1 = useRef(null);
  const backgroundImgRef1 = useRef(null);
  const projectTechnoRef1 = useRef(null);
  const projectTitleRef1 = useRef(null);
  const projectDescrRef1 = useRef(null);
  const project1TechnoNameRefs = useRef({
    ref1: useRef(null),
    ref2: useRef(null),
    ref3: useRef(null),
    ref4: useRef(null),
    ref5: useRef(null),
  });

  const project2 = useRef(null);
  const hr2 = useRef(null);
  const backgroundImgRef2 = useRef(null);
  const projectTechnoRef2 = useRef(null);
  const projectTitleRef2 = useRef(null);
  const projectDescrRef2 = useRef(null);
  const project2TechnoNameRefs = useRef({
    ref1: useRef(null),
    ref2: useRef(null),
    ref3: useRef(null),
    ref4: useRef(null),
    ref5: useRef(null),
  });

  const project3 = useRef(null);
  const hr3 = useRef(null);
  const backgroundImgRef3 = useRef(null);
  const projectTechnoRef3 = useRef(null);
  const projectTitleRef3 = useRef(null);
  const projectDescrRef3 = useRef(null);
  const project3TechnoNameRefs = useRef({
    ref1: useRef(null),
    ref2: useRef(null),
    ref3: useRef(null),
    ref4: useRef(null),
    ref5: useRef(null),
  });

  const project4 = useRef(null);
  const hr4 = useRef(null);
  const backgroundImgRef4 = useRef(null);
  const projectTechnoRef4 = useRef(null);
  const projectTitleRef4 = useRef(null);
  const projectDescrRef4 = useRef(null);
  const project4TechnoNameRefs = useRef({
    ref1: useRef(null),
    ref2: useRef(null),
    ref3: useRef(null),
    ref4: useRef(null),
    ref5: useRef(null),
  });

  const project5 = useRef(null);
  const hr5 = useRef(null);
  const backgroundImgRef5 = useRef(null);
  const projectTechnoRef5 = useRef(null);
  const projectTitleRef5 = useRef(null);
  const projectDescrRef5 = useRef(null);
  const project5TechnoNameRefs = useRef({
    ref1: useRef(null),
    ref2: useRef(null),
    ref3: useRef(null),
    ref4: useRef(null),
    ref5: useRef(null),
  });

  const project6 = useRef(null);
  const hr6 = useRef(null);
  const backgroundImgRef6 = useRef(null);
  const projectTechnoRef6 = useRef(null);
  const projectTitleRef6 = useRef(null);
  const projectDescrRef6 = useRef(null);
  const project6TechnoNameRefs = useRef({
    ref1: useRef(null),
    ref2: useRef(null),
    ref3: useRef(null),
    ref4: useRef(null),
    ref5: useRef(null),
  });

  const containerButtonRef = useRef(null);
  const buttonProject1 = useRef(null);
  const buttonProject2 = useRef(null);

  useEffect(() => {
    if (isLoad) {
      gsap.fromTo(
        [titleRef.current],
        { opacity: 0, scale: 0.9, left: -100 },
        {
          left: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.3,
          ease: "power4.out",

          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      // -----------------------------  project 1

      gsap.fromTo(
        [hr1.current],
        { width: 0 },
        {
          width: "100%",
          duration: 0.3,
          stagger: 0.3,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project1.current,
            start: "top 85%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      gsap.fromTo(
        [backgroundImgRef1.current],
        { width: "100%" },
        {
          width: "0%",
          duration: 0.3,
          stagger: 0.3,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project1.current,
            start: "top 85%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      gsap.fromTo(
        [
          projectTechnoRef1.current,
          projectTitleRef1.current,
          projectDescrRef1.current,
        ],
        { top: 40, opacity: 0 },
        {
          top: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.3,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project1.current,
            start: "top 85%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      gsap.fromTo(
        Object.values(project1TechnoNameRefs.current).map((ref) => ref.current),
        { left: 40, opacity: 0 },
        {
          left: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project1.current,
            start: "top 85%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      // -----------------------------  project 2

      gsap.fromTo(
        [hr2.current],
        { width: 0 },
        {
          width: "100%",
          duration: 0.3,
          stagger: 0.3,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project2.current,
            start: "top 85%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      gsap.fromTo(
        [backgroundImgRef2.current],
        { width: "100%" },
        {
          width: "0%",
          duration: 0.3,
          stagger: 0.3,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project2.current,
            start: "top 85%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      gsap.fromTo(
        [
          projectTechnoRef2.current,
          projectTitleRef2.current,
          projectDescrRef2.current,
        ],
        { top: 40, opacity: 0 },
        {
          top: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.3,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project2.current,
            start: "top 90%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      gsap.fromTo(
        Object.values(project2TechnoNameRefs.current).map((ref) => ref.current),
        { left: 40, opacity: 0 },
        {
          left: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project2.current,
            start: "top 85%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      // -----------------------------  project 3

      gsap.fromTo(
        [hr3.current],
        { width: 0 },
        {
          width: "100%",
          duration: 0.3,
          stagger: 0.3,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project3.current,
            start: "top 90%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      gsap.fromTo(
        [backgroundImgRef3.current],
        { width: "100%" },
        {
          width: "0%",
          duration: 0.3,
          stagger: 0.3,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project3.current,
            start: "top 90%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      gsap.fromTo(
        [
          projectTechnoRef3.current,
          projectTitleRef3.current,
          projectDescrRef3.current,
        ],
        { top: 40, opacity: 0 },
        {
          top: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.3,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project3.current,
            start: "top 90%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      gsap.fromTo(
        Object.values(project3TechnoNameRefs.current).map((ref) => ref.current),
        { left: 40, opacity: 0 },
        {
          left: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project3.current,
            start: "top 85%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      // -----------------------------  project 4

      gsap.fromTo(
        [hr4.current],
        { width: 0 },
        {
          width: "100%",
          duration: 0.3,
          stagger: 0.3,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project4.current,
            start: "top 90%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      gsap.fromTo(
        [backgroundImgRef4.current],
        { width: "100%" },
        {
          width: "0%",
          duration: 0.3,
          stagger: 0.3,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project4.current,
            start: "top 90%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      gsap.fromTo(
        [
          projectTechnoRef4.current,
          projectTitleRef4.current,
          projectDescrRef4.current,
        ],
        { top: 40, opacity: 0 },
        {
          top: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.3,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project4.current,
            start: "top 90%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      gsap.fromTo(
        Object.values(project4TechnoNameRefs.current).map((ref) => ref.current),
        { left: 40, opacity: 0 },
        {
          left: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project4.current,
            start: "top 85%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      // -----------------------------  project 5

      gsap.fromTo(
        [hr5.current],
        { width: 0 },
        {
          width: "100%",
          duration: 0.3,
          stagger: 0.3,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project5.current,
            start: "top 90%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      gsap.fromTo(
        [backgroundImgRef5.current],
        { width: "100%" },
        {
          width: "0%",
          duration: 0.3,
          stagger: 0.3,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project5.current,
            start: "top 90%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      gsap.fromTo(
        [
          projectTechnoRef5.current,
          projectTitleRef5.current,
          projectDescrRef5.current,
        ],
        { top: 40, opacity: 0 },
        {
          top: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.3,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project5.current,
            start: "top 90%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      gsap.fromTo(
        Object.values(project5TechnoNameRefs.current).map((ref) => ref.current),
        { left: 40, opacity: 0 },
        {
          left: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project5.current,
            start: "top 85%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      // -----------------------------  project 6

      gsap.fromTo(
        [hr6.current],
        { width: 0 },
        {
          width: "100%",
          duration: 0.3,
          stagger: 0.3,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project6.current,
            start: "top 90%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      gsap.fromTo(
        [backgroundImgRef6.current],
        { width: "100%" },
        {
          width: "0%",
          duration: 0.3,
          stagger: 0.3,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project6.current,
            start: "top 90%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      gsap.fromTo(
        [
          projectTechnoRef6.current,
          projectTitleRef6.current,
          projectDescrRef6.current,
        ],
        { top: 40, opacity: 0 },
        {
          top: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.3,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project6.current,
            start: "top 90%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      gsap.fromTo(
        Object.values(project6TechnoNameRefs.current).map((ref) => ref.current),
        { left: 40, opacity: 0 },
        {
          left: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "power4.out",

          scrollTrigger: {
            trigger: project6.current,
            start: "top 85%",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );

      // -----------------------------  Buttons

      gsap.fromTo(
        [buttonProject1.current, buttonProject2.current],
        { scale: 0.3, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "power4.out",

          scrollTrigger: {
            trigger: containerButtonRef.current,
            start: "top 90%",
            end: "bottom 30%",
            scrub: 1,
            toggleActions: "play reset play reset",
          },
        }
      );
    }
  }, [isLoad]);

  return (
    <div className={`${styles.main}`}>
      <h2 ref={titleRef}>
        Projets <span>Web</span>
      </h2>

      <div className={`${styles.container__projects}`}>
        {/* ------------  separation projects -------------*/}
        <div ref={project1} className={`${styles.project}`}>
          <hr ref={hr1} className={`${styles.hr}`} />
          <div className={styles.right__side}>
            <div className={styles.container__img}>
              <span
                ref={backgroundImgRef1}
                className={styles.background__transition}
              ></span>
              <img src="/images/creations/cottages.webp" alt="cottages" />
            </div>
            <div className={styles.container__txt}>
              <small ref={projectTechnoRef1}>
                <span>Front End</span>- 2024
              </small>
              <h3 ref={projectTitleRef1}>Les Cottages du Belvédère</h3>
              <p ref={projectDescrRef1}>
                Je suis un développeur fullstack passionné par le code et un
                photographe captivant les moments à travers mon objectif. Je
                suis un développeur fullstack passionné par le code et un
                photographe captivant les moments à travers mon objectif.
              </p>

              <div className={styles.container__techno}>
                <span
                  ref={project1TechnoNameRefs.current.ref1}
                  className={`${styles.techno} ${styles.react}`}
                >
                  React Js
                </span>
                <span
                  ref={project1TechnoNameRefs.current.ref2}
                  className={`${styles.techno} ${styles.threejs}`}
                >
                  Three Js
                </span>
                <span
                  ref={project1TechnoNameRefs.current.ref3}
                  className={`${styles.techno} ${styles.sass}`}
                >
                  Sass
                </span>
                <span
                  ref={project1TechnoNameRefs.current.ref4}
                  className={`${styles.techno} ${styles.blender}`}
                >
                  Blender
                </span>
                <span
                  ref={project1TechnoNameRefs.current.ref5}
                  className={`${styles.techno} ${styles.gsap}`}
                >
                  gsap
                </span>
              </div>
            </div>
          </div>
          <Link
            className={styles.button}
            to="https://cottages-belvedere.vercel.app/"
            target="_blank"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.11538 15.5L0.5 13.8846L11.5769 2.80769H1.65385V0.5H15.5V14.3462H13.1923V4.42308L2.11538 15.5Z"
                fill="#F4F4F4"
              />
            </svg>
          </Link>
        </div>
        {/* ------------  separation projects -------------*/}
        <div ref={project2} className={`${styles.project}`}>
          <hr ref={hr2} className={`${styles.hr}`} />

          <div className={styles.right__side}>
            <div className={styles.container__img}>
              <span
                ref={backgroundImgRef2}
                className={styles.background__transition}
              ></span>

              <img src="/images/creations/typster.webp" alt="typster" />
            </div>
            <div className={styles.container__txt}>
              <small ref={projectTechnoRef2}>
                <span>Front End</span>- 2023
              </small>
              <h3 ref={projectTitleRef2}>Typster</h3>
              <p ref={projectDescrRef2}>
                Je suis un développeur fullstack passionné par le code et un
                photographe captivant les moments à travers mon objectif. Je
                suis un développeur fullstack passionné par le code et un
                photographe captivant les moments à travers mon objectif.
              </p>
              <div className={styles.container__techno}>
                <span
                  ref={project2TechnoNameRefs.current.ref1}
                  className={`${styles.techno} ${styles.react}`}
                >
                  React Js
                </span>
                <span
                  ref={project2TechnoNameRefs.current.ref2}
                  className={`${styles.techno} ${styles.threejs}`}
                >
                  Three Js
                </span>
                <span
                  ref={project2TechnoNameRefs.current.ref3}
                  className={`${styles.techno} ${styles.sass}`}
                >
                  Sass
                </span>
                <span
                  ref={project2TechnoNameRefs.current.ref4}
                  className={`${styles.techno} ${styles.blender}`}
                >
                  Blender
                </span>
                <span
                  ref={project2TechnoNameRefs.current.ref5}
                  className={`${styles.techno} ${styles.gsap}`}
                >
                  gsap
                </span>
              </div>
            </div>
          </div>
          <Link
            className={styles.button}
            to="https://www.typster.fr/"
            target="_blank"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.11538 15.5L0.5 13.8846L11.5769 2.80769H1.65385V0.5H15.5V14.3462H13.1923V4.42308L2.11538 15.5Z"
                fill="#F4F4F4"
              />
            </svg>
          </Link>
        </div>{" "}
        {/* ------------  separation projects -------------*/}
        <div ref={project3} className={`${styles.project}`}>
          <hr ref={hr3} className={`${styles.hr}`} />

          <div className={styles.right__side}>
            <div className={styles.container__img}>
              <span
                ref={backgroundImgRef3}
                className={styles.background__transition}
              ></span>

              <img src="/images/creations/ferrari.webp" alt="ferrari" />
            </div>
            <div className={styles.container__txt}>
              <small ref={projectTechnoRef3}>
                <span>Front End</span>- 2024
              </small>
              <h3 ref={projectTitleRef3}>Ferrari</h3>
              <p ref={projectDescrRef3}>
                Je suis un développeur fullstack passionné par le code et un
                photographe captivant les moments à travers mon objectif. Je
                suis un développeur fullstack passionné par le code et un
                photographe captivant les moments à travers mon objectif.
              </p>
              <div className={styles.container__techno}>
                <span
                  ref={project3TechnoNameRefs.current.ref1}
                  className={`${styles.techno} ${styles.react}`}
                >
                  React Js
                </span>
                <span
                  ref={project3TechnoNameRefs.current.ref2}
                  className={`${styles.techno} ${styles.threejs}`}
                >
                  Three Js
                </span>
                <span
                  ref={project3TechnoNameRefs.current.ref3}
                  className={`${styles.techno} ${styles.sass}`}
                >
                  Sass
                </span>
                <span
                  ref={project3TechnoNameRefs.current.ref4}
                  className={`${styles.techno} ${styles.blender}`}
                >
                  Blender
                </span>
                <span
                  ref={project3TechnoNameRefs.current.ref5}
                  className={`${styles.techno} ${styles.gsap}`}
                >
                  gsap
                </span>
              </div>
            </div>
          </div>
          <Link
            className={styles.button}
            to="https://ferrari-daytona-sp3-chi.vercel.app/"
            target="_blank"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.11538 15.5L0.5 13.8846L11.5769 2.80769H1.65385V0.5H15.5V14.3462H13.1923V4.42308L2.11538 15.5Z"
                fill="#F4F4F4"
              />
            </svg>
          </Link>
        </div>{" "}
        {/* ------------  separation projects -------------*/}
        <div ref={project4} className={`${styles.project}`}>
          <hr ref={hr4} className={`${styles.hr}`} />

          <div className={styles.right__side}>
            <div className={styles.container__img}>
              <span
                ref={backgroundImgRef4}
                className={styles.background__transition}
              ></span>

              <img src="/images/creations/flexbank.webp" alt="flexbank" />
            </div>
            <div className={styles.container__txt}>
              <small ref={projectTechnoRef4}>
                <span>Front End</span>- 2024
              </small>
              <h3 ref={projectTitleRef4}>Flexbank</h3>
              <p ref={projectDescrRef4}>
                Je suis un développeur fullstack passionné par le code et un
                photographe captivant les moments à travers mon objectif. Je
                suis un développeur fullstack passionné par le code et un
                photographe captivant les moments à travers mon objectif.
              </p>
              <div className={styles.container__techno}>
                <span
                  ref={project4TechnoNameRefs.current.ref1}
                  className={`${styles.techno} ${styles.react}`}
                >
                  React Js
                </span>
                <span
                  ref={project4TechnoNameRefs.current.ref2}
                  className={`${styles.techno} ${styles.threejs}`}
                >
                  Three Js
                </span>
                <span
                  ref={project4TechnoNameRefs.current.ref3}
                  className={`${styles.techno} ${styles.sass}`}
                >
                  Sass
                </span>
                <span
                  ref={project4TechnoNameRefs.current.ref4}
                  className={`${styles.techno} ${styles.blender}`}
                >
                  Blender
                </span>
                <span
                  ref={project4TechnoNameRefs.current.ref5}
                  className={`${styles.techno} ${styles.gsap}`}
                >
                  gsap
                </span>
              </div>
            </div>
          </div>
          <Link
            className={styles.button}
            to="https://flexbank.vercel.app/"
            target="_blank"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.11538 15.5L0.5 13.8846L11.5769 2.80769H1.65385V0.5H15.5V14.3462H13.1923V4.42308L2.11538 15.5Z"
                fill="#F4F4F4"
              />
            </svg>
          </Link>
        </div>{" "}
        {/* ------------  separation projects -------------*/}
        <div ref={project5} className={`${styles.project}`}>
          <hr ref={hr5} className={`${styles.hr}`} />

          <div className={styles.right__side}>
            <div className={styles.container__img}>
              <span
                ref={backgroundImgRef5}
                className={styles.background__transition}
              ></span>

              <img src="/images/creations/netflix.webp" alt="netflix" />
            </div>
            <div className={styles.container__txt}>
              <small ref={projectTechnoRef5}>
                <span>Front End</span>- 2024
              </small>
              <h3 ref={projectTitleRef5}>Netflix</h3>
              <p ref={projectDescrRef5}>
                Je suis un développeur fullstack passionné par le code et un
                photographe captivant les moments à travers mon objectif. Je
                suis un développeur fullstack passionné par le code et un
                photographe captivant les moments à travers mon objectif.
              </p>
              <div className={styles.container__techno}>
                <span
                  ref={project5TechnoNameRefs.current.ref1}
                  className={`${styles.techno} ${styles.react}`}
                >
                  React Js
                </span>
                <span
                  ref={project5TechnoNameRefs.current.ref2}
                  className={`${styles.techno} ${styles.threejs}`}
                >
                  Three Js
                </span>
                <span
                  ref={project5TechnoNameRefs.current.ref3}
                  className={`${styles.techno} ${styles.sass}`}
                >
                  Sass
                </span>
                <span
                  ref={project5TechnoNameRefs.current.ref4}
                  className={`${styles.techno} ${styles.blender}`}
                >
                  Blender
                </span>
                <span
                  ref={project5TechnoNameRefs.current.ref5}
                  className={`${styles.techno} ${styles.gsap}`}
                >
                  gsap
                </span>
              </div>
            </div>
          </div>
          <Link
            className={styles.button}
            to="https://mmi21e03.mmi-troyes.fr/vue-js/"
            target="_blank"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.11538 15.5L0.5 13.8846L11.5769 2.80769H1.65385V0.5H15.5V14.3462H13.1923V4.42308L2.11538 15.5Z"
                fill="#F4F4F4"
              />
            </svg>
          </Link>
        </div>{" "}
        {/* ------------  separation projects -------------*/}
        <div ref={project6} className={`${styles.project}`}>
          <hr ref={hr6} className={`${styles.hr}`} />

          <div className={styles.right__side}>
            <div className={styles.container__img}>
              <span
                ref={backgroundImgRef6}
                className={styles.background__transition}
              ></span>

              <img src="/images/creations/rick-morty.webp" alt="rick-morty" />
            </div>
            <div className={styles.container__txt}>
              <small ref={projectTechnoRef6}>
                <span>Back End</span>- 2023
              </small>
              <h3 ref={projectTitleRef6}>Rick & Morty</h3>
              <p ref={projectDescrRef6}>
                Je suis un développeur fullstack passionné par le code et un
                photographe captivant les moments à travers mon objectif. Je
                suis un développeur fullstack passionné par le code et un
                photographe captivant les moments à travers mon objectif.
              </p>
              <div className={styles.container__techno}>
                <span
                  ref={project6TechnoNameRefs.current.ref1}
                  className={`${styles.techno} ${styles.react}`}
                >
                  React Js
                </span>
                <span
                  ref={project6TechnoNameRefs.current.ref2}
                  className={`${styles.techno} ${styles.threejs}`}
                >
                  Three Js
                </span>
                <span
                  ref={project6TechnoNameRefs.current.ref3}
                  className={`${styles.techno} ${styles.sass}`}
                >
                  Sass
                </span>
                <span
                  ref={project6TechnoNameRefs.current.ref4}
                  className={`${styles.techno} ${styles.blender}`}
                >
                  Blender
                </span>
                <span
                  ref={project6TechnoNameRefs.current.ref5}
                  className={`${styles.techno} ${styles.gsap}`}
                >
                  gsap
                </span>
              </div>
            </div>
          </div>
          <Link
            className={styles.button}
            to="https://tp-note-vuejs.vercel.app/"
            target="_blank"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.11538 15.5L0.5 13.8846L11.5769 2.80769H1.65385V0.5H15.5V14.3462H13.1923V4.42308L2.11538 15.5Z"
                fill="#F4F4F4"
              />
            </svg>
          </Link>
        </div>{" "}
      </div>
      <div
        ref={containerButtonRef}
        className={`${styles.container__button__all}`}
      >
        <Link
          ref={buttonProject1}
          className={styles.button__projects}
          to="/web-works"
        >
          Voir tous les projets
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.11538 15.5L0.5 13.8846L11.5769 2.80769H1.65385V0.5H15.5V14.3462H13.1923V4.42308L2.11538 15.5Z"
              fill="#F4F4F4"
            />
          </svg>
        </Link>
        <Link
          ref={buttonProject2}
          className={styles.button__github}
          to="https://github.com/enzocosson"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjetWeb;
