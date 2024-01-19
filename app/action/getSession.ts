import { getServerSession } from "next-auth";
import { authOptions } from "../utils/authorize";


export default async function getSession() {
  return await getServerSession(authOptions);
}