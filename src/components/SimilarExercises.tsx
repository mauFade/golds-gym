import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

interface ISimilarProps {
  targetExercises: any;
  equipmentExercises: any;
}

const SimilarExercises = (Props: ISimilarProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  if (Props.targetExercises.lenght > 0 && Props.equipmentExercises.lenght > 0) {
    setIsLoading(true);
  }

  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5}>
        Exercícios que treinam o mesmo <span style={{ color: "#FF2625", fontWeight: "bold" }}>grupo muscular</span>
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative", mb: "10px" }}>
        {isLoading == true ? <HorizontalScrollbar data={Props.targetExercises} isBodyPart={false} /> : <Loader />}
      </Stack>
      <Typography variant="h3" mb={5}>
        Exercícios que usam o mesmo <span style={{ color: "#FF2625", fontWeight: "bold" }}>equipamento</span>
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {isLoading == true ? <HorizontalScrollbar data={Props.equipmentExercises} isBodyPart={false} /> : <Loader />}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
