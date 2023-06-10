import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        paddingTop: ".25rem",
        paddingBottom: ".25rem",
        bottom: 0,
        position: 'fixed',
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | Made by Stofella`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  ); 
}