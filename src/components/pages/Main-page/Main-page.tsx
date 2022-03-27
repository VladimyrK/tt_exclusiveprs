import React, { FC } from 'react'
import Button from '../../atoms/Button'
import CardList from '../../organisms/CardList'
import styled from './Main-page.module.scss'

const MainPage: FC = () => (
  <>
    <div className={styled.cardListWrap}>
      <CardList className={styled.cardList} />
      <Button className={styled.buttonLoadMore}>Load more</Button>
    </div>
  </>
)

export default MainPage
