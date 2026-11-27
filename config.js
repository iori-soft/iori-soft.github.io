// サイトの設定はここだけで変える (ページの中に直接書かない)
// 空欄 ("") のものは、ページ上で「準備中」と表示されます。
window.URLL_SITE = {
  minMacOS: "macOS 14 以降",

  // サイトに出すバージョン番号と、ダウンロードする DMG (サイトの一番上に置く URLL-v<バージョン番号>.dmg)。
  // この 2 行は tools/build-dmg.sh が新しい DMG を作ったときに書き換える。サイトだけ直すときは変えない
  version: "0.008",
  dmg: "URLL-v0.008.dmg",

  // ソースコード (GitHub リポジトリ) の URL。公開したら入れる
  sourceUrl: "https://github.com/iori-soft/URLL",

  // X (旧 Twitter) のアカウント URL
  xUrl: "https://x.com/iori_soft",

  // 応援ボタン(メイン): PayPal の支払いページ
  // 日本語のページ用 (円)
  coffeeUrl: "https://www.paypal.com/ncp/payment/ZE3V7STJE6Z2S",
  // 英語のページ用 (USD)。空欄なら英語でも上の coffeeUrl を使う
  coffeeUrlEn: "https://www.paypal.com/ncp/payment/AFT8Z9J8Y6QMJ",

  // 応援ボタン(サブ): Ko-fi のページ
  kofiUrl: "https://ko-fi.com/iorisoft"
};
