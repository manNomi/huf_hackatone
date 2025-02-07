import { getCookie } from "../../../../shared/lib/cookies";
import {
  CardContainer,
  Header,
  ChatBox,
  ButtonsContainer,
  Button,
} from "./style";

const Card = ({ patientName, message, sendStatus }) => {
  const hospitalName = getCookie("hospital");

  return (
    <CardContainer>
      <Header>{patientName}</Header>
      <ChatBox>{message}</ChatBox>
      <ButtonsContainer>
        <Button
          onClick={() => {
            sendStatus(patientName, hospitalName, 1);
            sendStatus(patientName, hospitalName, 1);
          }}
          color="green">
          초록
        </Button>
        <Button
          onClick={() => {
            sendStatus(patientName, hospitalName, 2);
            sendStatus(patientName, hospitalName, 2);
          }}
          color="yellow">
          노랑
        </Button>
        <Button
          onClick={() => {
            sendStatus(patientName, hospitalName, 3);
            sendStatus(patientName, hospitalName, 3);
          }}
          color="red">
          빨강
        </Button>
      </ButtonsContainer>
    </CardContainer>
  );
};

export default Card;
