import React from 'react'
import type { FC } from 'react'
import type { IconProps } from '../index'

export const Aim: FC<IconProps> = ({
  color = '#282828',
  width = 32,
  height = 32
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 16H24.4M7.6 16H2M16 7.6V2M16 30V24.4M27.2 16C27.2 22.1856 22.1856 27.2 16 27.2C9.81441 27.2 4.8 22.1856 4.8 16C4.8 9.81441 9.81441 4.8 16 4.8C22.1856 4.8 27.2 9.81441 27.2 16ZM20.2 16C20.2 18.3197 18.3197 20.2 16 20.2C13.6803 20.2 11.8 18.3197 11.8 16C11.8 13.6803 13.6803 11.8 16 11.8C18.3197 11.8 20.2 13.6803 20.2 16Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
