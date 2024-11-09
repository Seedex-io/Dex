import React from 'react';
import { Box } from '@mui/system';

export default function Span(props: any) {
  const { children, style, className, sx } = props;
  return (
    <Box
      {...props}
      sx={sx}
      className={`span ${className}`}
      style={{
        display: 'inline-block',
        ...style,
      }}
    >
      {children}
    </Box>
  );
}
