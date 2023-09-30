import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '977588ae15432a036f9e1edc03d36e02106e9025', queries });
export default client;
  