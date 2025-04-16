import { useEffect } from "react";
import "./Projects.scss";
import { useTranslation } from "react-i18next";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

function Projects() {
  const { t } = useTranslation();
  const { ref, isIntersecting } = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  useEffect(() => {
    if (isIntersecting) {
      ref.current
        ?.querySelectorAll('[class*="revealProject-"]')
        .forEach((el) => {
          el.classList.add("revealProject--visible");
        });
    }
  }, [isIntersecting, ref]);
  return (
    <>
      <section className='projects' id='projects' ref={ref}>
        <h2 id='h2Title2'>{t("translation.h2Title2")}</h2>

        <div className='card__container'>
          <article className='card__article revealProject-4'>
            <div
              onClick={() =>
                window.open(
                  "https://my-educational-app-cm.vercel.app/",
                  "_blank"
                )
              }
              className='card__button'
            >
              <img
                src={"/educApp.png"}
                alt='image du projet'
                className='card__img'
              />
              <div className='card__data'>
                <h3 className='card__title' id='cardTitle7'>
                  {t("translation.cardTitle7")}
                </h3>
                <span className='card__description' id='cardText7'>
                  {t("translation.cardText7")}
                </span>
                <a
                  href='https://my-educational-app-cm.vercel.app/'
                  target='_blank'
                >
                  {t("translation.clickHereTry")}
                </a>
                <div className='codeLanguage'>
                  <span className='language__item'>
                    <img src={"/nextjs.svg"} alt='' />
                    NextJs
                  </span>
                  <span className='language__item'>
                    <img src={"/tailwind.svg"} alt='' />
                    Tailwind
                  </span>
                  <span className='language__item'>
                    <img src={"/firebase.svg"} alt='' />
                    FireBase
                  </span>
                </div>
              </div>
            </div>
          </article>
          <article className='card__article revealProject-3'>
            <div
              onClick={() =>
                window.open("https://innovqube.com/mysaas/", "_blank")
              }
              className='card__button'
            >
              <img
                src={"/Saas.webp"}
                alt='image du projet'
                className='card__img'
              />
              <div className='card__data'>
                <h3 className='card__title' id='cardTitle6'>
                  {t("translation.cardTitle6")}
                </h3>
                <span className='card__description' id='cardText6'>
                  {t("translation.cardText6")}
                </span>
                <a href='https://innovqube.com/mysaas/' target='_blank'>
                  {t("translation.innovqube")}
                </a>
                <div className='codeLanguage'>
                  <span className='language__item'>
                    <img src={"/laravel.svg"} alt='' />
                    Laravel
                  </span>
                  <span className='language__item'>
                    <img src={"/tailwind.svg"} alt='' />
                    Tailwind css
                  </span>
                  <span className='language__item'>
                    <img src={"/php.svg"} alt='' />
                    Php
                  </span>
                </div>
              </div>
            </div>
          </article>

          <article className='card__article revealProject-2'>
            <div
              onClick={() =>
                window.open("https://github.com/CedricMrt/Kanban", "_blank")
              }
              className='card__button'
            >
              <img
                src={"/kanban.webp"}
                alt='image du projet'
                className='card__img'
              />
              <div className='card__data'>
                <h3 className='card__title' id='cardTitle0'>
                  {t("translation.cardTitle0")}
                </h3>
                <span className='card__description' id='cardText0'>
                  {t("translation.cardText0")}
                </span>
                <div className='codeLanguage'>
                  <span className='language__item'>
                    <img src={"/express.svg"} alt='' />
                    Express js
                  </span>
                  <span className='language__item'>
                    <img src={"/scss.svg"} alt='' />
                    scss
                  </span>
                  <span className='language__item'>
                    <img src={"/js.svg"} alt='' />
                    Javascript
                  </span>
                </div>
              </div>
            </div>
          </article>

          <article className='card__article revealProject-1'>
            <div
              onClick={() =>
                window.open(
                  "https://github.com/CedricMrt/Back-end-coffee-shop",
                  "_blank"
                )
              }
              className='card__button'
            >
              <img
                src={"/coffee-shop-back-end.webp"}
                alt='image du projet'
                className='card__img'
              />
              <div className='card__data'>
                <h3 className='card__title' id='cardTitle1'>
                  {t("translation.cardTitle1")}
                </h3>
                <span className='card__description' id='cardText1'>
                  {t("translation.cardText1")}
                </span>
                <div className='codeLanguage'>
                  <span className='language__item'>
                    <img src={"/express.svg"} alt='' />
                    Express js
                  </span>
                  <span className='language__item'>
                    <img src={"/css3.svg"} alt='' />
                    Css
                  </span>
                  <span className='language__item'>
                    <img src={"/js.svg"} alt='' />
                    Javascript
                  </span>
                </div>
              </div>
            </div>
          </article>
          <article className='card__article revealProject-8'>
            <div
              onClick={() =>
                window.open("https://github.com/CedricMrt/App_meteo", "_blank")
              }
              className='card__button'
            >
              <img
                src={"/wheatherApp.webp"}
                alt='image du projet'
                className='card__img'
              />
              <div className='card__data'>
                <h3 className='card__title' id='cardTitle2'>
                  {t("translation.cardTitle2")}
                </h3>
                <span className='card__description' id='cardText2'>
                  {t("translation.cardText2")}
                </span>
                <a
                  href='https://cedricmrt.github.io/App_meteo/'
                  target='_blank'
                >
                  {t("translation.clickHereTry")}
                </a>
                <div className='codeLanguage'>
                  <span className='language__item'>
                    <img src={"/html5.svg"} alt='' />
                    Html
                  </span>
                  <span className='language__item'>
                    <img src={"/css3.svg"} alt='' />
                    Css
                  </span>
                  <span className='language__item'>
                    <img src={"/js.svg"} alt='' />
                    Javascript
                  </span>
                </div>
              </div>
            </div>
          </article>
          <article className='card__article revealProject-7'>
            <div
              onClick={() =>
                window.open("https://github.com/CedricMrt/Quizz_js", "_blank")
              }
              className='card__button'
            >
              <img
                src={"/quizz.webp"}
                alt='image du projet'
                className='card__img'
              />
              <div className='card__data'>
                <h3 className='card__title' id='cardTitle3'>
                  Quizz
                </h3>
                <span className='card__description' id='cardText3'>
                  {t("translation.cardText3")}
                </span>
                <a href='https://cedricmrt.github.io/Quizz_js/' target='_blank'>
                  {t("translation.clickHereTry")}
                </a>
                <div className='codeLanguage'>
                  <span className='language__item'>
                    <img src={"/html5.svg"} alt='' />
                    Html
                  </span>
                  <span className='language__item'>
                    <img src={"/css3.svg"} alt='' />
                    Css
                  </span>
                  <span className='language__item'>
                    <img src={"/js.svg"} alt='' />
                    Javascript
                  </span>
                </div>
              </div>
            </div>
          </article>
          <article className='card__article revealProject-6'>
            <div
              onClick={() =>
                window.open(
                  "https://github.com/CedricMrt/Todolist_project",
                  "_blank"
                )
              }
              className='card__button'
            >
              <img
                src={"/todolist-project.webp"}
                alt='image du projet'
                className='card__img'
              />
              <div className='card__data'>
                <h3 className='card__title' id='cardTitle4'>
                  TodoList
                </h3>
                <span className='card__description' id='cardText4'>
                  {t("translation.cardText4")}
                </span>
                <a
                  href='https://cedricmrt.github.io/Todolist_project/'
                  target='_blank'
                >
                  {t("translation.clickHereTry")}
                </a>
                <div className='codeLanguage'>
                  <span className='language__item'>
                    <img src={"/html5.svg"} alt='' />
                    Html
                  </span>
                  <span className='language__item'>
                    <img src={"/css3.svg"} alt='' />
                    Css
                  </span>
                  <span className='language__item'>
                    <img src={"/js.svg"} alt='' />
                    Javascript
                  </span>
                </div>
              </div>
            </div>
          </article>
          <article className='card__article revealProject-5'>
            <div
              className='card__button'
              onClick={() =>
                window.open(
                  "https://github.com/CedricMrt/Car_Location_Single_Page",
                  "_blank"
                )
              }
            >
              <img
                src={"/projet-portfolio1.webp"}
                alt='image du projet'
                className='card__img'
              />
              <div className='card__data'>
                <h3 className='card__title' id='cardTitle5'>
                  {t("translation.cardTitle5")}
                </h3>
                <span className='card__description' id='cardText5'>
                  {t("translation.cardText5")}
                </span>
                <a
                  href='https://cedricmrt.github.io/Car_Location_Single_Page/'
                  target='_blank'
                >
                  {t("translation.clickHereTry")}
                </a>
                <div className='codeLanguage'>
                  <span className='language__item'>
                    <img src={"/html5.svg"} alt='' />
                    Html
                  </span>
                  <span className='language__item'>
                    <img src={"/css3.svg"} alt='' />
                    Css
                  </span>
                  <span className='language__item'>
                    <img src={"/js.svg"} alt='' />
                    Javascript
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Projects;
