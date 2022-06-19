import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

interface ICardProps {
  exercise: any;
}
const ExerciseCard = (Props: ICardProps) => {
  return (
    <Link to={`/exercise/${Props.exercise.id}`} className="exercise-card">
      <img src={Props.exercise.gifUrl} alt={Props.exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#FFF",
            background: "#FFA9A9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {Props.exercise.bodyPart}
        </Button>

        <Button
          sx={{
            ml: "21px",
            color: "#FFF",
            background: "#FCC757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {Props.exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        pb="10px"
        mt="11px"
        textTransform="capitalize"
        fontSize="22px"
      >
        {Props.exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
