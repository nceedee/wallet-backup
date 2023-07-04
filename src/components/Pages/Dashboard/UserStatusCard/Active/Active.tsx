import { TextWrap } from "../../../../Global/TextWrap/TextWrap";
import { usersList } from "../hooks/usersList/usersList";
import { UsersTemplate } from "../UsersTemplate/UsersTemplate";

export const ActiveUsers = () => {
  return (
    <div className="mb-9">
      <TextWrap className="text-sm">Active Users</TextWrap>
      <div className="mt-4 space-y-2">
        {usersList.map(user => (
          <UsersTemplate image={user.profilePic} name={user.firstName + " " + user.lastName} key={user.id} />
        ))}
      </div>
    </div>
  );
};

{
  /* call the user template with the object passed */
}
