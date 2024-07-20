import "./Projects.scss";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  return (
    <>
      <section className='projects' id='projects'>
        <h2 id='h2Title2'>{t("translation.h2Title2")}</h2>

        <div className='card__container'>
          <article className='card__article'>
            <div
              onClick={() =>
                window.open("https://github.com/CedricMrt/Kanban", "_blank")
              }
              className='card__button'
            >
              <img
                src={"/public/kanban.webp"}
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
                    <img src={"/public/express.svg"} alt='' />
                    Express js
                  </span>
                  <span className='language__item'>
                    <img src={"/public/scss.svg"} alt='' />
                    scss
                  </span>
                  <span className='language__item'>
                    <img src={"/public/js.svg"} alt='' />
                    Javascript
                  </span>
                </div>
              </div>
            </div>
          </article>

          <article className='card__article'>
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
                src={"/public/coffee-shop-back-end.webp"}
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
                    <img src={"/public/express.svg"} alt='' />
                    Express js
                  </span>
                  <span className='language__item'>
                    <img src={"/public/css3.svg"} alt='' />
                    Css
                  </span>
                  <span className='language__item'>
                    <img src={"/public/js.svg"} alt='' />
                    Javascript
                  </span>
                </div>
              </div>
            </div>
          </article>
          <article className='card__article'>
            <div
              onClick={() =>
                window.open("https://github.com/CedricMrt/App_meteo", "_blank")
              }
              className='card__button'
            >
              <img
                src={"/public/wheatherApp.webp"}
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
                    <img src={"/public/html5.svg"} alt='' />
                    Html
                  </span>
                  <span className='language__item'>
                    <img src={"/public/css3.svg"} alt='' />
                    Css
                  </span>
                  <span className='language__item'>
                    <img src={"public/js.svg"} alt='' />
                    Javascript
                  </span>
                </div>
              </div>
            </div>
          </article>
          <article className='card__article'>
            <div
              onClick={() =>
                window.open("https://github.com/CedricMrt/Quizz_js", "_blank")
              }
              className='card__button'
            >
              <img
                src={"/public/quizz.webp"}
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
                    <img src={"/public/html5.svg"} alt='' />
                    Html
                  </span>
                  <span className='language__item'>
                    <img src={"/public/css3.svg"} alt='' />
                    Css
                  </span>
                  <span className='language__item'>
                    <img src={"/public/js.svg"} alt='' />
                    Javascript
                  </span>
                </div>
              </div>
            </div>
          </article>
          <article className='card__article'>
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
                src={"/public/todolist-project.webp"}
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
                    <img src={"/public/html5.svg"} alt='' />
                    Html
                  </span>
                  <span className='language__item'>
                    <img src={"/public/css3.svg"} alt='' />
                    Css
                  </span>
                  <span className='language__item'>
                    <img src={"/public/js.svg"} alt='' />
                    Javascript
                  </span>
                </div>
              </div>
            </div>
          </article>
          <article className='card__article'>
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
                src={"/public/projet-portfolio1.webp"}
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
                    <img src={"/public/html5.svg"} alt='' />
                    Html
                  </span>
                  <span className='language__item'>
                    <img src={"/public/css3.svg"} alt='' />
                    Css
                  </span>
                  <span className='language__item'>
                    <img src={"/public/js.svg"} alt='' />
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
