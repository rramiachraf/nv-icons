import React from 'react'
import type { FC } from 'react'
import type { IconProps } from '../index'

export const Plus: FC<IconProps> = ({
  color = '#282828',
  width = 32,
  height = 32
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 1V9" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M9 5L1 5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
