import { defineConfig, devices } from '@playwright/test';

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html', // Nível 2: Evidência em HTML
  use: {
    baseURL: 'https://www.saucedemo.com/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure', // Nível 2: Evidência automática
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});