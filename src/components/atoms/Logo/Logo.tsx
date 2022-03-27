import React, { FC } from 'react'
import styled from './Logo.module.scss'

const Logo: FC<ILogo> = ({ className }) => (
  <button type="button" className={`${styled.logo} ${className}`}>
  </button>
)

interface ILogo {
  className?: string
}

Logo.defaultProps = {
  className: '',
}

export default Logo
