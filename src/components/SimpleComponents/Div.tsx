import React from 'react';
import { Box } from '@mui/system';

export default function Div(props: any) {
  const { children, className, sx } = props;
  return (
    <Box {...props} className={`div ${className}`} sx={sx}>
      {children}
    </Box>
  );
}
