import { test, expect } from '@playwright/test';

// テストデータのセット
const baseURL = 'https://www.bizreach.jp/';
const afterURL = 'https://www.bizreach.jp/mypage/';
const loginData = [
  { username: 'incablosour@yahoo.co.jp', password: 'Lvwenjia0430' },
  { username: 'inblosour@gmail.com', password: 'Jiaoxiku44' },
  // 必要に応じてさらにアカウントを追加
];

// データ駆動型テストの実行
test.describe('Login Test with multiple accounts', () => {
  // テストデータをループ処理
  for (const { username, password } of loginData) {
    test(`should login with username: ${username}`, async ({ page }) => {
        await page.goto(baseURL);
        await page.getByRole('link', { name: 'ログイン', exact: true }).click();
        await page.getByTestId('form-input__email').fill(username);
        await page.getByTestId('form-input__password').fill(password);
        await page.getByTestId('form__submit-button').click();

      // ログイン後のページを確認 (例えば、ダッシュボードページに遷移することを確認)
      await page.waitForURL(afterURL);

      // 期待されるURLかどうかを確認
      expect(page.url()).toBe(afterURL);
    });
  }
});