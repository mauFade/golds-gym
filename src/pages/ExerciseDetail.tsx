import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Box } from "@mui/system";

import { youtubeOptions, exerciseOptions, fetchData } from "../utils/fetchData";

import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState<any>({});
  const [exerciseVideos, setExerciseVideos] = useState<any>([]);
  const [targetExercises, setTargetExercises] = useState<any>([]);
  const [equipmentExercises, setEquipmentExercises] = useState<any>([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDBAPIURL: string = "https://exercisedb.p.rapidapi.com";
      const youtubeDownloadAPIURL: string = "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(`${exerciseDBAPIURL}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseYoutubeData = await fetchData(
        `${youtubeDownloadAPIURL}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseYoutubeData.contents);

      const targetExerciseData = await fetchData(
        `${exerciseDBAPIURL}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetExercises(targetExerciseData);

      const equipmentExerciseData = await fetchData(
        `${exerciseDBAPIURL}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentExerciseData);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} exerciseName={exerciseDetail.name} />
      <SimilarExercises equipmentExercises={equipmentExercises} targetExercises={targetExercises} />
    </Box>
  );
};

export default ExerciseDetail;
