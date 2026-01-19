import { useState } from 'react'
import flutter from '../assets/skills/front-end/flutter.png'
import dart from '../assets/skills/front-end/dart.png'
import react from '../assets/skills/front-end/react.png'
import vue from '../assets/skills/front-end/vue.png'
import javaScript from '../assets/skills/front-end/javascript.png'
import typeScript from '../assets/skills/front-end/typeScript.png'
import html from '../assets/skills/front-end/html.png'
import css from '../assets/skills/front-end/css.png'
import bootstrap from '../assets/skills/front-end/bootstrap.png'
import tailwind from '../assets/skills/front-end/tailwind.png'
import node from '../assets/skills/back-end-api/node.png'
import cSharp from '../assets/skills/back-end-api/c-sharp.png'
import cPlus from '../assets/skills/back-end-api/c-plus.png'
import api from '../assets/skills/back-end-api/api.png'
import git from '../assets/skills/version-control/git.png'
import github from '../assets/skills/version-control/github.png'
import gitlab from '../assets/skills/version-control/gitlab.png'
import sourcetree from '../assets/skills/version-control/sourcetree.png'

const Skills = ({ darkMode }) => {
  const techSkills =[
    'Frontend Development Technologies',
    'Backend & API Technologies',
    'Version Control Systems',
  ]

  const allSkills = [
    {
      name: 'Flutter',
      icon: flutter, 
      level: 90,
      color: 'from-fuchsia-500 to-purple-600',
      category: 'Frontend Development Technologies',
    },
    {
      name: 'Dart',
      icon: dart, 
      level: 90,
      color: 'from-fuchsia-500 to-purple-600',
      category: 'Frontend Development Technologies',
    },
    {
      name: 'ReactJS',
      icon: react,
      level: 85,
      color: 'from-fuchsia-500 to-purple-600',
      category: 'Frontend Development Technologies',
    },
    {
      name: 'VueJS',
      icon: vue,
      level: 50,
      color: 'from-fuchsia-500 to-purple-600',
      category: 'Frontend Development Technologies',
    },
    {
      name: 'JavaScript',
      icon: javaScript,
      level: 85,
      color: 'from-fuchsia-500 to-purple-600',
      category: 'Frontend Development Technologies',
    },
    {
      name: 'TypeScript',
      icon: typeScript,
      level: 85,
      color: 'from-fuchsia-500 to-purple-600',
      category: 'Frontend Development Technologies',
    },
    {
      name: 'HTML',
      icon: html,
      level: 70,
      color: 'from-fuchsia-500 to-purple-600',
      category: 'Frontend Development Technologies',
    },
    {
      name: 'CSS',
      icon: css,
      level: 65,
      color: 'from-fuchsia-500 to-purple-600',
      category: 'Frontend Development Technologies',
    },
    {
      name: 'BootStrap',
      icon: bootstrap,
      level: 60,
      color: 'from-fuchsia-500 to-purple-600',
      category: 'Frontend Development Technologies',
    },
    {
      name: 'Tailwind CSS',
      icon: tailwind,
      level: 60,
      color: 'from-fuchsia-500 to-purple-600',
      category: 'Frontend Development Technologies',
    },
     {
      name: 'NodeJS',
      icon: node,
      level: 30,
      color: 'from-green-500 to-emerald-500',
      category: 'Backend & API Technologies',
    },
    {
      name: 'C#',
      icon: cSharp,
      level: 70,
      color: 'from-green-500 to-emerald-500',
      category: 'Backend & API Technologies',
    },
    {
      name: 'C++',
      icon: cPlus,
      level: 60,
      color: 'from-green-500 to-emerald-500',
      category: 'Backend & API Technologies',
    },
    {
      name: 'RestAPI',
      icon: api,
      level: 55,
      color: 'from-green-500 to-emerald-500',
      category: 'Backend & API Technologies',
    },
    {
      name: 'Git',
      icon: git,
      level: 85,
      color: 'from-orange-500 to-amber-500',
      category: 'Version Control Systems',
    },
    {
      name: 'GitHub',
      icon: github,
      level: 85,
      color: 'from-orange-500 to-amber-500',
      category: 'Version Control Systems',
    },
    {
      name: 'GitLab',
      icon: gitlab,
      level: 80,
      color: 'from-orange-500 to-amber-500',
      category: 'Version Control Systems',
    },
    {
      name: 'SourceTree',
      icon: sourcetree,
      level: 80,
      color: 'from-orange-500 to-amber-500',
      category: 'Version Control Systems',
    },
  ]

  const [activeSet, setActiveSet] = useState(techSkills[0])

  return (
    <section
      id="skills"
      className="min-h-[93vh] py-24 relative overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-8" data-aos="fade-up">
            <h1
              className="sm:text-4xl text-3xl font-bold title-font mb-4"
              style={{ color: darkMode ? 'white' : '#1f2937' }}
            >
              Technical{' '}
              <span
                style={{
                  background:
                    'linear-gradient(to right, #f97316, #f59e0b)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Skills
              </span>
            </h1>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {techSkills.map((set) => (
              <button
                key={set}
                onClick={() => setActiveSet(set)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300
                  ${
                    activeSet === set
                      ? 'bg-orange-500 text-white shadow-lg'
                      : darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }
                `}
                >
                {set}
              </button>
            ))}
          </div>

          <div
            className="flex flex-wrap -m-4"
            data-aos="fade-up"
            data-aos-delay="200"
            >
              {allSkills
              .filter((skill) => skill.category === activeSet)
              .map((skill, index) => (
                <div
                  key={index}
                  className="p-4 lg:w-1/4 md:w-1/2 w-full"
                  data-aos="fade-up"
                  data-aos-delay={`${300 + index * 100}`}
                >
                  <div
                    style={{
                      background: darkMode
                        ? 'linear-gradient(to bottom right, #1f2937, #111827)'
                        : 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
                      borderColor: darkMode ? '#374151' : '#e5e7eb',
                    }}
                    className="h-full p-6 rounded-2xl border hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 group hover:shadow-[0_0_30px_rgb(255,165,0,0.15)]"
                  >
                    <div className="flex items-center mb-6">
                      <div
                        style={{
                          background: darkMode
                            ? 'linear-gradient(to bottom right, #374151, #1f2937)'
                            : 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)',
                        }}
                        className="w-16 h-16 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <h3
                        className="text-xl font-bold ml-4"
                        style={{ color: darkMode ? 'white' : '#1f2937' }}
                      >
                        {skill.name}
                      </h3>
                    </div>

                    <div className="mb-2 flex justify-between items-center">
                      <span
                        className="font-medium"
                        style={{
                          color: darkMode ? '#d1d5db' : '#6b7280',
                        }}
                      >
                        Proficiency
                      </span>

                      <span
                        className="font-bold"
                        style={{
                          background:
                            'linear-gradient(to right, #f97316, #f59e0b)',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          color: 'transparent',
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    <div
                      className="w-full rounded-full h-3 overflow-hidden"
                      style={{
                        backgroundColor: darkMode ? '#374151' : '#e5e7eb',
                      }}
                    >
                      <div
                        className={`h-full rounded-full bg-linear-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
