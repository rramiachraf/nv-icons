import React from 'react'
import type { FC } from 'react'
import type { IconProps } from '../index'

export const Block: FC<IconProps> = ({
  color = '#282828',
  width = 32,
  height = 32
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 31 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.2222 11.387C27.3156 5.92143 22.1157 2 16 2C8.26802 2 2 8.26802 2 16C2 23.732 8.26802 30 16 30C21.4969 30 26.2539 26.832 28.5448 22.2222M16.0002 16L25.8996 25.8996M16.0002 16L6.10052 25.8996M16.0002 16L25.8996 6.10049"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
