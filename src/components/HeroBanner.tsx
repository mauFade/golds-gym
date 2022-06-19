import { Box, Button, Stack, Typography } from "@mui/material";
import HeroImg from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
        }}
        mb="23px"
        mt="30px"
      >
        Treine, Coma, Durma <br />e Repita.
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Dê uma olhada nos exercícios mais efetivos
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{
          padding: "10px",
          backgroundColor: "#FF2625",
        }}
      >
        Explorar exercícios
      </Button>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Exercício
      </Typography>
      <img src={HeroImg} alt="hero" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
