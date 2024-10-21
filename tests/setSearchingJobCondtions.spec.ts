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
const locationLabelName = '大阪府';
const stockOptionsLabelName = 'ストックオプションが欲しい';
const socialContributionLabelName = '社会に貢献したい';
const managementLabelName = 'マネジメントをしたい';

//　希望年収に関する設定
const salaryCondtions = '問わない（上下限なし）';

// 転職希望時期に関する設定
const jobChangeTiming = '3カ月以内に';

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
  //await page.locator('//*[@id="__next"]/section/section/main/div/div[3]/div[2]/div/section/form/div[1]/section[1]/div/button').click();
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
  await page.getByLabel(stockOptionsLabelName).check();
  await page.getByLabel(socialContributionLabelName).check();
  await page.getByLabel(managementLabelName).check();

  // 希望年収の設定
  await page.locator('xpath=//*[@id="__next"]/section/section/main/div/div[3]/div[2]/div/section/form/div[1]/section[5]/div/div/div').click();
  await page.getByRole('option', { name: salaryCondtions }).click();

  //　転職希望時期の設定
  await page.locator('xpath=//*[@id="__next"]/section/section/main/div/div[3]/div[2]/div/section/form/div[1]/section[6]/div/div/div').click();
  await page.getByRole('option', { name: jobChangeTiming }).click();

  // 保存
  await page.getByRole('button', { name: '保存' }).click();

  //　保存した後、入力した内容が表示されているかを確認
  //　希望職種
  const textLocator1 = page.locator(`text=${jobLabelName}`);
  const isTextVisible1 = await textLocator1.isVisible();
  expect(isTextVisible1).toBeTruthy();
  //　希望業種
  const textLocator2 = page.locator(`text=${industryLabelName}`);
  const isTextVisible2 = await textLocator2.isVisible();
  expect(isTextVisible2).toBeTruthy();
  //　希望勤務地
  const textLocator3 = page.locator(`text=${locationLabelName}`);
  const isTextVisible3 = await textLocator3.isVisible();
  expect(isTextVisible3).toBeTruthy();
  //　興味がある働き方
  const textLocator4 = page.locator(`text=${stockOptionsLabelName}`);
  const isTextVisible4 = await textLocator4.isVisible();
  expect(isTextVisible4).toBeTruthy();
  const textLocator5 = page.locator(`text=${socialContributionLabelName}`);
  const isTextVisible5 = await textLocator5.isVisible();
  expect(isTextVisible5).toBeTruthy();
  const textLocator6 = page.locator(`text=${managementLabelName}`);
  const isTextVisible6 = await textLocator6.isVisible();
  expect(isTextVisible6).toBeTruthy();
  //　希望年収
  const textLocator7 = page.locator(`text=${salaryCondtions}`);
  const isTextVisible7 = await textLocator7.isVisible();
  expect(isTextVisible7).toBeTruthy();
  //　転職希望時期
  const textLocator8 = page.locator(`text=${jobChangeTiming}`);
  const isTextVisible8 = await textLocator8.isVisible();
  expect(isTextVisible8).toBeTruthy();
});
