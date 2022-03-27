import React, { FC } from 'react'
import styled from './Card.module.scss'
import Logo from '../../atoms/Logo'

const Card: FC<ICard> = ({ className }) => (
  <li className={`${styled.card} ${className}`}>
    <Logo />
    <div className={styled.cardContent}>
      <p className={styled.text}>SUPER SALE</p>
      <p className={styled.title}>Summer</p>
      <p className={styled.title}>collection</p>
    </div>
  </li>
)

interface ICard {
  className?: string
}

Card.defaultProps = {
  className: '',
}

export default Card
