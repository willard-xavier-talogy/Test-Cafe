"@fixture Apollo V2 Running";
"@page https://csr.devapolloassessment.adc.uk.com/admin/Login?ReturnUrl=%2Fadmin%2F";

"@test"["Running New STD "] = {
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click submit button "Manage"': function() {
        act.click("body > main:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > form:nth(1) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(9) > button:nth(0)");
    },
        '6. Visit first candidate link': function() {
        var link = $("#projects-list >tbody > tr:first td:nth(2) > span")[0].textContent;
        act.navigateTo(link);
        },
    "144.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
   '1.Click submit button "Continue"': function() {
        act.click(".button");

    },
    "2.Click submit button": function() {
        act.click("#complete");
    },
    "3.Click submit button": function() {
        act.click("#next");
    },
    '4.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "5.Click submit button": function() {
        act.click("#next");
    },
    "6.Click submit button": function() {
        act.click("#next");
    },
    '7.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "8.Click submit button": function() {
        act.click("#next");
    },
    '9.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "10.Click submit button": function() {
        act.click("#next");
    },
    '11.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "12.Click submit button": function() {
        act.click("#next");
    },
    '13.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "14.Click submit button": function() {
        act.click("#next");
    },
    '15.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "16.Click submit button": function() {
        act.click("#next");
    },
    '17.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "18.Click submit button": function() {
        act.click("#next");
    },
    '19.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "20.Click submit button": function() {
        act.click("#next");
    },
    '21.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "22.Click submit button": function() {
        act.click("#next");
    },
    '23.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "24.Click submit button": function() {
        act.click("#next");
    },
    '25.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "26.Click submit button": function() {
        act.click("#next");
    },
    '27.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "28.Click submit button": function() {
        act.click("#next");
    },
    '29.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "30.Click submit button": function() {
        act.click("#next");
    },
    '31.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "32.Click submit button": function() {
        act.click("#next");
    },
    '33.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "34.Click submit button": function() {
        act.click("#next");
    },
    '35.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "36.Click submit button": function() {
        act.click("#next");
    },
    '37.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "38.Click submit button": function() {
        act.click("#next");
    },
    '39.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "40.Click submit button": function() {
        act.click("#next");
    },
    '41.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "42.Click submit button": function() {
        act.click("#next");
    },
    '43.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "44.Click submit button": function() {
        act.click("#next");
    },
    '45.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "46.Click submit button": function() {
        act.click("#next");
    },
    "47.Click submit button": function() {
        act.click("#complete");
    },
    "48.Click submit button": function() {
        act.click("#next");
    },
    "49.Click submit button": function() {
        act.click("#next");
    },
    "50.Click submit button": function() {
        act.click("#next");
    },
    '51.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '52.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '53.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '54.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "55.Click submit button": function() {
        act.click("#next");
    },
    "56.Click submit button": function() {
        act.click("#next");
    },
    '57.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '58.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '59.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '60.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "61.Click submit button": function() {
        act.click("#next");
    },
    '62.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '63.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '64.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '65.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "66.Click submit button": function() {
        act.click("#next");
    },
    '67.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '68.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '69.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '70.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "71.Click submit button": function() {
        act.click("#next");
    },
    '72.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '73.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '74.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '75.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "76.Click submit button": function() {
        act.click("#next");
    },
    '77.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '78.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '79.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '80.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "81.Click submit button": function() {
        act.click("#next");
    },
    '82.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '83.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '84.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '85.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "86.Click submit button": function() {
        act.click("#next");
    },
    "87.Click submit button": function() {
        act.click("#next");
    },
    "88.Click submit button": function() {
        act.click("#next");
    },
    '89.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '90.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '91.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '92.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "93.Click submit button": function() {
        act.click("#next");
    },
    "94.Click submit button": function() {
        act.click("#next");
    },
    '95.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '96.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '97.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '98.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "99.Click submit button": function() {
        act.click("#next");
    },
    '100.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '101.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '102.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '103.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "104.Click submit button": function() {
        act.click("#next");
    },
    '105.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '106.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '107.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '108.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "109.Click submit button": function() {
        act.click("#next");
    },
    '110.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '111.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '112.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '113.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "114.Click submit button": function() {
        act.click("#next");
    },
    '115.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '116.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '117.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '118.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "119.Click submit button": function() {
        act.click("#next");
    },
    '120.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '121.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '122.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '123.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "124.Click submit button": function() {
        act.click("#next");
    },
    '125.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '126.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '127.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '128.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "129.Click submit button": function() {
        act.click("#next");
    },
    '130.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '131.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '132.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '133.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "134.Click submit button": function() {
        act.click("#next");
    },
    '135.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '136.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '137.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '138.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "139.Click submit button": function() {
        act.click("#next");
    },
    '140.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '141.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '142.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '143.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "144.Click submit button": function() {
        act.click("#next");
    },
    '145.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '146.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '147.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '148.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "149.Click submit button": function() {
        act.click("#next");
    },
    '150.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '151.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '152.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '153.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "154.Click submit button": function() {
        act.click("#next");
    }
};

