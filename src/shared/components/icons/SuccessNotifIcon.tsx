import type { CustomIconProps } from '@/shared/types';
import { IconWrapper } from '@/shared/utils/icon';

const SuccessNotifSvg = () => (
  <svg
    fill="none"
    height="27"
    viewBox="0 0 38 38"
    width="27"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.3">
      <path
        d="M6 19C6 11.8203 11.8203 6 19 6C26.1797 6 32 11.8203 32 19C32 26.1797 26.1797 32 19 32C11.8203 32 6 26.1797 6 19Z"
        stroke="#079455"
        strokeWidth="2"
      />
    </g>
    <g opacity="0.1">
      <path
        d="M1 19C1 9.05888 9.05888 1 19 1C28.9411 1 37 9.05888 37 19C37 28.9411 28.9411 37 19 37C9.05888 37 1 28.9411 1 19Z"
        stroke="#079455"
        strokeWidth="2"
      />
    </g>
    <g clipPath="url(#clip0_2671_3604)">
      <path
        d="M15.2493 18.9993L17.7493 21.4993L22.7493 16.4993M27.3327 18.9993C27.3327 23.6017 23.6017 27.3327 18.9993 27.3327C14.397 27.3327 10.666 23.6017 10.666 18.9993C10.666 14.397 14.397 10.666 18.9993 10.666C23.6017 10.666 27.3327 14.397 27.3327 18.9993Z"
        stroke="#079455"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.66667"
      />
    </g>
    <defs>
      <clipPath id="clip0_2671_3604">
        <rect fill="white" height="20" transform="translate(9 9)" width="20" />
      </clipPath>
    </defs>
  </svg>
);

export const SuccessNotifIcon = (props: CustomIconProps) => (
  <IconWrapper svgComponent={SuccessNotifSvg} {...props} />
);
