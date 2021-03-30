import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Logo = ({ className, width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 230 70"
    className={className}
    css={css`
      stroke: #007e8a;
      width: ${width || '118px'};

      .dark-mode & {
        stroke: #70ccd3;
        fill: white;
      }
    `}
  >
    <g transform="translate(-120 -10)">
      <path d="M201.2,26.41h12q6.76,0,9.88,3.22t3.12,10.3v9.36q0,7.08-3.12,10.3t-9.88,3.22h-12V58.7h3.12V30.47H201.2Zm11.34,32.34a16.17,16.17,0,0,0,4.13-.46,6.47,6.47,0,0,0,2.89-1.59,6.71,6.71,0,0,0,1.69-3A17.34,17.34,0,0,0,221.8,49V40.24a17.39,17.39,0,0,0-.55-4.73,6.71,6.71,0,0,0-1.69-3,6.57,6.57,0,0,0-2.89-1.59,16.17,16.17,0,0,0-4.13-.46h-3.85V58.75Z" />
      <path d="M256.85,50.23a14.26,14.26,0,0,1-1.07,5.69A12.51,12.51,0,0,1,253,60.08a11.8,11.8,0,0,1-4.14,2.57,14.07,14.07,0,0,1-9.85,0,11.85,11.85,0,0,1-4.11-2.57A12.51,12.51,0,0,1,232,55.92,14.26,14.26,0,0,1,231,50.23V49.6A14.15,14.15,0,0,1,232,44a12.62,12.62,0,0,1,2.86-4.19,12.11,12.11,0,0,1,4.13-2.6,14,14,0,0,1,9.78,0,12.11,12.11,0,0,1,4.13,2.6A12.62,12.62,0,0,1,255.78,44a14.15,14.15,0,0,1,1.07,5.64Zm-13,9.46a9.11,9.11,0,0,0,3.46-.65,8,8,0,0,0,2.78-1.9,8.87,8.87,0,0,0,1.87-3,10.78,10.78,0,0,0,.68-3.92V49.6a10.5,10.5,0,0,0-.68-3.82,8.87,8.87,0,0,0-1.87-3,8.65,8.65,0,0,0-2.81-1.95,8.75,8.75,0,0,0-6.86,0,8.65,8.65,0,0,0-2.81,1.95,8.87,8.87,0,0,0-1.87,3,10.5,10.5,0,0,0-.68,3.82v.63a10.78,10.78,0,0,0,.68,3.92,8.87,8.87,0,0,0,1.87,3,8,8,0,0,0,2.78,1.9A9.11,9.11,0,0,0,243.9,59.69Z" />
      <path d="M287.13,53.66a13.5,13.5,0,0,1-1.43,4,11.16,11.16,0,0,1-6.22,5.2,13.78,13.78,0,0,1-4.62.73,14.83,14.83,0,0,1-5.13-.89,12.14,12.14,0,0,1-7.12-6.7,13.94,13.94,0,0,1-1.07-5.62v-.62a14.19,14.19,0,0,1,1.07-5.62,12.29,12.29,0,0,1,2.89-4.21,12.68,12.68,0,0,1,4.23-2.65,14,14,0,0,1,5.13-.94,13.48,13.48,0,0,1,4.52.73,11.64,11.64,0,0,1,3.67,2,11.46,11.46,0,0,1,2.6,3.15,12.35,12.35,0,0,1,1.37,4l-4,.94a8.52,8.52,0,0,0-.76-2.63,7.27,7.27,0,0,0-1.61-2.24,7.49,7.49,0,0,0-2.47-1.53,9.24,9.24,0,0,0-3.38-.57,8.77,8.77,0,0,0-3.51.7,8.93,8.93,0,0,0-2.88,2,8.82,8.82,0,0,0-1.95,3,10.3,10.3,0,0,0-.71,3.85v.62a10.39,10.39,0,0,0,.71,3.93,8,8,0,0,0,1.95,2.93A8.66,8.66,0,0,0,271.27,59a9.83,9.83,0,0,0,3.59.65,8.6,8.6,0,0,0,3.35-.6,8,8,0,0,0,2.44-1.56,7.46,7.46,0,0,0,1.62-2.21,9.55,9.55,0,0,0,.8-2.6Z" />
      <path d="M297.93,43.67a3.17,3.17,0,0,0,1.58,2.86c1.06.66,3,1.1,5.8,1.3A13.18,13.18,0,0,1,312.2,50a6.16,6.16,0,0,1,2.37,5.23v.31a7.16,7.16,0,0,1-.76,3.35,7.46,7.46,0,0,1-2.08,2.53A9.23,9.23,0,0,1,308.51,63a14.63,14.63,0,0,1-4.13.55,14.79,14.79,0,0,1-5.18-.81,10.72,10.72,0,0,1-3.59-2.13,8.78,8.78,0,0,1-2.15-3,10,10,0,0,1-.84-3.4l3.85-.94A6.94,6.94,0,0,0,298.76,58a7.85,7.85,0,0,0,5.41,1.79,8.44,8.44,0,0,0,4.6-1.11,3.55,3.55,0,0,0,1.74-3.15,3.27,3.27,0,0,0-1.71-3.12,14.55,14.55,0,0,0-5.57-1.2,12.88,12.88,0,0,1-6.86-2.08A6,6,0,0,1,294,44v-.32a6.36,6.36,0,0,1,.78-3.19,7.16,7.16,0,0,1,2.1-2.32,9.78,9.78,0,0,1,3-1.4,14,14,0,0,1,8,.23A10.38,10.38,0,0,1,311,38.81a7.83,7.83,0,0,1,2,2.58,9.6,9.6,0,0,1,.91,2.91l-3.84.93a5.53,5.53,0,0,0-2-3.9,7,7,0,0,0-4.55-1.4,9.65,9.65,0,0,0-2.1.23,6,6,0,0,0-1.79.71A3.71,3.71,0,0,0,298.4,42,2.79,2.79,0,0,0,297.93,43.67Z" />
      <path d="M176.42,28,160.3,11.84A6,6,0,0,0,156,9.63H127.52a4.3,4.3,0,0,0-4.29,4.3V74.86a4.3,4.3,0,0,0,4.29,4.3h46.82a4.3,4.3,0,0,0,4.29-4.3V32.3A5.92,5.92,0,0,0,176.42,28ZM159,16.25l6.46,6.45L172,29.15H159.34a.3.3,0,0,1-.3-.29Zm15.59,58.61a.3.3,0,0,1-.29.3H127.52a.31.31,0,0,1-.29-.3V13.93a.31.31,0,0,1,.29-.3H155a1.56,1.56,0,0,1,.06.42v14.8a4.3,4.3,0,0,0,4.3,4.29h15a.89.89,0,0,1,.32.08V74.86Z" />
      <rect
        css={css`
          fill: #0ab0bf;
        `}
        x="134.96"
        y="37.8"
        width="31.94"
        height="5"
      />
      <rect
        css={css`
          fill: #fda032;
        `}
        x="134.96"
        y="47.8"
        width="31.94"
        height="5"
      />
      <rect
        css={css`
          fill: #66e6a8;
        `}
        x="134.96"
        y="57.8"
        width="19.83"
        height="5"
      />
    </g>
  </svg>
);

Logo.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
};

export default Logo;
