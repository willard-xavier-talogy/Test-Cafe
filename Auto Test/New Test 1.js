import { Selector } from 'testcafe';

fixture `QAjunk`
    .page `https://uat.apolloadministration.adc.uk.com/`;

test('New Test 1', async t => {
    await t
        .typeText(Selector('input').withAttribute('id', /ctl\d+_ContentPlaceHolder1_txtUsername/), 'qatesting1')
        .rightClick(Selector('input').withAttribute('id', /ctl\d+_ContentPlaceHolder1_txtPassword/))
        .click(Selector('input').withAttribute('id', /ctl\d+_ContentPlaceHolder1_txtPassword/))
        .click('#btnLogin')
        .click(Selector('input').withAttribute('id', /ctl\d+_ContentPlaceHolder1_txtPassword/))
        .wait(10);
});