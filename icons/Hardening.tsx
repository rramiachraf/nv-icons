import React from 'react'
import type { FC } from 'react'
import type { IconProps } from '../index'

export const Hardening: FC<IconProps> = ({
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
      <path
        d="M20.2 15.3699L15.44 11.7999C14.9422 11.4266 14.2578 11.4266 13.76 11.7999L9 15.3699M17.4 18.8699L14.6 16.7699L11.8 18.8699"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 13.7834C2 9.3067 2 7.06839 2.52853 6.31537C3.05704 5.56236 5.16165 4.84194 9.37087 3.40111L10.1728 3.12661C12.367 2.37554 13.464 2 14.6 2C15.736 2 16.833 2.37554 19.0272 3.12661L19.8291 3.40111C24.0384 4.84194 26.143 5.56236 26.6715 6.31537C27.2 7.06839 27.2 9.3067 27.2 13.7834C27.2 14.4594 27.2 15.1928 27.2 15.988C27.2 19.4948 26.0285 22.1998 24.4 24.2657M2.26998 18.8C3.47036 24.8178 8.40697 27.9181 11.658 29.3382C12.668 29.7794 13.173 30 14.6 30C16.027 30 16.532 29.7794 17.542 29.3382C18.3514 28.9846 19.2654 28.5269 20.2 27.9459"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
