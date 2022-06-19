import { Typography, Stack, Button } from "@mui/material";

import BodyPartImg from "../assets/icons/body-part.png";
import TargetImg from "../assets/icons/target.png";
import EquipmentImg from "../assets/icons/equipment.png";

interface IDetailProps {
  exerciseDetail: any;
}

const Detail = (Props: IDetailProps) => {
  const {
    bodyPart,
    gifUrl,
    name,
    target,
    equipment,
  }: { bodyPart: string; gifUrl: string; name: string; target: string; equipment: string } = Props.exerciseDetail;

  const extraDetail: object[] = [
    {
      icon: BodyPartImg,
      name: bodyPart,
    },
    {
      icon: TargetImg,
      name: target,
    },
    {
      icon: EquipmentImg,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercícios tem diversos benefícios. {name} é uma das melhores atividades para trabalhar seu {target}. Além de
          melhorar seu corpo, te trás mais energia e disposição para suas outras tarefas diárias.
        </Typography>
        {extraDetail.map((item: any) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: "#FFF2DB", borderRadius: "50%", width: "100px", height: "100px" }}>
              <img src={item.icon} alt={item.name} style={{ height: "50px", width: "50px" }} />
            </Button>
            <Typography variant="h5" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
