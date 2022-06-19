import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { fetchData, exerciseOptions } from "../utils/fetchData";

import ExerciseCard from "./ExerciseCard";

interface IExerciseProps {
  setExercises: any;
  exercises: any;
  bodyPart: any;
}

const Exercises = (Props: IExerciseProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const exercisesPerPage: number = 9;

  const indexOfLastExercise: number = currentPage * exercisesPerPage;
  const indexOfFirstExercise: number = indexOfLastExercise - exercisesPerPage;
  const currentExercises: any = Props.exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event: any, value: number) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData: any[] = [];

      if (Props.bodyPart === "all") {
        exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${Props.bodyPart}`,
          exerciseOptions
        );
      }

      Props.setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [Props.bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Mostrando resultados
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: "110px", xs: "50px" } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise: any, index: number) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {Props.exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(Props.exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
