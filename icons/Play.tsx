import React from 'react'
import type { FC } from 'react'
import type { IconProps } from '../index'

export const Play: FC<IconProps> = ({
  color = '#282828',
  width = 32,
  height = 32
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 6L1.09677e-06 12L9.53674e-07 5.12651e-07L10 6Z"
        fill={color}
      />
    </svg>
  )
}
