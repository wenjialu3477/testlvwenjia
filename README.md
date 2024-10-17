1.BizReach求人検索条件設定テスト

setHopedJobCondition.spec.ts



テスト内容：
ビスリーチの求人検索条件設定機能が正常に動くかを確認する

テスト手順：

・ビズリーチにログインする

・求人検索条件の変更画面へ遷移する

・職種を入力する

・業種を入力する

・勤務地を入力する

・他の条件を入力する

・保存ボタンを押下する

・求人検索ページへ遷移する

・入力した検索条件が保存されたかを確認する（削除ボタン、保存日が表示されているかを確認する）


期待結果：
削除ボタン、保存日が表示されていること




2.BizReach希望求人条件の設定テスト

setSearchingJobConditions.spec.ts



テスト内容：
ビスリーチの希望求人情報の条件設定機能が正常に動くかを確認する

テスト手順：
・ビズリーチにログインする

・職務経歴書画面へ遷移する

・希望条件リンクを押下する

・希望職種を設定する

・希望業種を設定する

・その他の希望条件を設定する

・保存ボタンを押下する

・保存した後自動に希望条件画面に遷移したかを確認する

後処理：
・保存した希望条件を削除して保存する

期待結果：
保存した後自動に希望条件画面に遷移したこと
