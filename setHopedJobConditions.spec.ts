import { test, expect } from '@playwright/test';
import { login } from './login';
import { setDesiredJob } from './setDesiredJob';

test('BizReachの希望条件を設定するテスト', async ({ page }) => {
  //ログイン
  await login(page);
  //希望条件を設定
  await setDesiredJob(page);
});