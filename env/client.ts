// https://env.t3.gg/docs/nextjs#create-your-schema
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const clientEnv = createEnv({
  client: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: z.string().min(1),
    NEXT_PUBLIC_STARTER_TIER: z.string().optional(),
    NEXT_PUBLIC_STARTER_SLUG: z.string().optional(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    NEXT_PUBLIC_STARTER_TIER: process.env.NEXT_PUBLIC_STARTER_TIER,
    NEXT_PUBLIC_STARTER_SLUG: process.env.NEXT_PUBLIC_STARTER_SLUG,
  },
});
