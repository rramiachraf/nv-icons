import type { FC } from 'react'
import type { IconProps } from '../index'

export const Overview: FC<IconProps> = ({
  color = '#282828',
  width = 32,
  height = 32
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 8.58064C28 7.83239 27.3934 7.22581 26.6452 7.22581C25.8969 7.22581 25.2903 7.83239 25.2903 8.58064H28ZM12.1935 25.2903C11.4453 25.2903 10.8387 25.8969 10.8387 26.6452C10.8387 27.3934 11.4453 28 12.1935 28V25.2903ZM25.2903 8.58064C25.2903 9.32889 25.8969 9.93548 26.6452 9.93548C27.3934 9.93548 28 9.32889 28 8.58064H25.2903ZM12.1935 0C11.4453 0 10.8387 0.606588 10.8387 1.35484C10.8387 2.10309 11.4453 2.70968 12.1935 2.70968V0ZM26.6452 9.93548C27.3934 9.93548 28 9.32889 28 8.58064C28 7.83239 27.3934 7.22581 26.6452 7.22581V9.93548ZM12.1935 7.22581C11.4453 7.22581 10.8387 7.83239 10.8387 8.58064C10.8387 9.32889 11.4453 9.93548 12.1935 9.93548V7.22581ZM2.70968 14C2.70968 13.2518 2.10309 12.6452 1.35484 12.6452C0.606588 12.6452 0 13.2518 0 14H2.70968ZM12.1935 28C12.9418 28 13.5484 27.3934 13.5484 26.6452C13.5484 25.8969 12.9418 25.2903 12.1935 25.2903V28ZM0 14C0 14.7482 0.606588 15.3548 1.35484 15.3548C2.10309 15.3548 2.70968 14.7482 2.70968 14H0ZM12.1935 2.70968C12.9418 2.70968 13.5484 2.10309 13.5484 1.35484C13.5484 0.606588 12.9418 0 12.1935 0V2.70968ZM1.35484 12.6452C0.606588 12.6452 0 13.2518 0 14C0 14.7482 0.606588 15.3548 1.35484 15.3548V12.6452ZM12.1935 15.3548C12.9418 15.3548 13.5484 14.7482 13.5484 14C13.5484 13.2518 12.9418 12.6452 12.1935 12.6452V15.3548ZM13.5484 14C13.5484 13.2518 12.9418 12.6452 12.1935 12.6452C11.4453 12.6452 10.8387 13.2518 10.8387 14H13.5484ZM10.8387 26.6452C10.8387 27.3934 11.4453 28 12.1935 28C12.9418 28 13.5484 27.3934 13.5484 26.6452H10.8387ZM10.8387 14C10.8387 14.7482 11.4453 15.3548 12.1935 15.3548C12.9418 15.3548 13.5484 14.7482 13.5484 14H10.8387ZM13.5484 8.58064C13.5484 7.83239 12.9418 7.22581 12.1935 7.22581C11.4453 7.22581 10.8387 7.83239 10.8387 8.58064H13.5484ZM13.5484 1.35484C13.5484 0.606588 12.9418 0 12.1935 0C11.4453 0 10.8387 0.606588 10.8387 1.35484H13.5484ZM10.8387 8.58064C10.8387 9.32889 11.4453 9.93548 12.1935 9.93548C12.9418 9.93548 13.5484 9.32889 13.5484 8.58064H10.8387ZM25.2903 8.58064V19.4194H28V8.58064H25.2903ZM25.2903 19.4194C25.2903 22.6618 22.6618 25.2903 19.4194 25.2903V28C24.1584 28 28 24.1584 28 19.4194H25.2903ZM19.4194 25.2903H12.1935V28H19.4194V25.2903ZM28 8.58064C28 3.84169 24.1584 0 19.4194 0V2.70968C22.6618 2.70968 25.2903 5.33819 25.2903 8.58064H28ZM19.4194 0H12.1935V2.70968H19.4194V0ZM26.6452 7.22581H12.1935V9.93548H26.6452V7.22581ZM0 14V19.4194H2.70968V14H0ZM0 19.4194C0 24.1584 3.84169 28 8.58064 28V25.2903C5.33819 25.2903 2.70968 22.6618 2.70968 19.4194H0ZM8.58064 28H12.1935V25.2903H8.58064V28ZM2.70968 14V8.58064H0V14H2.70968ZM2.70968 8.58064C2.70968 5.33819 5.33819 2.70968 8.58064 2.70968V0C3.84169 0 0 3.84169 0 8.58064H2.70968ZM8.58064 2.70968H12.1935V0H8.58064V2.70968ZM1.35484 15.3548H12.1935V12.6452H1.35484V15.3548ZM10.8387 14V26.6452H13.5484V14H10.8387ZM13.5484 14V8.58064H10.8387V14H13.5484ZM10.8387 1.35484V8.58064H13.5484V1.35484H10.8387Z"
        fill={color}
      />
    </svg>
  )
}
