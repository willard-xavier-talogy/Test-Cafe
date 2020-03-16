import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://uat.cubiksonline.com/CubiksOnline/Standalone/ALogon.aspx?skin=996+176`;

test('Basic cubik search User', async t => {
    await t
        .typeText(Selector('#master_cmpBody_controlUserName'), 'Willard Xavier')
        .typeText(Selector('#master_cmpBody_controlPassword'), 'Brown72@house')
        .click(Selector('#master_cmpBody_controlNavLogin'))
        .typeText(Selector('#master_cmpBody_controlSearchByName'), 'qa')
        .click(Selector('#master_cmpBody_controlSearchByNameButton'));
});