import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    PROD_DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(['development', 'test', 'production']),

    NEXT_PUBLIC_SECRET:
      process.env.NODE_ENV === 'production' ? z.string().min(1) : z.string().min(1).optional(),
    NEXTAUTH_URL: z.preprocess(
      str => process.env.VERCEL_URL ?? str,
      process.env.VERCEL ? z.string().min(1) : z.string().url(),
    ),
  },
  client: {
    NEXT_PUBLIC_RPC_MAINNET_URL: z.string().min(1),
    NEXT_PUBLIC_RPC_DEVNET_URL: z.string().min(1),
    NEXT_PUBLIC_HELIUS_API_KEY: z.string().min(1),
    NEXT_PUBLIC_CLOUDNAME: z.string().min(1),
    NEXT_PUBLIC_CLOUDINARY: z.string().min(1),
    NEXT_PUBLIC_NOTION_TOKEN: z.string().min(1),
    NEXT_PUBLIC_NOTION_DATABASEID: z.string().min(1),
    NEXT_PUBLIC_NOTION_PAGEID: z.string().min(1),
    NEXT_PUBLIC_MIXPANEL: z.string().min(1),
    NEXT_PUBLIC_SUPABASE_URL: z.string().min(1),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
    NEXT_PUBLIC_SOLANA_NETWORK: z.string().min(1),
    NEXT_PUBLIC_ADMIN_VAULT: z.string().min(1),
    NEXT_PUBLIC_URL_BASE: z.string().min(1),
    NEXT_PUBLIC_GA_TRACKING_ID: z.string().min(1),
    NEXT_PUBLIC_WEB3STORAGE_TOKEN: z.string().min(1),
    NEXT_PUBLIC_IMAGE_SERVER_URL: z.string().min(1),
  },
  runtimeEnv: {
    PROD_DATABASE_URL: process.env.PROD_DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_SECRET: process.env.NEXT_PUBLIC_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXT_PUBLIC_RPC_MAINNET_URL: process.env.NEXT_PUBLIC_RPC_MAINNET_URL,
    NEXT_PUBLIC_RPC_DEVNET_URL: process.env.NEXT_PUBLIC_RPC_DEVNET_URL,
    NEXT_PUBLIC_CLOUDINARY: process.env.NEXT_PUBLIC_CLOUDINARY,
    NEXT_PUBLIC_CLOUDNAME: process.env.NEXT_PUBLIC_CLOUDNAME,
    NEXT_PUBLIC_HELIUS_API_KEY: process.env.NEXT_PUBLIC_HELIUS_API_KEY,
    NEXT_PUBLIC_NOTION_DATABASEID: process.env.NEXT_PUBLIC_NOTION_DATABASEID,
    NEXT_PUBLIC_NOTION_TOKEN: process.env.NEXT_PUBLIC_NOTION_TOKEN,
    NEXT_PUBLIC_NOTION_PAGEID: process.env.NEXT_PUBLIC_NOTION_PAGEID,
    NEXT_PUBLIC_MIXPANEL: process.env.NEXT_PUBLIC_MIXPANEL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SOLANA_NETWORK: process.env.NEXT_PUBLIC_SOLANA_NETWORK,
    NEXT_PUBLIC_ADMIN_VAULT: process.env.NEXT_PUBLIC_ADMIN_VAULT,
    NEXT_PUBLIC_URL_BASE: process.env.NEXT_PUBLIC_URL_BASE,
    NEXT_PUBLIC_GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
    NEXT_PUBLIC_WEB3STORAGE_TOKEN: process.env.NEXT_PUBLIC_WEB3STORAGE_TOKEN,
    NEXT_PUBLIC_IMAGE_SERVER_URL: process.env.NEXT_PUBLIC_IMAGE_SERVER_URL,
  },
});
