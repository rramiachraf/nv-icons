import React from 'react'
import type { FC } from 'react'
import type { IconProps } from '../index'

export const Exclamation: FC<IconProps> = ({
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
        d="M11.0554 6.55554H10.9443"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 9.96265V15.4445"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 11C1 8.34784 2.05357 5.8043 3.92893 3.92893C5.8043 2.05357 8.34784 1 11 1C13.6522 1 16.1957 2.05357 18.0711 3.92893C19.9464 5.8043 21 8.34784 21 11C21 13.6522 19.9464 16.1957 18.0711 18.0711C16.1957 19.9464 13.6522 21 11 21C8.34784 21 5.8043 19.9464 3.92893 18.0711C2.05357 16.1957 1 13.6522 1 11Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
