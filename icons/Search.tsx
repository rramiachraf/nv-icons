import type { FC } from 'react'
import type { IconProps } from '../index'

export const Search: FC<IconProps> = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 13.5306C2.00006 8.02999 5.88577 3.29549 11.2806 2.22259C16.6756 1.14969 22.0772 4.03724 24.1817 9.11926C26.2865 14.2013 24.5079 20.0623 19.9341 23.1178C15.3603 26.1733 9.26486 25.5723 5.37587 21.6822C3.21427 19.5201 1.99996 16.5878 2 13.5306Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.0571 25.0581L29.9989 29.9999"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
