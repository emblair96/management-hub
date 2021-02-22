import * as React from 'react';
import { Container, Box } from '@material-ui/core';
import '../App.css';

export default function Heading() {

  const defaultProps = {
    bgcolor: 'background.paper',
    border: 1,
    m: 1,
    borderColor: 'text.primary',
    style: { width: '20rem', height: '8rem' },
  };

  return (
    <Container className="heading" style={{ height: '20vh' }}>
      <Box display="flex" justifyContent="center">
        <Box {...defaultProps} borderAll={0}>
          <h1>Employee Management Hub</h1>
        </Box>
      </Box>
    </Container>

  )
}
