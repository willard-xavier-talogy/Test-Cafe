"@fixture CSJT V2";
"@page https://csr.devapolloassessment.adc.uk.com/assessment/v2/authenticate/df83fd20-7915-4d86-ac9c-aa00658abcf9";

"@test"["Basic "] = {
    '1.Click submit button "Continue"': function() {
        act.click(".govuk-button.main-button");
    },
    "2.Drag submit button": function() {
        act.drag("#complete", 10, 21, {
            offsetX: 53,
            offsetY: 11
        });
    },
    "3.Click submit button": function() {
        act.click("#next");
    },
    '4.Click radio button "Completely Agree"': function() {
        act.click("#EXAMPLE_QUESTION-COMP_AGR");
    },
    "5.Click submit button": function() {
        act.click("#next");
    },
    "6.Click submit button": function() {
        act.click("#next");
    },
    '7.Click radio button "Completely Agree"': function() {
        act.click("#A1_04-COMP_AGR");
    },
    "8.Click submit button": function() {
        act.click("#next");
    },
    '9.Click radio button "Completely Agree"': function() {
        act.click("#A2_01-COMP_AGR");
    },
    "10.Click submit button": function() {
        act.click("#next");
    },
    '11.Click radio button "Completely Agree"': function() {
        act.click("#A2_02-COMP_AGR");
    },
    "12.Click submit button": function() {
        act.click("#next");
    },
    '13.Click radio button "Completely Agree"': function() {
        act.click("#A4_01-COMP_AGR");
    },
    "14.Click submit button": function() {
        act.click("#next");
    },
    '15.Click radio button "Completely Agree"': function() {
        act.click("#A4_06-COMP_AGR");
    },
    "16.Click submit button": function() {
        act.click("#next");
    },
    '17.Click radio button "Completely Agree"': function() {
        act.click("#A4_09_R-COMP_AGR");
    },
    "18.Click submit button": function() {
        act.click("#next");
    },
    '19.Click radio button "Completely Agree"': function() {
        act.click("#A3_10_R-COMP_AGR");
    },
    "20.Click submit button": function() {
        act.click("#next");
    },
    '21.Click radio button "Completely Agree"': function() {
        act.click("#A1_06-COMP_AGR");
    },
    "22.Click submit button": function() {
        act.click("#next");
    },
    '23.Click radio button "Completely Agree"': function() {
        act.click("#A1_10_R-COMP_AGR");
    },
    "24.Click submit button": function() {
        act.click("#next");
    },
    '25.Click radio button "Completely Agree"': function() {
        act.click("#A3_04-COMP_AGR");
    },
    "26.Click submit button": function() {
        act.click("#next");
    },
    '27.Click radio button "Completely Agree"': function() {
        act.click("#E4_04-COMP_AGR");
    },
    "28.Click submit button": function() {
        act.click("#next");
    },
    '29.Click radio button "Completely Agree"': function() {
        act.click("#E3_08_R-COMP_AGR");
    },
    "30.Click submit button": function() {
        act.click("#next");
    },
    '31.Click radio button "Completely Agree"': function() {
        act.click("#E4_06_R-COMP_AGR");
    },
    "32.Click submit button": function() {
        act.click("#next");
    },
    '33.Click radio button "Completely Agree"': function() {
        act.click("#E1_02-COMP_AGR");
    },
    "34.Click submit button": function() {
        act.click("#next");
    },
    '35.Click radio button "Completely Agree"': function() {
        act.click("#E1_05-COMP_AGR");
    },
    "36.Click submit button": function() {
        act.click("#next");
    },
    '37.Click radio button "Completely Agree"': function() {
        act.click("#E2_01-COMP_AGR");
    },
    "38.Click submit button": function() {
        act.click("#next");
    },
    '39.Click radio button "Completely Agree"': function() {
        act.click("#E2_04-COMP_AGR");
    },
    "40.Click submit button": function() {
        act.click("#next");
    },
    '41.Click radio button "Completely Agree"': function() {
        act.click("#E2_08_R-COMP_AGR");
    },
    "42.Click submit button": function() {
        act.click("#next");
    },
    '43.Click radio button "Completely Agree"': function() {
        act.click("#E3_06-COMP_AGR");
    },
    "44.Click submit button": function() {
        act.click("#next");
    },
    '45.Click radio button "Completely Agree"': function() {
        act.click("#E3_07-COMP_AGR");
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
    "51.Drag body": function() {
        act.drag("body", -50, -305, {
            offsetX: 1609,
            offsetY: 776
        });
    },
    '52.Click radio button "Ineffective"': function() {
        act.click("#EXAMPLE_VIDEO_1-02_INEFF");
    },
    '53.Click radio button "Ineffective"': function() {
        act.click("#EXAMPLE_VIDEO_2-02_INEFF");
    },
    '54.Click radio button "Fairly Effective"': function() {
        act.click("#EXAMPLE_VIDEO_3-03_FLYEF");
    },
    '55.Click radio button "Effective"': function() {
        act.click("#EXAMPLE_VIDEO_4-04_EFCTV");
    },
    "56.Click submit button": function() {
        act.click("#next");
    },
    "57.Click submit button": function() {
        act.click("#next");
    },
    '58.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_COMINF_01_A1-04_EFCTV");
    },
    '59.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_COMINF_01_A2-04_EFCTV");
    },
    '60.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_COMINF_01_A3-04_EFCTV");
    },
    '61.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_COMINF_01_A4-04_EFCTV");
    },
    "62.Click submit button": function() {
        act.click("#next");
    },
    '63.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '64.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_COMINF_03_A2-04_EFCTV");
    },
    '65.Click radio button "Ineffective"': function() {
        act.click("#AAAO_Beh_COMINF_03_A3-02_INEFF");
    },
    '66.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_COMINF_03_A4-04_EFCTV");
    },
    "67.Click submit button": function() {
        act.click("#next");
    },
    '68.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_COMINF_04_A1-03_FLYEF");
    },
    '69.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_COMINF_04_A2-04_EFCTV");
    },
    '70.Click radio button "Ineffective"': function() {
        act.click("#AAAO_Beh_COMINF_04_A3-02_INEFF");
    },
    '71.Click radio button "Counterproductive"': function() {
        act.click("#AAAO_Beh_COMINF_04_A4-01_CPROD");
    },
    "72.Click submit button": function() {
        act.click("#next");
    },
    '73.Click radio button "Ineffective"': function() {
        act.click("#AAAO_Beh_WWO_01_A1-02_INEFF");
    },
    '74.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_WWO_01_A2-03_FLYEF");
    },
    '75.Click radio button "Counterproductive"': function() {
        act.click("#AAAO_Beh_WWO_01_A4-01_CPROD");
    },
    '76.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_WWO_01_A3-03_FLYEF");
    },
    "77.Click submit button": function() {
        act.click("#next");
    },
    '78.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_WWO_03_A1-04_EFCTV");
    },
    '79.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_WWO_03_A2-04_EFCTV");
    },
    '80.Click radio button "Ineffective"': function() {
        act.click("#AAAO_Beh_WWO_03_A3-02_INEFF");
    },
    '81.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_WWO_03_A4-04_EFCTV");
    },
    "82.Click submit button": function() {
        act.click("#next");
    },
    '83.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_WWO_04_A1-04_EFCTV");
    },
    '84.Click radio button "Counterproductive"': function() {
        act.click("#AAAO_Beh_WWO_04_A2-01_CPROD");
    },
    '85.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_WWO_04_A3-04_EFCTV");
    },
    '86.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_WWO_04_A4-04_EFCTV");
    },
    "87.Click submit button": function() {
        act.click("#next");
    },
    "88.Click submit button": function() {
        act.click("#next");
    },
    "89.Click submit button": function() {
        act.click("#next");
    },
    '90.Click radio button "Effective"': function() {
        act.click("#EXAMPLE_TEXT_1-04_EFCTV");
    },
    '91.Click radio button "Effective"': function() {
        act.click("#EXAMPLE_TEXT_2-04_EFCTV");
    },
    '92.Click radio button "Effective"': function() {
        act.click("#EXAMPLE_TEXT_3-04_EFCTV");
    },
    '93.Click radio button "Effective"': function() {
        act.click("#EXAMPLE_TEXT_4-04_EFCTV");
    },
    "94.Click submit button": function() {
        act.click("#next");
    },
    "95.Click submit button": function() {
        act.click("#next");
    },
    '96.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_CI_01_A1-04_EFCTV");
    },
    '97.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_CI_01_A2-03_FLYEF");
    },
    '98.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_CI_01_A3-04_EFCTV");
    },
    '99.Click radio button "Ineffective"': function() {
        act.click("#AAAO_Beh_CI_01_A4-02_INEFF");
    },
    "100.Click submit button": function() {
        act.click("#next");
    },
    '101.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_CI_03_A1-04_EFCTV");
    },
    '102.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_CI_03_A2-04_EFCTV");
    },
    '103.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_CI_03_A3-04_EFCTV");
    },
    '104.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_CI_03_A4-03_FLYEF");
    },
    "105.Click submit button": function() {
        act.click("#next");
    },
    '106.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_CI_04_A1-04_EFCTV");
    },
    '107.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_CI_04_A2-04_EFCTV");
    },
    '108.Click radio button "Ineffective"': function() {
        act.click("#AAAO_Beh_CI_04_A3-02_INEFF");
    },
    '109.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_CI_04_A4-03_FLYEF");
    },
    "110.Click submit button": function() {
        act.click("#next");
    },
    '111.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_MED_01_A1-03_FLYEF");
    },
    '112.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MED_01_A2-04_EFCTV");
    },
    '113.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MED_01_A3-04_EFCTV");
    },
    '114.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MED_01_A4-04_EFCTV");
    },
    "115.Click submit button": function() {
        act.click("#next");
    },
    '116.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MED_03_A1-04_EFCTV");
    },
    '117.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_MED_03_A2-03_FLYEF");
    },
    '118.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MED_03_A3-04_EFCTV");
    },
    '119.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_MED_03_A4-03_FLYEF");
    },
    "120.Click submit button": function() {
        act.click("#next");
    },
    '121.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MED_04_A1-04_EFCTV");
    },
    '122.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_MED_04_A2-03_FLYEF");
    },
    '123.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MED_04_A3-04_EFCTV");
    },
    '124.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MED_04_A4-04_EFCTV");
    },
    "125.Click submit button": function() {
        act.click("#next");
    },
    '126.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MQS_01_A1-04_EFCTV");
    },
    '127.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_MQS_01_A2-03_FLYEF");
    },
    '128.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MQS_01_A3-04_EFCTV");
    },
    '129.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_MQS_01_A4-03_FLYEF");
    },
    "130.Click submit button": function() {
        act.click("#next");
    },
    '131.Click radio button "Ineffective"': function() {
        act.click("#AAAO_Beh_MQS_03_A1-02_INEFF");
    },
    '132.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MQS_03_A2-04_EFCTV");
    },
    '133.Click radio button "Ineffective"': function() {
        act.click("#AAAO_Beh_MQS_03_A3-02_INEFF");
    },
    '134.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MQS_03_A4-04_EFCTV");
    },
    "135.Click submit button": function() {
        act.click("#next");
    },
    '136.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MQS_08_A1-04_EFCTV");
    },
    '137.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_MQS_08_A2-03_FLYEF");
    },
    '138.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_MQS_08_A3-03_FLYEF");
    },
    '139.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MQS_08_A4-04_EFCTV");
    },
    "140.Click submit button": function() {
        act.click("#next");
    },
    '141.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_DAP_01_A1-04_EFCTV");
    },
    '142.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_DAP_01_A2-03_FLYEF");
    },
    '143.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_DAP_01_A3-04_EFCTV");
    },
    '144.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_DAP_01_A4-03_FLYEF");
    },
    "145.Click submit button": function() {
        act.click("#next");
    },
    '146.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_DAP_03_A1-04_EFCTV");
    },
    '147.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_DAP_03_A2-03_FLYEF");
    },
    '148.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_DAP_03_A3-04_EFCTV");
    },
    '149.Click radio button "Ineffective"': function() {
        act.click("#AAAO_Beh_DAP_03_A4-02_INEFF");
    },
    "150.Click submit button": function() {
        act.click("#next");
    },
    '151.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_DAP_08_A1-03_FLYEF");
    },
    '152.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_DAP_08_A2-04_EFCTV");
    },
    '153.Click radio button "Ineffective"': function() {
        act.click("#AAAO_Beh_DAP_08_A3-02_INEFF");
    },
    '154.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_DAP_08_A4-04_EFCTV");
    },
    "155.Click submit button": function() {
        act.click("#next");
    },
    "156.Click submit button": function() {
        act.click("#complete");
    }
};

