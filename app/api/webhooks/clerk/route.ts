import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import prisma from "@/prisma/db";

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;

  console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
  console.log("Webhook body:", body);

  // Create a user in supabase when clerk user is created
  // todo handle error
  if (eventType === "user.created") {
    await prisma.user.create({
      data: {
        externalUserId: evt.data.id,
        userName: evt.data.username ?? "",
        imageUrl: evt.data.image_url,
      },
    });
  }

  // Create a user in supabase when clerk user is deleted
  if (eventType === "user.deleted") {
    await prisma.user.delete({
      where: {
        externalUserId: evt.data.id,
      },
    });
  }

  // user updated
  if (eventType === "user.updated") {
    // find the user with id
    const user = await prisma.user.findUnique({
      where: {
        externalUserId: evt.data.id,
      },
    });

    if (!user) {
      return new Response("User not found", {
        status: 404,
      });
    }

    // update the user
    await prisma.user.update({
      where: {
        externalUserId: evt.data.id,
      },
      data: {
        userName: evt.data.username ?? "",
        imageUrl: evt.data.image_url ?? "",
      },
    });
  }

  return new Response("", { status: 200 });
}
