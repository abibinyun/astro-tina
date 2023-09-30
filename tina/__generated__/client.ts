import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/f6e59fdb-8ed0-488b-a354-b7e24d42795d/github/main', token: '977588ae15432a036f9e1edc03d36e02106e9025', queries });
export default client;
  