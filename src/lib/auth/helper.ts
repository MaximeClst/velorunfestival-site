import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../auth";

export async function auth() {
  const session = await getServerSession(authOptions);
  return session?.user;
}

export async function requiredAuth() {
  const user = await auth();

  if (!user) {
    redirect("/connexion");
  }

  return user;
}
