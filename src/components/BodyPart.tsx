import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";

interface IPropsBodyPart {
  item: any;
  bodyPart: any;
  setBodyPart: any;
}

const BodyPart = (Props: IPropsBodyPart) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: Props.bodyPart === Props.item ? "4px solid #FF2625" : "",
        backgroundColor: Props.bodyPart === Props.item ? "#DEDEDE" : "#FFF",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        Props.setBodyPart(Props.item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={Icon} alt="icon" style={{ width: "40px", height: "40px" }} />
      <Typography fontSize="24px" fontWeight="bold" color="3A1212" textTransform="capitalize">
        {Props.item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
