import { Card } from "../../../Global/Card/Card";
import { ActiveUsers } from "./Active/Active";
import { BlockedUsers } from "./BlockedUsers/BlockedUsers";

export const UserStatusCard = () => {
  return (
    <Card>
      <ActiveUsers />
      <BlockedUsers />
    </Card>
  );
};
