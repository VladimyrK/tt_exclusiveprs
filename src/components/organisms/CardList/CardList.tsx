import React, { FC } from 'react'
import styled from './CardList.module.scss'
import Card from '../../molecules/Card'

const generateCardList = () => {
  const cardList = []
  for (let i = 0; i < 16; i++) {
    cardList.push({ id: i, name: `card${i}` })
  }
  return cardList
}

const cardList = generateCardList()

const CardList: FC<ICardList> = ({ className }) => (
  <ul className={`${styled.cardList} ${className}`}>
    {cardList.map(card => (
      <Card key={card.id} className={styled[card.name]} />
    ))}
  </ul>
)

interface ICardList {
  className?: string
}

CardList.defaultProps = {
  className: '',
}

export default CardList
