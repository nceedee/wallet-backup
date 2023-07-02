import { Card } from "../../../Global/Card/Card";
import { ActiveUsers } from "./Active/ActiveUsers";
import { BlockedUsers } from "./BlockedUsers/BlockedUsers";

export const ReviewUsers = () => {
  return (
    <Card>
      <ActiveUsers />
      <BlockedUsers />
    </Card>
  );
};
