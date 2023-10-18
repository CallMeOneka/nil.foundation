import { memo } from 'react'
import { SvgIconComponent } from '../SvgIconComponent'

const Discord: SvgIconComponent = ({ className }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.0002 3.33447C10.7918 3.33447 3.3335 10.7928 3.3335 20.0011C3.33161 23.4999 4.43152 26.9105 6.47719 29.7489C8.52286 32.5874 11.4104 34.7096 14.7302 35.8145C15.5635 35.9595 15.8752 35.4595 15.8752 35.0211C15.8752 34.6261 15.8535 33.3145 15.8535 31.9178C11.6668 32.6895 10.5835 30.8978 10.2502 29.9595C10.0618 29.4795 9.25016 28.0011 8.54183 27.6045C7.9585 27.2928 7.12516 26.5211 8.52016 26.5011C9.8335 26.4795 10.7702 27.7095 11.0835 28.2095C12.5835 30.7295 14.9802 30.0211 15.9368 29.5845C16.0835 28.5011 16.5202 27.7728 17.0002 27.3561C13.2918 26.9395 9.41683 25.5011 9.41683 19.1261C9.41683 17.3128 10.0618 15.8145 11.1252 14.6461C10.9585 14.2295 10.3752 12.5211 11.2918 10.2295C11.2918 10.2295 12.6868 9.79281 15.8752 11.9395C17.2319 11.5629 18.6338 11.3734 20.0418 11.3761C21.4585 11.3761 22.8752 11.5628 24.2085 11.9378C27.3952 9.77114 28.7918 10.2311 28.7918 10.2311C29.7085 12.5228 29.1252 14.2311 28.9585 14.6478C30.0202 15.8145 30.6668 17.2928 30.6668 19.1261C30.6668 25.5228 26.7718 26.9395 23.0635 27.3561C23.6668 27.8761 24.1885 28.8761 24.1885 30.4395C24.1885 32.6678 24.1668 34.4595 24.1668 35.0228C24.1668 35.4595 24.4802 35.9795 25.3135 35.8128C28.6219 34.6958 31.4967 32.5695 33.5333 29.7331C35.57 26.8967 36.6659 23.493 36.6668 20.0011C36.6668 10.7928 29.2085 3.33447 20.0002 3.33447Z"
      fill="#212121"
    />
  </svg>
)

export default memo(Discord)
