import { Box } from '@mui/system';
import React from 'react';

export default function P(props: any) {
  const { children, style, className, sx } = props;
  return (
    <Box sx={sx} className={`div ${className}`} style={style}>
      {children}
    </Box>
  );
}
