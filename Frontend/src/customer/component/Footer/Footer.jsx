
import { Grid, Link, Box, Typography, Stack, Button } from '@mui/material';

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      flexWrap="wrap"
      sx={{ bgcolor: 'black', color: 'white', p: 3 }}
    >
      {/* Company Section */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Company
        </Typography>
        <Stack direction="column" spacing={0.5}>
          <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>
            About
          </Button>
          <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>
            Blogs
          </Button>
          <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>
            Press
          </Button>
          <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>
            Jobs
          </Button>
          <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>
            Partners
          </Button>
        </Stack>
      </Box>

      {/* Placeholder for other sections */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Services
        </Typography>
      
        <Stack direction="column" spacing={0.5}>
          <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>
            Marketing
          </Button>
          <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>
            Analysis
          </Button>
          <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>
            Commerce
          </Button>
          <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>
            Insights
          </Button>
          <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>
            Support
          </Button>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Documentation
        </Typography>
        <Stack direction="column" spacing={0.5}>
          <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>
            Guides
          </Button>
          <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>
            API Status
          </Button>
        </Stack>
      </Box>

      
      <Box>
        <Typography variant="h6" gutterBottom>
          Legal
        </Typography>
        <Stack direction="column" spacing={0.5}>
          <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>
            Claim
          </Button>
          <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>
            Privacy
          </Button>
          <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>
            Terms
          </Button>
        </Stack>
      </Box>

    
      <Grid
  container
  justifyContent="center"
  alignItems="center"
  style={{
    textAlign: 'center',
    marginTop: '20px',
    paddingTop: '20px',
    borderTop: '1px solid white', // Optional border for separation
  }}
>
  <Grid item xs={12}>
    <Typography variant="body2">
      &copy; 2025 Stylehub.com
    </Typography>
    <Typography variant="body2">All rights reserved.</Typography>
    <Typography variant="body2">
      Designed by{' '}
      <a
        href="https://www.stylehub.com"
        style={{ color: 'white', textDecoration: 'underline' }}
      >
        Stylehub
      </a>{' '}
      from{' '}
      <a
        href="https://www.spyr.com"
        style={{ color: 'white', textDecoration: 'underline' }}
      >
        www.spyr.com
      </a>
    </Typography>
  </Grid>
</Grid>


    </Box>
  );
};

export default Footer;