"@test"["qa restesting"] = {
    '1.Click submit button "Continue"': function() {
        act.click(".button");
    },
    "2.Click submit button": function() {
        act.click("#complete");
    },
    "3.Click submit button": function() {
        act.click("#next");
    },
    '4.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "5.Click submit button": function() {
        act.click("#next");
    },
    "6.Click submit button": function() {
        act.click("#next");
    },
    '7.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "8.Click submit button": function() {
        act.click("#next");
    },
    '9.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "10.Click submit button": function() {
        act.click("#next");
    },
    '11.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "12.Click submit button": function() {
        act.click("#next");
    },
    '13.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "14.Click submit button": function() {
        act.click("#next");
    },
    '15.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "16.Click submit button": function() {
        act.click("#next");
    },
    '17.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "18.Click submit button": function() {
        act.click("#next");
    },
    '19.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "20.Click submit button": function() {
        act.click("#next");
    },
    '21.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "22.Click submit button": function() {
        act.click("#next");
    },
    '23.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "24.Click submit button": function() {
        act.click("#next");
    },
    '25.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "26.Click submit button": function() {
        act.click("#next");
    },
    '27.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "28.Click submit button": function() {
        act.click("#next");
    },
    '29.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "30.Click submit button": function() {
        act.click("#next");
    },
    '31.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "32.Click submit button": function() {
        act.click("#next");
    },
    '33.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "34.Click submit button": function() {
        act.click("#next");
    },
    '35.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "36.Click submit button": function() {
        act.click("#next");
    },
    '37.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "38.Click submit button": function() {
        act.click("#next");
    },
    '39.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "40.Click submit button": function() {
        act.click("#next");
    },
    '41.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "42.Click submit button": function() {
        act.click("#next");
    },
    '43.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "44.Click submit button": function() {
        act.click("#next");
    },
    '45.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "46.Click submit button": function() {
        act.click("#next");
    },
    "47.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "48.Click submit button": function() {
        act.click("#complete");
    },
    "49.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "50.Click submit button": function() {
        act.click("#next");
    },
    "51.Click submit button": function() {
        act.click("#next");
    },
    "52.Click submit button": function() {
        act.click("#next");
    },
    '53.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '54.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '55.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '56.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "57.Click submit button": function() {
        act.click("#next");
    },
    "58.Click submit button": function() {
        act.click("#next");
    },
    '59.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '60.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '61.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '62.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "63.Click submit button": function() {
        act.click("#next");
    },
    '64.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '65.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '66.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '67.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "68.Click submit button": function() {
        act.click("#next");
    },
    '69.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '70.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '71.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '72.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "73.Click submit button": function() {
        act.click("#next");
    },
    "74.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "75.Click submit button": function() {
        act.click("#next");
    },
    "76.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "77.Click submit button": function() {
        act.click("#next");
    },
    '78.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '79.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '80.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '81.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "82.Click submit button": function() {
        act.click("#next");
    },
    "83.Click submit button": function() {
        act.click("#next");
    },
    '84.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '85.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '86.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '87.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "88.Click submit button": function() {
        act.click("#next");
    },
    '89.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '90.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '91.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '92.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "93.Click submit button": function() {
        act.click("#next");
    },
    '94.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '95.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '96.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '97.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "98.Click submit button": function() {
        act.click("#next");
    },
    '99.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '100.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '101.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '102.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "103.Click submit button": function() {
        act.click("#next");
    },
    '104.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '105.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '106.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '107.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "108.Click submit button": function() {
        act.click("#next");
    },
    '109.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '110.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '111.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '112.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "113.Click submit button": function() {
        act.click("#next");
    },
    '114.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '115.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '116.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '117.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "118.Click submit button": function() {
        act.click("#next");
    },
    '119.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '120.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '121.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '122.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "123.Click submit button": function() {
        act.click("#next");
    },
    '124.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '125.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '126.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '127.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "128.Click submit button": function() {
        act.click("#next");
    },
    '129.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '130.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '131.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '132.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "133.Click submit button": function() {
        act.click("#next");
    },
    '134.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '135.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '136.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '137.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "138.Click submit button": function() {
        act.click("#next");
    },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
    },
    "144.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "145.Click submit button": function() {
        act.click("#complete");
    }
};