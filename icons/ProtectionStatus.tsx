import React from 'react'
import type { FC } from 'react'
import type { IconProps } from '../index'

export const ProtectionStatus: FC<IconProps> = ({
  color = '#282828',
  width = 32,
  height = 32
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 29 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 14.6L14.6 10.4L27.2 14.6" stroke={color} strokeWidth="2.5" />
      <path d="M14.6 2V29.3" stroke={color} strokeWidth="2.5" />
      <path
        d="M2.26998 18.8C3.47036 24.8178 8.40697 27.9181 11.658 29.3382C12.668 29.7794 13.173 30 14.6 30C16.027 30 16.532 29.7794 17.542 29.3382C18.3514 28.9846 19.2654 28.5269 20.2 27.9459M24.4 24.2657C26.0285 22.1998 27.2 19.4948 27.2 15.988C27.2 15.1928 27.2 14.4594 27.2 13.7834C27.2 9.3067 27.2 7.06839 26.6715 6.31537C26.143 5.56236 24.0384 4.84194 19.8291 3.40111L19.0272 3.12661C16.833 2.37554 15.736 2 14.6 2C13.464 2 12.367 2.37554 10.1728 3.12661L9.37087 3.40111C5.16165 4.84194 3.05704 5.56236 2.52853 6.31537C2 7.06839 2 9.3067 2 13.7834V14.6"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
