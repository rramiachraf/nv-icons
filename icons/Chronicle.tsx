import type { FC } from 'react'
import type { IconProps } from '../index'

export const Chronicle: FC<IconProps> = ({
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
        d="M2 13.2C2 7.92026 2 5.28041 3.6402 3.6402C5.28041 2 7.92026 2 13.2 2H16C21.2797 2 23.9197 2 25.5598 3.6402C27.2 5.28041 27.2 7.92026 27.2 13.2V18.8C27.2 24.0797 27.2 26.7197 25.5598 28.3598C23.9197 30 21.2797 30 16 30H13.2C7.92026 30 5.28041 30 3.6402 28.3598C2 26.7197 2 24.0797 2 18.8V13.2Z"
        stroke={color}
        strokeWidth="2.5"
      />
      <path
        d="M9 13.2002H20.2"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M9 18.7998H16"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
