import { Page } from '@playwright/test';

// URLとログイン情報の設定
const baseURL = 'https://www.bizreach.jp/';
const email = 'incablosour@yahoo.co.jp';
const password = 'Lvwenjia0430';


export async function login(page: Page) {
  // ログインページにアクセスしてログイン
  await page.goto(baseURL);
  await page.getByRole('link', { name: 'ログイン', exact: true }).click();
  await page.getByTestId('form-input__email').fill(email);
  await page.getByTestId('form-input__password').fill(password);
  await page.getByTestId('form__submit-button').click();
}