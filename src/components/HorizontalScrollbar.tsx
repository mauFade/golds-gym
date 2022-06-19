import { useContext } from "react";
import { VisibilityContext, ScrollMenu } from "react-horizontal-scrolling-menu";

import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

import { Box, Typography } from "@mui/material";

import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

interface IPropsScrollbar {
  data: any;
  bodyPart?: any;
  setBodyPart?: any;
  isBodyPart?: boolean;
}

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = (Props: IPropsScrollbar) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {Props.data.map((item: any) => (
        <Box key={item.id || item} itemId={item.id || item} title={item.id || item} m="0 40px">
          {Props.isBodyPart == true ? (
            <BodyPart item={item} bodyPart={Props.bodyPart} setBodyPart={Props.setBodyPart} />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
