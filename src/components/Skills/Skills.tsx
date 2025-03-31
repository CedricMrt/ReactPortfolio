import "./Skills.scss";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();
  const { ref, isIntersecting } = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.45,
  });

  useEffect(() => {
    if (isIntersecting) {
      ref.current?.querySelectorAll('[class*="reveal-"]').forEach((el) => {
        el.classList.add("reveal--visible");
      });
    }
  }, [isIntersecting, ref]);

  return (
    <>
      <section className='skills' id='skills' ref={ref}>
        <h2 id='h2Title1'>{t("translation.h2Title1")}</h2>
        <div className='skills__items'>
          <ul className='skills__list' id='skills__list'>
            <li className='skills__item'>
              <h3 className='skills__title'>Design</h3>
              <p className='reveal-1'>
                <img
                  src={"/figma.svg"}
                  alt='icon figma'
                  className='skills__icon'
                />
                Figma
              </p>
              <p></p>
            </li>
            <li className='skills__item'>
              <h3 className='skills__title'>Front-end</h3>
              <p className='reveal-1'>
                <img
                  src={"/css3.svg"}
                  alt='icon css'
                  className='skills__icon'
                />
                <img
                  src={"/scss.svg"}
                  alt='icon scss'
                  className='skills__icon'
                />
                <img
                  src={"/tailwind.svg"}
                  alt='icon scss'
                  className='skills__icon'
                />
                Css/Scss/Tailwind
              </p>
              <p className='reveal-2'>
                <img src={"/js.svg"} alt='icon js' className='skills__icon' />
                Javascript
              </p>
              <p className='reveal-3'>
                <img
                  src={"/reactts-svgrepo-com.svg"}
                  alt='icon react'
                  className='skills__icon'
                />
                React (TypeScript)
              </p>
              <p className='reveal-4'>
                <img
                  src={"/nextjs.svg"}
                  alt='icon react'
                  className='skills__icon'
                />
                NextJs
              </p>
            </li>
            <li className='skills__item'>
              <h3 className='skills__title'>Back-end</h3>
              <p className='reveal-1'>
                <img
                  src={"/nodejs.svg"}
                  alt='icon nodejs'
                  className='skills__icon'
                />
                Nodejs
              </p>
              <p className='reveal-2'>
                <img
                  src={"/express.svg"}
                  alt='icon expressjs'
                  className='skills__icon'
                />
                Expressjs
              </p>
              <p className='reveal-3'>
                <img
                  src={"/postgresql.svg"}
                  alt='icon postgresql'
                  className='skills__icon'
                />
                <img
                  src={"/mongodb.svg"}
                  alt='icon mongoDB'
                  className='skills__icon'
                />
                <img
                  src={"/mysql.svg"}
                  alt='icon mongoDB'
                  className='skills__icon'
                />
                Postgresql/MongoDB/MySQL
              </p>
              <p className='reveal-4'>
                <img src={"/php.svg"} alt='icon php' className='skills__icon' />
                PHP (Filament, Livewire)
              </p>
            </li>
            <li className='skills__item'>
              <h3 className='skills__title'>Other</h3>
              <p className='reveal-1'>
                <svg
                  className='skills__icon'
                  width='20'
                  height='20'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z'
                    fill='currentColor'
                    fillRule='evenodd'
                    clipRule='evenodd'
                  ></path>
                </svg>
                Git & Github
              </p>
              <p className='reveal-2'>
                <svg
                  className='skills__icon'
                  viewBox='0 -10 256 256'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  preserveAspectRatio='xMidYMid'
                  fill='#000000'
                >
                  <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    {" "}
                    <g>
                      {" "}
                      <path
                        d='M128.07485,236.074667 L128.07485,236.074667 L175.17885,91.1043048 L80.9708495,91.1043048 L128.07485,236.074667 L128.07485,236.074667 Z'
                        fill='#E24329'
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d='M128.07485,236.074423 L80.9708495,91.104061 L14.9557638,91.104061 L128.07485,236.074423 L128.07485,236.074423 Z'
                        fill='#FC6D26'
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d='M14.9558857,91.1044267 L14.9558857,91.1044267 L0.641828571,135.159589 C-0.663771429,139.17757 0.766171429,143.57955 4.18438095,146.06275 L128.074971,236.074789 L14.9558857,91.1044267 L14.9558857,91.1044267 Z'
                        fill='#FCA326'
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d='M14.9558857,91.1045486 L80.9709714,91.1045486 L52.6000762,3.79026286 C51.1408762,-0.703146667 44.7847619,-0.701927619 43.3255619,3.79026286 L14.9558857,91.1045486 L14.9558857,91.1045486 Z'
                        fill='#E24329'
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d='M128.07485,236.074423 L175.17885,91.104061 L241.193935,91.104061 L128.07485,236.074423 L128.07485,236.074423 Z'
                        fill='#FC6D26'
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d='M241.193935,91.1044267 L241.193935,91.1044267 L255.507992,135.159589 C256.813592,139.17757 255.38365,143.57955 251.96544,146.06275 L128.07485,236.074789 L241.193935,91.1044267 L241.193935,91.1044267 Z'
                        fill='#FCA326'
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d='M241.193935,91.1045486 L175.17885,91.1045486 L203.549745,3.79026286 C205.008945,-0.703146667 211.365059,-0.701927619 212.824259,3.79026286 L241.193935,91.1045486 L241.193935,91.1045486 Z'
                        fill='#E24329'
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                GitLab
              </p>

              <p className='reveal-3'>
                <svg
                  className='skills__icon'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='4 2 34 30'
                >
                  <path
                    className='svg-icon'
                    fill='#1A67A3'
                    d='M20.224 25.535h.004c-.001.021-.004.041-.004.061 0 1 .838 1.812 1.872 1.812 1.035 0 1.873-.812 1.873-1.812l-.003-.061h.003v-4.493h-3.745v4.493z'
                  ></path>{" "}
                  <path
                    className='svg-icon'
                    fill='#1A67A3'
                    d='M28.961 1.32h-2.496a6.24 6.24 0 0 0-6.241 6.241v7.49H9.24A6.24 6.24 0 0 0 3 21.291v4.993a6.24 6.24 0 0 0 6.24 6.239h2.497a6.241 6.241 0 0 0 6.241-6.239v-4.993c0-.083-.003-.166-.006-.249h-3.739v5.242a2.5 2.5 0 0 1-2.496 2.496H9.24a2.5 2.5 0 0 1-2.496-2.496v-4.993a2.5 2.5 0 0 1 2.496-2.496h19.722a6.242 6.242 0 0 0 6.242-6.241V7.562a6.244 6.244 0 0 0-6.243-6.242zm2.497 11.234a2.5 2.5 0 0 1-2.497 2.497h-4.993V7.562a2.5 2.5 0 0 1 2.497-2.497h2.496a2.5 2.5 0 0 1 2.497 2.497v4.992z'
                  ></path>{" "}
                </svg>
                OpenProject
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Skills;
