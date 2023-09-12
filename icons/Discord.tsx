import type { FC } from 'react'
import type { IconProps } from '../index'

export const Discord: FC<IconProps> = ({
  color = '#282828',
  width = 32,
  height = 32
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.6993 2.72819C21.8874 1.90764 19.9577 1.30302 17.9248 0.95752C17.6744 1.38939 17.3798 1.97961 17.1883 2.45467C15.0376 2.13797 12.9017 2.13797 10.7952 2.45467C10.589 1.97961 10.2943 1.38939 10.0439 0.95752C8.01108 1.30302 6.08136 1.90764 4.26949 2.72819C0.616272 8.11218 -0.370685 13.3667 0.115428 18.5347C2.54599 20.3054 4.88818 21.3707 7.2009 22.0761C7.77539 21.3131 8.27624 20.4925 8.71816 19.6432C7.87851 19.3409 7.08305 18.9522 6.33178 18.5059C6.53801 18.362 6.72951 18.2036 6.92101 18.0597C11.5317 20.1614 16.5254 20.1614 21.0772 18.0597C21.2687 18.218 21.4602 18.362 21.6664 18.5059C20.9152 18.9522 20.105 19.3265 19.2801 19.6432C19.722 20.4925 20.2228 21.3131 20.7973 22.0761C23.11 21.3707 25.467 20.3054 27.8828 18.5347C28.4573 12.5317 26.8958 7.33481 23.7287 2.72819H23.6993ZM9.33685 15.3677C7.95216 15.3677 6.8179 14.1152 6.8179 12.5749C6.8179 11.0346 7.9227 9.78213 9.33685 9.78213C10.751 9.78213 11.8705 11.0346 11.8558 12.5749C11.8558 14.1008 10.751 15.3677 9.33685 15.3677ZM18.6319 15.3677C17.2472 15.3677 16.113 14.1152 16.113 12.5749C16.113 11.0346 17.2178 9.78213 18.6319 9.78213C20.0461 9.78213 21.1656 11.0346 21.1509 12.5749C21.1509 14.1008 20.0461 15.3677 18.6319 15.3677Z"
        fill={color}
      />
    </svg>
  )
}
