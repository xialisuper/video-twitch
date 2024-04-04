// get recommand user info

// import { User } from "@prisma/client";
import { User } from "../../node_modules/.prisma/client";

import prisma from "@/prisma/db";

// 目前"简单"版本将返回所有用户
export const getRecommandUser = async (userId: number): Promise<User[]> => {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return users;
};
