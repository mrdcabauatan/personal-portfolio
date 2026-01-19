import CountUp from 'react-countup';
import { useMemo } from "react";
import { DownloadIcon } from 'lucide-react'
import linkedin from '../assets/home/social_icons/linkedin.png'
import github from '../assets/home/social_icons/github.png'
import facebook from '../assets/home/social_icons/facebook.png'
import instagram from '../assets/home/social_icons/instagram.png'
import homePic from '../assets/home/image/image.png'
import hi from '../assets/home/image/hi.png'
import CV from '../assets/home/cv/CV_MRDCabauatan.pdf'

const Home = ({ darkMode }) => {
  const socialIcons = [
    { icon: linkedin, alt: 'LinkedIn', link: 'https://www.linkedin.com/in/mrdcabauatan/'},
    { icon: github, alt: 'Github', link: 'https://github.com/mrdcabauatan' },
    { icon: facebook, alt: 'Facebook', link: 'https://www.facebook.com/mic.cabauatan/' },
    { icon: instagram, alt: 'Instagram', link: 'https://www.instagram.com/mrdcabauatan/' },
  ]

  const darkTheme = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    buttonSecondary: `text-white border-2 border-orange-500 hover:bg-orange-600`,
    decorativeCircle: 'bg-orange-500 opacity-10',
  }

  const lightTheme = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    buttonSecondary: `text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white`,
    decorativeCircle: 'bg-orange-400 opacity-20',
  }

  const theme = darkMode ? darkTheme : lightTheme

  const experienceYears = useMemo(() => {
    const start = new Date("2022-05-16");
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();

    const hasNotReachedAnniversary = now < new Date(now.getFullYear(), start.getMonth(), start.getDate());

    if (hasNotReachedAnniversary) years--;

    return years;
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delat="250"
        className="body-font z-10 relative min-h-screen"
      >
        <div className="container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col lg:flex-row items-center justify-between lg:mt-14 mt-14">
          {/* Left Content */}
          <div className="lg:w-3/4 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0">
            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  target="_blank"
                  data-aos-delay={`${400 + index * 100}`}
                  className="transform hover:scale-110 transition-transform duration-300"
                  onClick={() => {
                    window.open(social.link)
                  }}
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${
                      darkMode ? '' : 'filter brightness-75'
                    }`}
                  />
                </a>
              ))}
            </div>

            {/* Texts */}
            <h1
              className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Hi, I'm Michaela Cabauatan
            </h1>

            <h2
              className={`title-font text-3xl sm:text-4xl lg:text-3xl mb-4 font-bold ${theme.textPrimary}`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Software Developer
            </h2>

            <p
              className={`mb-4 sm:mb-5 leading-relaxed sm:text-xl  ${theme.textSecondary}`}
              data-aos="fade-up"
              data-aos-dela="600"
            >
              Transforming ideas into functional solutions. 
              Valued for versatility, taking on roles beyond development such as testing and documentation, and for producing high-quality, 
              maintainable code.
            </p>

            {/* Button - CV Download */}
            <div className="w-full pt-1 sm:pt-1">
              <div
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <button
                onClick={() => window.open(CV, '_blank')}
                className="w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform"
                >
                  <DownloadIcon className="w-4 h-4 sm:h-5 sm:w-5 mr-2" />
                  Download CV
                </button>
              </div>
            </div>
          </div>

          {/* Home Image */}
          <div
            className="lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative w-4/5 sm:w-3/4 lg:w-full">
              <div className="relative overflow-hidden">
                <img
                  src={homePic}
                  alt="Home Image"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <img
                src={hi}
                alt="Hi icon"
                className="absolute -top-20 sm:top-20 left-6 sm:left-20 w-14 h-14 sm:w-20 sm:h-20 object-contain animate-bounce opacity-90 z-10"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-30 left-1/2 -translate-x-1/2 w-full px-4">
          <div className="flex justify-center gap-8 sm:gap-12 lg:gap-16">
            {/* Experience */}
            <div className="text-center" data-aos="zoom-in" data-aos-delay="600">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                <CountUp start={0} end={experienceYears} duration={10} suffix="+" />
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Years Experience
              </div>
            </div>

            {/* Code commits */}
            <div className="text-center" data-aos="zoom-in" data-aos-delay="650">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                <CountUp start={0} end={10000} duration={10} suffix="+" />
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Code Commits
              </div>
            </div>

            {/* Cup of coffee */}
            <div className="text-center" data-aos="zoom-in" data-aos-delay="700">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                <CountUp start={0} end={500} duration={8} suffix="+" />
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Cups of Coffee
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
