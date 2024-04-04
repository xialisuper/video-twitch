import { getRecommandUser } from "@/lib/recommand-user-servere";
import { useSidebarStore } from "@/store/use-sidebar";

import React from "react";
import UserItem from "./user-item";

export default async function RecommandedUserList() {
  const users = await getRecommandUser(0);

  return (
    <ul className="flex flex-col gap-6">
      {users.map((user) => {
        return (
          <div key={user.id}>
            <UserItem userName={user.userName} imageUrl={user.imageUrl} />
          </div>
        );
      })}
    </ul>
  );
}
