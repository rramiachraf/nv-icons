import type { FC } from 'react'
import type { IconProps } from '../index'

export const Bell: FC<IconProps> = ({
  color = '#282828',
  width = 32,
  height = 32
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9707 6.2386C11.3142 6.22222 10.7952 5.67194 10.8113 5.00951C10.8277 4.34709 11.3729 3.82335 12.0293 3.83973L11.9707 6.2386ZM20.5414 14.3064H19.3524C19.3524 14.2975 19.3525 14.2885 19.3527 14.2794L20.5414 14.3064ZM20.5414 18.013L20.4794 19.2112C19.8477 19.1779 19.3524 18.6513 19.3524 18.013H20.5414ZM20.5414 22.9562L20.6034 24.1544C20.5828 24.1555 20.5621 24.156 20.5414 24.156V22.9562ZM15.6061 24.156C14.9494 24.156 14.4171 23.6188 14.4171 22.9562C14.4171 22.2936 14.9494 21.7564 15.6061 21.7564V24.156ZM13.189 5.03917C13.189 5.70179 12.6566 6.23897 12 6.23897C11.3434 6.23897 10.811 5.70179 10.811 5.03917H13.189ZM10.811 1.1998C10.811 0.537175 11.3434 0 12 0C12.6566 0 13.189 0.537175 13.189 1.1998H10.811ZM11.9707 3.83973C12.627 3.82335 13.1723 4.34709 13.1887 5.00951C13.2048 5.67194 12.6858 6.22222 12.0293 6.2386L11.9707 3.83973ZM3.45851 14.3064L4.64733 14.2794C4.64749 14.2885 4.64749 14.2975 4.64749 14.3064H3.45851ZM3.45851 18.013H4.64749C4.64749 18.6513 4.15224 19.1779 3.52049 19.2112L3.45851 18.013ZM3.45851 22.9562V24.156C3.4379 24.156 3.41729 24.1555 3.39652 24.1544L3.45851 22.9562ZM8.3939 21.7564C9.05053 21.7564 9.58288 22.2936 9.58288 22.9562C9.58288 23.6188 9.05053 24.156 8.3939 24.156V21.7564ZM14.4187 22.9605C14.4163 22.2979 14.9467 21.7588 15.6034 21.7564C16.26 21.754 16.7942 22.2893 16.7966 22.9519L14.4187 22.9605ZM14.5519 25.6757L13.6841 24.8556L13.6861 24.8535L14.5519 25.6757ZM9.45114 25.6757L10.317 24.8535L10.3189 24.8556L9.45114 25.6757ZM7.2065 22.9519C7.20888 22.2893 7.74313 21.754 8.39976 21.7564C9.0564 21.7588 9.58684 22.2979 9.58446 22.9605L7.2065 22.9519ZM15.6091 21.7564C16.2658 21.7564 16.7981 22.2936 16.7981 22.9562C16.7981 23.6188 16.2658 24.156 15.6091 24.156V21.7564ZM8.3939 24.156C7.73726 24.156 7.20491 23.6188 7.20491 22.9562C7.20491 22.2936 7.73726 21.7564 8.3939 21.7564V24.156ZM12.0293 3.83973C17.543 3.97729 21.8556 8.70145 21.7301 14.3335L19.3527 14.2794C19.4501 9.91298 16.1173 6.34205 11.9707 6.2386L12.0293 3.83973ZM21.7304 14.3064V18.013H19.3524V14.3064H21.7304ZM20.6034 16.8148C22.5328 16.9166 24 18.555 24 20.4846H21.622C21.622 19.7785 21.0934 19.2435 20.4794 19.2112L20.6034 16.8148ZM24 20.4846C24 22.4142 22.5328 24.0527 20.6034 24.1544L20.4794 21.758C21.0934 21.7257 21.622 21.1907 21.622 20.4846H24ZM20.5414 24.156H15.6061V21.7564H20.5414V24.156ZM10.811 5.03917V1.1998H13.189V5.03917H10.811ZM12.0293 6.2386C7.88263 6.34205 4.55 9.91298 4.64733 14.2794L2.26985 14.3335C2.14429 8.70145 6.45696 3.97729 11.9707 3.83973L12.0293 6.2386ZM4.64749 14.3064V18.013H2.26953V14.3064H4.64749ZM3.52049 19.2112C2.9065 19.2435 2.37796 19.7785 2.37796 20.4846H0C0 18.555 1.4672 16.9166 3.39652 16.8148L3.52049 19.2112ZM2.37796 20.4846C2.37796 21.1907 2.9065 21.7257 3.52049 21.758L3.39652 24.1544C1.4672 24.0527 0 22.4142 0 20.4846H2.37796ZM3.45851 21.7564H8.3939V24.156H3.45851V21.7564ZM16.7966 22.9519C16.8012 24.2691 16.3097 25.5417 15.4178 26.498L13.6861 24.8535C14.1552 24.3504 14.4211 23.6718 14.4187 22.9605L16.7966 22.9519ZM15.4197 26.4959C14.5314 27.4529 13.2979 28 12.0016 28V25.6004C12.6303 25.6004 13.2386 25.3355 13.6841 24.8556L15.4197 26.4959ZM12.0016 28C10.7051 28 9.47159 27.4529 8.58334 26.4959L10.3189 24.8556C10.7644 25.3355 11.3729 25.6004 12.0016 25.6004V28ZM8.5854 26.498C7.69335 25.5417 7.2019 24.2691 7.2065 22.9519L9.58446 22.9605C9.58193 23.6718 9.84778 24.3504 10.317 24.8535L8.5854 26.498ZM15.6091 24.156H8.3939V21.7564H15.6091V24.156Z"
        fill={color}
      />
    </svg>
  )
}
