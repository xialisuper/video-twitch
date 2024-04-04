// get current user info ?

import prisma from "@/prisma/db";
import { currentUser } from "@clerk/nextjs";

// 获取登录用户的信息
export const getSelf = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("No user logged in");
  }
  const userInfo = await prisma.user.findUnique({
    where: {
      externalUserId: user.id,
    },
  });

  if (!userInfo) {
    throw new Error("No user found");
  }

  return userInfo;
};
