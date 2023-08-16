import React from 'react'

import Container from 'components/Container'

import SideNavigation from 'components/SideNavigation'
import FooterAnimationSection from 'components/FooterAnimationSection'
import JoinSection, { getJoinSectionProps } from 'components/JoinSection'
import Intro from './Intro'
import JoinUs from './JoinUs'
import Jobs from './Jobs'

import s from './Careers.module.scss'

const Careers = ({ data }) => {
  return (
    <Container className={s.container}>
      <SideNavigation className={s.sideNavigation} title='Careers' titleAnimation={false} />
      <div className={s.root}>
        <div className={s.content}>
          <Intro data={data.intro} />
          <JoinUs data={data.joinUs} />
          <Jobs data={data.jobs} />
          <JoinSection {...getJoinSectionProps(data)} />
        </div>
      </div>
      <FooterAnimationSection className={s.footerSection} />
    </Container>
  )
}

export default Careers
