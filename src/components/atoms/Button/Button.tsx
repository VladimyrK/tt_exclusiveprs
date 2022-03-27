import React, { FC } from 'react'
import styled from './Button.module.scss'

const Button: FC<IButton> = ({ submit, children, className }) => (
  <button type={submit ? 'submit' : 'button'} className={`${styled.button} ${className}`}>
    {children}
  </button>
)

interface IButton {
  submit?: boolean
  children: React.ReactNode
  className?: string
}

Button.defaultProps = {
  submit: false,
  className: '',
}

export default Button
