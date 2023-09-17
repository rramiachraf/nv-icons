import React from 'react'
import type { FC } from 'react'
import type { IconProps } from '../index'

export const Send: FC<IconProps> = ({
  color = '#282828',
  width = 32,
  height = 32
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.599 8.87638L1.3981 16.0434L4.26492 8.87638M18.599 8.87638H4.26492M18.599 8.87638L9.99857 5.29285M4.26492 8.87638L1.3981 1.70932L5.69833 3.50109"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
