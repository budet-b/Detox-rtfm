describe('Init', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome rtfm screen', async () => {
    await expect(element(by.id('text-helloRTFM'))).toBeVisible();
  });

  it('should have welcome rtfm screen with label', async () => {
    await expect(element(by.id('text-helloRTFM'))).toHaveText('Hello RTFM !');
  });
  it('should have second screen button', async () => {
    await expect(element(by.id('secondScreenButton'))).toBeVisible();
  });
});

describe('Go SecondScreen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should go to second screen', async () => {
    await element(by.id('secondScreenButton')).tap();
    await expect(element(by.id('secondScreenView'))).toBeVisible();
    await expect(element(by.id('goBackButton'))).toBeVisible();
    await expect(element(by.id('showLoginButton'))).toBeVisible();
  });
});

describe('Login', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it('should go to login screen', async () => {
    await element(by.id('secondScreenButton')).tap();
    await element(by.id('showLoginButton')).tap();
    await expect(element(by.id('fakeLoginView'))).toBeVisible();
  });

  it('should fail login', async () => {
    await element(by.id('secondScreenButton')).tap();
    await element(by.id('showLoginButton')).tap();
    await expect(element(by.id('usernameInput'))).toBeVisible();
    await expect(element(by.id('passwordInput'))).toBeVisible();
    await element(by.id('usernameInput')).typeText('hello rtfm');
    await element(by.id('passwordInput')).typeText('hello rtfm');
    await element(by.id('handleLogin')).tap();
    await expect(element(by.id('errorDisplay'))).toBeVisible();
  });

  it('should success login', async () => {
    await element(by.id('secondScreenButton')).tap();
    await element(by.id('showLoginButton')).tap();
    await expect(element(by.id('usernameInput'))).toBeVisible();
    await expect(element(by.id('passwordInput'))).toBeVisible();
    await element(by.id('usernameInput')).typeText('rtfm');
    await element(by.id('passwordInput')).typeText('rtfm');
    await element(by.id('handleLogin')).tap();
    await expect(element(by.id('homeScreenView'))).toBeVisible();
  });
});
