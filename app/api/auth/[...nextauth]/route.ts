
import { authOptions } from "@/app/utils/authorize";
import NextAuth, { AuthOptions } from "next-auth"




const handler :any = NextAuth(authOptions);

export { handler as GET, handler as POST };