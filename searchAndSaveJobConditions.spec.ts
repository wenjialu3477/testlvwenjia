
import { test } from '@playwright/test';
import { login } from './login';
import { searchAndSaveJobConditions } from './setJobConditions';

test('use the search and save job conditions sample', async ({ page }) => {
    //ログイン
    await login(page);
    //求人条件を設定
    await searchAndSaveJobConditions(page);
});