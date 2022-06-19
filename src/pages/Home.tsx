import { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState<any>("all");
  const [exercise, setExercise] = useState<any>([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercise} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercise} bodyPart={bodyPart} exercises={exercise} />
    </Box>
  );
};

export default Home;
