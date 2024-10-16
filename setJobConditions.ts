import { Page } from '@playwright/test';

export async function searchAndSaveJobConditions(page: Page) {
  const firstCategory = { linkText: 'コンサルタント・専門職', subCategoryText: '物流コンサルタント' };
  const secondCategory = { linkText: 'メーカー・商社', subCategoryText: '精密・計測機器' };
  const regionLabel = '北陸・甲信越';
  const availabilityLabel = '可能';
  const incomeOption = 'C6';
  const employerLabel = '採用企業案件のみ';
  const unapplicantLabel = '未応募';
  const searchLinkText = '求人検索';
  const modifyConditionsLinkText = '検索条件を変更する';
  const saveConditionsLinkText = '検索条件を上書き保存する';
  const savedConditionsLinkText = '保存した検索条件';
  const deleteText = '削除';
  const saveDateText = '保存日';

  // 求人検索条件の変更画面へ遷移
  await page.getByRole('link', { name: searchLinkText, exact: true }).click();
  await page.getByRole('link', { name: modifyConditionsLinkText }).click();
  await page.getByText('検索条件をリセットする').click();

  // 職種を入力 
  await page.getByRole('row', { name: ' 職種 +' }).getByRole('link').click();
  await page.getByRole('link', { name: firstCategory.linkText }).click();
  await page.getByLabel(firstCategory.subCategoryText).click();
  await page.getByRole('link', { name: '決定' }).click();

  // 業種を入力 
  await page.getByRole('row', { name: ' 業種 +' }).getByRole('link').click();
  await page.getByRole('link', { name: secondCategory.linkText }).click();
  await page.getByLabel(secondCategory.subCategoryText).click();
  await page.getByRole('link', { name: '決定' }).click();

  // 勤務地を入力
  await page.getByRole('row', { name: ' 勤務地 +' }).getByRole('link').click();
  await page.getByLabel(regionLabel).check();
  await page.getByRole('link', { name: 'チェック項目を保存' }).click();

  // 他の条件を入力
  await page.getByLabel(availabilityLabel, { exact: true }).check();
  await page.locator('#selectIncomeCd').selectOption(incomeOption);
  await page.getByLabel(employerLabel).check();
  await page.getByLabel(unapplicantLabel).check();

  // 保存
  await page.getByRole('link', { name: saveConditionsLinkText }).click();

  // 求人検索ページへ遷移、入力した検索条件が保存されたかを確認
  await page.getByRole('link', { name: savedConditionsLinkText }).click();

  // '削除' ボタンが表示されているかを確認
  const isDeleteVisible = await page.getByText(deleteText).isVisible();
  console.log(`'削除' is ${isDeleteVisible ? 'visible' : 'not visible'}`);

  // '保存日' が表示されているかを確認
  const isSaveDateVisible = await page.getByText(saveDateText).isVisible();
  console.log(`'保存日' is ${isSaveDateVisible ? 'visible' : 'not visible'}`);
}