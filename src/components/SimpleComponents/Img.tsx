import { Box } from '@mui/system';
import React from 'react';

export default function Img(props: any) {
  const { style, className, sx, src, alt } = props;
  return (
    <Box
      {...props}
      component="img"
      src={src}
      alt={alt}
      sx={sx}
      className={className}
      style={style}
    />
  );
}
