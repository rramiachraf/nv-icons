import React from 'react'
import type { FC } from 'react'
import type { IconProps } from '../index'

export const Download: FC<IconProps> = ({
  color = '#282828',
  width = 32,
  height = 32
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0001 1V15.4444M11.0001 15.4444L15.4446 10.5833M11.0001 15.4444L6.55566 10.5833"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.3333 20.9999H7.66667C4.52397 20.9999 2.95262 20.9999 1.97631 20.0236C1 19.0473 1 17.4759 1 14.3333M21 14.3333C21 17.4759 21 19.0473 20.0237 20.0236C19.6906 20.3567 19.2882 20.5761 18.7778 20.7207"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
