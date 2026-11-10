import { defineConfig, devices } from '@playwright/test';


import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, process.env.TEST_ENV ?  `.env.${ process.env.TEST_ENV}` : '.env' ) });


export default defineConfig({
  timeout: 10000,
  globalTimeout: 60000,
  expect: {
    timeout: 6000
  },
 
  fullyParallel: true,
  retries: 1,
  reporter: 'html',
 
  use: {
    baseURL: process.env.BASE_URL, 
    trace: 'on-first-retry',
    video: 'on'
  },

  projects: [
    { name: 'page-object-tests',
      testMatch: '*page-objects.spec.ts'
    },

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
