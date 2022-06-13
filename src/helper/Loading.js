import { Box } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/react';
import React from 'react';

export default function Loading() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      minHeight="100vh"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <h1 className="text-7xl">test header</h1>
      {/* <Spinner size="lg" /> */}
    </Box>
  );
}
