import { Card } from "../../../Global/Card/Card";
import { ActiveUsers } from "./Active/ActiveUsers";
import { BlockedUsers } from "./BlockedUsers/BlockedUsers";

export const UserStatusCard = () => {
  return (
    <Card>
      <ActiveUsers />
      <BlockedUsers />
    </Card>
  );
};
