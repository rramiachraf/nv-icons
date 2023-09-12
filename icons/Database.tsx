import React from 'react'
import type { FC } from 'react'
import type { IconProps } from '../index'

export const Database: FC<IconProps> = ({
  color = '#282828',
  width = 32,
  height = 32
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 20H5C3.11438 20 2.17157 20 1.58579 19.4142C1 18.8284 1 17.8856 1 16C1 14.1144 1 13.1716 1.58579 12.5858C2.17157 12 3.11438 12 5 12H17C18.8856 12 19.8284 12 20.4142 12.5858C21 13.1716 21 14.1144 21 16C21 17.8856 21 18.8284 20.4142 19.4142C19.8284 20 18.8856 20 17 20H16"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M10 1H17C18.8856 1 19.8284 1 20.4142 1.58579C21 2.17157 21 3.11438 21 5C21 6.88562 21 7.82843 20.4142 8.41421C19.8284 9 18.8856 9 17 9H5C3.11438 9 2.17157 9 1.58579 8.41421C1 7.82843 1 6.88562 1 5C1 3.11438 1 2.17157 1.58579 1.58579C2.17157 1 3.11438 1 5 1H6"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M12.5 5H17"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M5 6V4" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8 6V4" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
      <path
        d="M12.5 16H17"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M5 17V15"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M8 17V15"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}
