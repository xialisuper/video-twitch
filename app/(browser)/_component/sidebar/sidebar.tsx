import React from "react";
import Wrapper from "./wrapper";
import Toggle from "./toggle";
import RecommandedUserList from "./recommand-user-list";

export default function SideBar() {
  return (
    <Wrapper>
      <Toggle />

      <RecommandedUserList />
    </Wrapper>
  );
}
