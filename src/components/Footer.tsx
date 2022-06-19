import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h5" pb="40px" mt="20px">
          Feito com 💜 por{" "}
          <a
            href="https://www.linkedin.com/in/mauricio-cardoso-2283541a4/"
            target="_blank"
            style={{ color: "#FF2625", textDecoration: "none" }}
          >
            Mauricio Cardoso
          </a>
          {", "}
          <a href="https://www.github.com/mauFade" target="_blank" style={{ color: "#FF2625", textDecoration: "none" }}>
            GitHub
          </a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
