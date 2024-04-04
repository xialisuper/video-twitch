// get recommand user info

// import { User } from "@prisma/client";

interface User {
  id: string;
  userName: string;
  imageUrl: string;
  externalUserId: string;
  bio: string | null;
  createdAt: Date;
  updatedAt: Date;
}

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
