"@fixture Participants Site Email";
"@page https://uat.apollo.adc.uk.com";

"@test"["Reset Participants Website Password"] = {
    '1.Click span "Forgotten or lost..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_ApolloLabel10$/)");
    },
    '2.Type in input "Username*"': function() {
        act.type("#txtUsernameForReset", "QAwx4Example4bwx13");
    },
    '3.Click input "Email Address*"': function() {
        act.click("#txtEmailAddress");
    },
    '4.Type in input "Email Address*"': function() {
        act.type("#txtEmailAddress", "qa1wx@example4b.net");
    },
    '5.Click button "Reset Password"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnResetPassword$/)");
    },
    '6.Click button "Cancel"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnCancelReset$/)");
    }
};

