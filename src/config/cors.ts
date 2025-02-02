import { CorsOptions } from "cors";

export const corsConfig: CorsOptions = {
  origin: [],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: "Content-Type,Authorization",
};
