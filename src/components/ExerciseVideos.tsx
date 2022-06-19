import { Box, Typography, Stack } from "@mui/material";

interface IVdeoProps {
  exerciseVideos: any;
  exerciseName: string;
}

const ExerciseVideos = (Props: IVdeoProps) => {
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h4" mb="33px">
        Assista alguns vídeos no Youtube sobre{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>{Props.exerciseName}</span>
      </Typography>
      <Stack
        justifyContent="flex start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0" } }}
      >
        {Props.exerciseVideos?.slice(0, 6).map((item: any, index: number) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
