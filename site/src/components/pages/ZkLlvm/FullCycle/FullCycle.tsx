import React from 'react'
import cx from 'classnames'

import { useViewport } from 'hooks/useViewport'

import WhiteRectangle from 'components/WhiteRectangle'
import HeadingSection from 'components/HeadingSection'
import ListItem from 'components/ListItem'
import { zkllvmPageData } from 'stubs/zkllvmPageData'

import s from './FullCycle.module.scss'
import { WebButton } from 'components/WebButton'
import LeftColumn from 'components/Columns/LeftColumn'
import RightColumn from 'components/Columns/RightColumn'

type FullCycleProps = {
  className?: string
  data: typeof zkllvmPageData.fullCycle
}

function FullCycle({ className, data }: FullCycleProps) {
  const { title, description, list, footer } = data
  const { isMobile } = useViewport()

  return (
    <div className={cx(s.root, className)}>
      <LeftColumn>
        <WhiteRectangle />
        <HeadingSection title={title} description={description} className={s.heading} />
        {!isMobile && <WhiteRectangle />}
      </LeftColumn>
      <RightColumn className={s.right}>
        {!isMobile && <WhiteRectangle />}
        <div className={s.content}>
          {list.map((el, i) => (
            <div
              className={s.list}
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={i} // eslint-disable-line
            >
              <ListItem className={s.item} key={el.title} title={el.title} description={el.description} />
            </div>
          ))}
        </div>
        <div className={s.footer}>
          <div>
            <div className={s.buttonBlock}>
              <WebButton className={s.button} href={footer.link}>
                {footer.text}
              </WebButton>
            </div>
            <WhiteRectangle />
          </div>
          <WhiteRectangle />
        </div>
      </RightColumn>
    </div>
  )
}

export default FullCycle
