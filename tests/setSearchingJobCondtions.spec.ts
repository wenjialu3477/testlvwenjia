import { test, expect } from '@playwright/test';

// URLとログイン情報の設定
const baseURL = 'https://www.bizreach.jp/';
const email = 'incablosour@yahoo.co.jp';
const password = 'Lvwenjia0430';

// 希望職種に関する設定
const jobOptionName = '営業';
const jobLabelName = '法人営業';

// 希望業種に関する設定
const industryOptionName = '不動産';
const industryLabelName = 'デベロッパー';

// 希望条件に関する設定
const locationLabelName = '関西';
const globalBusinessLabelName = 'グローバル事業に携わりたい';
const stockOptionsLabelName = 'ストックオプションが欲しい';
const socialContributionLabelName = '社会に貢献したい';
const managementLabelName = 'マネジメントをしたい';

test('希望求人条件の設定', async ({ page }) => {
    // ログインページにアクセスしてログイン
  await page.goto(baseURL);
  await page.getByRole('link', { name: 'ログイン', exact: true }).click();
  await page.getByTestId('form-input__email').fill(email);
  await page.getByTestId('form-input__password').fill(password);
  await page.getByTestId('form__submit-button').click();

    // 職務経歴書のリンクをクリック
  await page.getByRole('link', { name: '職務経歴書', exact: true }).click();
  const link = page.getByRole('link', { name: '希望条件' });
  await link.waitFor(); // 希望条件リンクが表示されるまで待機
  await link.click();

    //希望職種の設定
  const button = page.getByRole('button', { name: '編集' });
  await button.waitFor(); // 編集ボタンが表示されるまで待機
  await button.click();
  await page.getByRole('button', { name:  '+ 希望職種を選択' }).click();
  await page.getByLabel('希望職種を選択してください（最大3つまで）').getByPlaceholder('選択してください').click();
  await page.getByRole('option', { name: jobOptionName, exact: true }).click();
  await page.getByLabel(jobLabelName).check();
  await page.getByRole('button', { name: '完了' }).click();

    // 希望業種の設定
  await page.getByRole('button', { name: '+ 希望業種を選択' }).click();
  await page.getByLabel('希望業種を選択してください（最大2つまで）').getByPlaceholder('選択してください').click();
  await page.getByRole('option', { name: industryOptionName }).click();
  await page.getByLabel(industryLabelName).check();
  await page.getByRole('button', { name: '完了' }).click();

  // その他の希望条件の設定
  await page.getByLabel(locationLabelName).check();
  await page.getByLabel(globalBusinessLabelName).click();
  await page.getByLabel(stockOptionsLabelName).check();
  await page.getByLabel(socialContributionLabelName).check();
  await page.getByLabel(managementLabelName).check();
  
  // 保存
  await page.getByRole('button', { name: '保存' }).click();

  //　保存した後自動に希望条件画面に遷移したかを確認
  const targetURL = 'https://www.bizreach.jp/resume/desire/';
  await page.waitForTimeout(3000);
  expect(page.url()).toBe(targetURL);

  //　アフター処理:保存した希望条件を解除して保存
  await button.click();
  await page.getByRole('button', { name: jobLabelName }).getByRole('button').click();
  await page.getByRole('button', { name: industryLabelName }).getByRole('button').click();
  await page.getByLabel(locationLabelName).check();
  await page.getByLabel(globalBusinessLabelName).click();
  await page.getByLabel(stockOptionsLabelName).check();
  await page.getByLabel(socialContributionLabelName).check();
  await page.getByLabel(managementLabelName).check();
  await page.getByRole('button', { name: '保存' }).click();
});