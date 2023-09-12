import type { FC } from 'react'
import type { IconProps } from '../index'

export const Apple: FC<IconProps> = ({
  color = '#282828',
  width = 32,
  height = 32
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2196 8.45969C11.2076 7.84352 11.3678 7.23624 11.6823 6.70626C11.9968 6.17628 12.453 5.74455 12.9995 5.4598C12.6554 4.98125 12.2059 4.58813 11.6858 4.31073C11.1656 4.03334 10.5888 3.87909 9.99965 3.85986C8.72969 3.75986 7.34974 4.59983 6.83976 4.59983C6.32978 4.59983 5.06983 3.89986 4.10985 3.89986C2.10992 3.89986 0 5.4898 0 8.65969C0.00963965 9.64775 0.181943 10.6275 0.509981 11.5596C0.949965 12.8395 2.59991 16.0494 4.31984 15.9994C5.21982 15.9994 5.8598 15.3594 7.02976 15.3594C8.19971 15.3594 8.74969 15.9994 9.75966 15.9994C11.4896 15.9994 12.9895 13.0495 13.4195 11.7396C12.7684 11.4733 12.2115 11.0191 11.8197 10.4349C11.4278 9.85074 11.2189 9.16307 11.2196 8.45969ZM9.21968 2.58991C9.53037 2.23957 9.76466 1.82832 9.90755 1.3824C10.0504 0.936476 10.0988 0.465673 10.0496 0C9.11598 0.102386 8.25361 0.54783 7.62973 1.24995C7.30715 1.58985 7.05806 1.99259 6.89806 2.43303C6.73807 2.87348 6.67057 3.34217 6.69977 3.80986C7.18395 3.82347 7.66433 3.71961 8.09962 3.50715C8.535 3.2947 8.91239 2.97998 9.19968 2.58991H9.21968Z"
        fill={color}
      />
    </svg>
  )
}
