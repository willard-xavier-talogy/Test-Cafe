"@fixture Basic Running 360 User - Needs Fixing";
"@page https://uat.apollo.adc.uk.com";

"@test"["Basic Running 360 Lived"] = {
    '1.Type in input "Username*"': function() {
        act.type("#txtUsername", "QA4wxwxexample4");
    },
    '2.Type in password input "Password*"': function() {
        act.type("#txtPassword", "Brown72house");
    },
    '3.Click button "Login"': function() {
        act.click("#btnSubmit");

    },
    '8.Click submit button "Start"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)").eq(0);
        };
        act.click(actionTarget);
    },
    '9.Click submit button "Nominate Raters"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnRater$/)");
    },
    '10.Type in input "First Name"': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_MainContent_txtFirstName$/)", "qa");
    },
    '11.Type in input "Last Name"': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_MainContent_txtSurname$/)", "example");
    },
    '12.Type in input "Email Address"': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_MainContent_txtEmailAddress$/)", "qa@example.com");
    },
    '13.Type in input "Confirm Email..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_MainContent_txtConfirmEmailAddress$/)", "Q");
    },
    "14.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '15.Type in input "Confirm Email..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_MainContent_txtConfirmEmailAddress$/)", "qa@example.com");
    },
    '21.Click submit button "Invite"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnAddRater$/)");
    },
    '22.Click submit button "Exit Task"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnAllDone$/)");
    },
    '23.Click submit button "Start"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)").eq(1);
        };
        act.click(actionTarget);
    },
    '24.Click submit button "Start Questionnaire"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnpQSelf1$/)");
    },
    '25.Click radio button "To a very..."': function() {
        act.click("#rblCompetenciesBody_9332_4");
    },
    '26.Click radio button "To a very..."': function() {
        act.click("#rblCompetenciesBody_9335_4");
    },
    '27.Click radio button "To a very..."': function() {
        act.click("#rblCompetenciesBody_9341_4");
    },
    '28.Click radio button "To a very..."': function() {
        act.click("#rblCompetenciesBody_9344_4");
    },
    '29.Click radio button "To a very..."': function() {
        act.click("#rblCompetenciesBody_9346_4");
    },
    '30.Click radio button "To a very..."': function() {
        act.click("#rblCompetenciesBody_9352_4");
    },
    '31.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '32.Click radio button "To a great extent"': function() {
        act.click("#rblCompetenciesBody_9354_3");
    },
    '33.Click radio button "To a great extent"': function() {
        act.click("#rblCompetenciesBody_9359_3");
    },
    '34.Click radio button "To a great extent"': function() {
        act.click("#rblCompetenciesBody_9362_3");
    },
    '35.Click radio button "To a great extent"': function() {
        act.click("#rblCompetenciesBody_9366_3");
    },
    '36.Click radio button "To a great extent"': function() {
        act.click("#rblCompetenciesBody_9371_3");
    },
    '37.Click radio button "To a great extent"': function() {
        act.click("#rblCompetenciesBody_9377_3");
    },
    '38.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '39.Click radio button "Not Observed"': function() {
        act.click("#rblCompetenciesBody_9378_5");
    },
    '40.Click radio button "Not Observed"': function() {
        act.click("#rblCompetenciesBody_9382_5");
    },
    '41.Click radio button "Not Observed"': function() {
        act.click("#rblCompetenciesBody_9386_5");
    },
    '42.Click radio button "Not Observed"': function() {
        act.click("#rblCompetenciesBody_9331_5");
    },
    '43.Click radio button "Not Observed"': function() {
        act.click("#rblCompetenciesBody_9337_5");
    },
    '44.Click radio button "Not Observed"': function() {
        act.click("#rblCompetenciesBody_9338_5");
    },
    '45.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '46.Click radio button "To a small extent"': function() {
        act.click("#rblCompetenciesBody_9343_1");
    },
    '47.Click radio button "To a small extent"': function() {
        act.click("#rblCompetenciesBody_9348_1");
    },
    '48.Click radio button "To a small extent"': function() {
        act.click("#rblCompetenciesBody_9351_1");
    },
    '49.Click radio button "To a small extent"': function() {
        act.click("#rblCompetenciesBody_9355_1");
    },
    '50.Click radio button "To a small extent"': function() {
        act.click("#rblCompetenciesBody_9361_1");
    },
    '51.Click radio button "To a small extent"': function() {
        act.click("#rblCompetenciesBody_9365_1");
    },
    '52.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '53.Click radio button "To a moderate extent"': function() {
        act.click("#rblCompetenciesBody_9368_2");
    },
    '54.Click radio button "To a moderate extent"': function() {
        act.click("#rblCompetenciesBody_9372_2");
    },
    '55.Click radio button "To a moderate extent"': function() {
        act.click("#rblCompetenciesBody_9376_2");
    },
    '56.Click radio button "To a moderate extent"': function() {
        act.click("#rblCompetenciesBody_9379_2");
    },
    '57.Click radio button "To a moderate extent"': function() {
        act.click("#rblCompetenciesBody_9385_2");
    },
    '58.Click radio button "To a moderate extent"': function() {
        act.click("#rblCompetenciesBody_9387_2");
    },
    '59.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '60.Click radio button "To a great extent"': function() {
        act.click("#rblCompetenciesBody_9330_3");
    },
    '61.Click radio button "To a great extent"': function() {
        act.click("#rblCompetenciesBody_9334_3");
    },
    '62.Click radio button "To a great extent"': function() {
        act.click("#rblCompetenciesBody_9339_3");
    },
    '63.Click radio button "To a great extent"': function() {
        act.click("#rblCompetenciesBody_9342_3");
    },
    '64.Click radio button "To a great extent"': function() {
        act.click("#rblCompetenciesBody_9349_3");
    },
    '65.Click radio button "To a great extent"': function() {
        act.click("#rblCompetenciesBody_9353_3");
    },
    '66.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '67.Click radio button "Not at all"': function() {
        act.click("#rblCompetenciesBody_9356_0");
    },
    '68.Click radio button "Not at all"': function() {
        act.click("#rblCompetenciesBody_9360_0");
    },
    '69.Click radio button "Not at all"': function() {
        act.click("#rblCompetenciesBody_9364_0");
    },
    '70.Click radio button "Not at all"': function() {
        act.click("#rblCompetenciesBody_9367_0");
    },
    '71.Click radio button "Not at all"': function() {
        act.click("#rblCompetenciesBody_9370_0");
    },
    '72.Click radio button "Not at all"': function() {
        act.click("#rblCompetenciesBody_9375_0");
    },
    '73.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '74.Click radio button "To a very..."': function() {
        act.click("#rblCompetenciesBody_9380_4");
    },
    '75.Click radio button "To a very..."': function() {
        act.click("#rblCompetenciesBody_9384_4");
    },
    '76.Click radio button "To a very..."': function() {
        act.click("#rblCompetenciesBody_9388_4");
    },
    '77.Click radio button "To a very..."': function() {
        act.click("#rblCompetenciesBody_9333_4");
    },
    '78.Click radio button "To a very..."': function() {
        act.click("#rblCompetenciesBody_9336_4");
    },
    '79.Click radio button "To a very..."': function() {
        act.click("#rblCompetenciesBody_9340_4");
    },
    '80.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '81.Click radio button "To a moderate extent"': function() {
        act.click("#rblCompetenciesBody_9345_2");
    },
    '82.Click radio button "To a moderate extent"': function() {
        act.click("#rblCompetenciesBody_9347_2");
    },
    '83.Click radio button "To a moderate extent"': function() {
        act.click("#rblCompetenciesBody_9350_2");
    },
    '84.Click radio button "To a moderate extent"': function() {
        act.click("#rblCompetenciesBody_9357_2");
    },
    '85.Click radio button "To a moderate extent"': function() {
        act.click("#rblCompetenciesBody_9358_2");
    },
    '86.Click radio button "To a moderate extent"': function() {
        act.click("#rblCompetenciesBody_9363_2");
    },
    '87.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '88.Click radio button "To a small extent"': function() {
        act.click("#rblCompetenciesBody_9369_1");
    },
    '89.Click radio button "To a small extent"': function() {
        act.click("#rblCompetenciesBody_9373_1");
    },
    '90.Click radio button "To a small extent"': function() {
        act.click("#rblCompetenciesBody_9374_1");
    },
    '91.Click radio button "To a small extent"': function() {
        act.click("#rblCompetenciesBody_9381_1");
    },
    '92.Click radio button "To a small extent"': function() {
        act.click("#rblCompetenciesBody_9383_1");
    },
    '93.Click radio button "To a small extent"': function() {
        act.click("#rblCompetenciesBody_9389_1");
    },
    '94.Click submit button "Finish"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnFinish$/)");
    },
    '95.Click submit button "Submit"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '96.Click submit button "Return to Task List"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnReturn$/)");
    },
    '97.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    },
    '98.Click link "Login"': function() {
        act.click("#ApolloHyperLink1");
    }
};