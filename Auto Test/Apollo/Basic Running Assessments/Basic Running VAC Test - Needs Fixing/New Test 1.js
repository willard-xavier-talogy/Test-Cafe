import { Selector } from 'testcafe';

fixture `VitorTest`
    .page `https://uat.apollo.adc.uk.com`;

test('New Test 1', async t => {
    await t
        .drag(Selector('span').withAttribute('id', /ctl\d+_MainContent_ApolloLabel9/), 442, -9, {
            offsetX: 0,
            offsetY: 7
        })
        .pressKey('ctrl+c')
        .click(Selector('#txtUsername'))
        .pressKey('ctrl+v');
});