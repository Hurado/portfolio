import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import {styles} from './styles';
import { experiences } from "../../constants/json.js";
import './experience.css'


const ExperienceCard = ({experience}) => (

  <VerticalTimelineElement
    contentStyle = {{ background:'#1d1836', color: '#fff'}}
    contentArrowStyle={{
      borderRight: '7px solid #232631'
    }} 
    date={experience.date} iconStyle={{
      background:experience.iconBg
    }} icon={
      <div 
      className='experience-container'
      >
        <img src={experience.icon}  alt={experience.company_name} className="image-exp" />
      </div>
    }
    >
      <div>
        <h3 className='exp-title'>{experience.title}</h3>
        <p className='paragraph_title' style={{margin:0}}>{experience.company_name}</p>
      </div>

      <ul className='exp-points'>{experience.points.map((point,index) => (
        <li key={`experience-point-${index}`} className="point-element">
          {point}
        </li>
      ))}
      </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <p className={styles.sectionSubText}>What i have done so far?</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      <div className='section-wrapper'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience= {experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Experience