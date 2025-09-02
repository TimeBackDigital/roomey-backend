import { Redis } from "ioredis";
import { appConfig } from "../../config/app-config";

export const redis = new Redis(appConfig.REDIS_URL);
