const fs = require('fs');
const path = require('path');

const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const DRIVER_PATH = path.join(__dirname, 'webdriver/chromedriver');
const DRIVER_DEFAULT_IMPLICIT_TIMEOUT_MS = 500;

const PROFIT_WEB_URL = 'http://127.0.0.1:5500/profit-page/Profit!.html';

(async function run() {
  if (process.argv.length < 3) {
    console.error('Error: No import file passed as first argument.');
    process.exit(1);
  }

  const importFilePath = path.resolve(process.argv[2]);
  if (!fs.existsSync(importFilePath)) {
    console.error('Error: Given import file not found on disk.');
    process.exit(1);
  }

  const service = new chrome.ServiceBuilder(DRIVER_PATH);

  const driver = new Builder()
    .forBrowser('chrome')
    .setChromeService(service)
    .build();

  await driver
    .manage()
    .setTimeouts({ implicit: DRIVER_DEFAULT_IMPLICIT_TIMEOUT_MS });

  await driver.get(PROFIT_WEB_URL);

  const importBtn = await driver.findElement(
    By.xpath("//Button[text()='Import']")
  );

  await importBtn.click();

  const fileImportInput = await driver.findElement(By.id('fileSelect'));
  fileImportInput.sendKeys(importFilePath);

  const runBtn = await driver.findElement(By.xpath("//Button[text()='Run']"));
  await runBtn.click();

  // Falls der Fehler geworfen wird dass die scoreBox nicht gefunden wird, liegt das entweder an einem Fehler in der Datei,
  // oder der die Auswertung dauert länger als DRIVER_DEFAULT_IMPLICIT_TIMEOUT_MS. Für den letzten Fall einfach folgende
  // Zeile einkommentieren und entsprechende Wartezeit in Millisekunden definieren.
  // await driver.sleep(500);

  const scoreBox = await driver.findElement(
    By.xpath("//li[starts-with(., 'Score: ')]")
  );

  scoreText = await scoreBox.getText();

  console.log(scoreText);

  // Zum debuggen auskommentieren, dann bleibt der von Selenium geöffnete Browser offen nach dem Run.
  await driver.quit();
})();
