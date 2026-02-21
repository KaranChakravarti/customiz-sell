import {serve} from "inngest/next";
import { inngest, syncUserCreation, syncUserDeletion, synUserUpdation } from "@/config/inngest";

// create an api that serve zero function
export const { GET, POST, put, } = serve({
    client: inngest,
    functions: [
        syncUserCreation,
        synUserUpdation,
        syncUserDeletion
    ],
})