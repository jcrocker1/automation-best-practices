import { test, expect, Response } from '@playwright/test';

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.getByText('Get Started');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('homepafdfge has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  
  await page.route('**/*', async (route, request) => {

   const headers = route.request().headers();

    

      route.continue({
        headers: {
          ...headers,
          'x-jpkeya1290asd00123jkasd89': '1l'
        },
      });

  });

  await page.route('https://api.staging.juiceplus.com/graphql', async (route, request) => {

    const headers = route.request().headers();
 
     // Fetch original response.
     let requestBody = request.postData() as string;
     const response = await page.request.fetch(route.request(), {
           headers: {
             ...headers,
             'x-jpkeya1290asd00123jkasd89': 'text/html',
           },
         })
     // Add a prefix to the title.
     let body = await response.text();
     const mock = { animals: [] };
     if (requestBody.includes('getCurrentUser')) {
       // body = JSON.stringify(mock);
       body = body.replace("TODDRICK", "Jaron");
     } else {
       body = body;
     }
 
     route.fulfill({
       // Pass all fields from the response.
       response,
       // Override response body.
       body: body,
       // Force content type to be html.
       headers: {
         ...response.headers(),
         'x-jpkeya1290asd00123jkasd89': 'text/html'
       },
     });
 
   });

//   // Delete header
// await page.route('**/*', route => {
//   const headers = route.request().headers();
//   route.continue({
//     headers: {
//       ...headers,
//       'X-E2E-USER': 'fake-user@e2e.com',
//     },
//   });
// });

  // await page.goto('https://playwright.dev/');

  await page.goto('https://www.staging.juiceplus.com/us/en/login/partner/');
  
  // // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Juice/);

  async function isFinished(response: Response) {
    if (response.url().includes('graph')) {
      console.log(await response.json());
      console.log(response.request().postData());
      console.log((await response.json()).data?.results?.data?.partnerId);
    }
    return response.url().includes('graph') && response.status() === 200 && (await response.json()).data?.results?.data?.partnerId === 'USM0025620'
  }

  async function isFinished2(response: Response, text: string) {
    if (response.url().includes('graph')) { 
      // console.log(await response.json());
      console.log(response.request().postData());
      // console.log((await response.json()).data?.checkoutCurrentCartFlat?.error?.translationKey);
    }
    return response.url().includes('graph') && response.status() === 200 && response.request().postData()!.includes(text)
  }

  const userName = page.locator("[data-test-id='login-email']");
  const passWord = page.locator("[data-test-id='login-password']");
  const submitButton = page.locator("[data-test-id='login-submit']");
  const shopTab = page.locator("[href='/us/en/portal/shop']");
  const jpCard = page.locator("[href='/us/en/portal/shop/juiceplus-order']");
  const personalOrderLink = page.getByText("Ordering for yourself?");
  const itemButton = page.locator("xpath=(//*[@class='m-shop-products-item-type__actions'])[1]");
  const reviewOrderButton = page.getByText("Review Order");
  const checkoutButton = page.locator("[data-testid='button-checkout']");
  const cardNumber = page.locator("[data-testid='visa.payment.cardNumber']");
  const expDate = page.locator("[data-testid='visa.payment.expiryDate']");
  const cvv = page.locator("[data-testid='visa.payment.cvv']");
  const terms = page.getByText("hereby");
  const confirmOrder = page.getByText("Confirm order");
  const paymentDecline = page.locator(".m-credit-card-selection-container__alert");
  const orderId = page.locator(".m-checkout-confirmation__order-number");
  const cookieBar = page.locator(".m-cookie-bar__button");

  console.log("test");

  await cookieBar.click();
  await userName.type("wddot");
  await passWord.type("wddot");
  await submitButton.click();
  await shopTab.click();
  await jpCard.click();
  await page.waitForResponse(async (response) => await isFinished2(response, "getCurrentUser"));
  await page.waitForTimeout(1000);
  await personalOrderLink.click();
  await itemButton.click()
  await reviewOrderButton.click();
  await checkoutButton.click();
  await page.waitForTimeout(5000);
  await cardNumber.type("4242424242424242");
  await expDate.type("1222");
  await cvv.type("123");
  await terms.check();
  await confirmOrder.click();
  await page.waitForResponse(async (response) => await isFinished2(response, "checkoutCurrentCartFlat"));
  await orderId.click();
  await page.close();

  // // create a locator
  // const getStarted = page.getByText('Get Stasssrted');

  // // Expect an attribute "to be strictly equal" to the value.
  // await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // // Click the get started link.
  // await getStarted.click();

  // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*juice/);
});
