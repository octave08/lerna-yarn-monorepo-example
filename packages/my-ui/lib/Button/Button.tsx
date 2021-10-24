import React from 'react'

interface Props {
  onClick: () => void
  children: React.ReactNode
}

const Button: React.FC<Props> = ({ onClick, children }: Props) => {
  return <button onClick={onClick}>{children}</button>
}

export default Button
