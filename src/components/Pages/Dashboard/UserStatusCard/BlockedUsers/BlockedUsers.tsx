import { TextWrap } from "../../../../Global/TextWrap/TextWrap";
import { usersList } from "../hooks/usersList/usersList";
import { UsersTemplate } from "../UsersTemplate/UsersTemplate";

export const BlockedUsers = () => {
  return (
    <div>
      <TextWrap>Blocked Users</TextWrap>
      <div className="mt-4 space-y-2">
        {usersList.map(user => (
          <UsersTemplate image={user.profilePic} name={user.firstName + " " + user.lastName} key={user.id} />
        ))}
      </div>
    </div>
  );
};
