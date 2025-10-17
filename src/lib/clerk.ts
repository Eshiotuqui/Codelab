import type { Roles } from "@/@types/clerk"
import { auth } from "@clerk/nextjs/server"

export const CheckRole = async (role: Roles) => {
  const { sessionClaims } = await auth()

  return sessionClaims?.metadata?.role === role
}
