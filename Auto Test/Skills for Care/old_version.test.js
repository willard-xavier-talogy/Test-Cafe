"@fixture Old version";
"@page http://www.aquestionofcare.org.uk/";

"@test"["Full English"] = {
    '1.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    '2.Click select "ctl00$ContentPlaceH..."': function() {
        act.click("#ddlPreferredCountryOfWork");
    },
    '3.Click option "England"': function() {
        act.click(":containsExcludeChildren(England)");
    },
    '4.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    '5.Click button "No"': function() {
        act.click("#No");
    },
    "6.Click div": function() {
        var actionTarget = function() {
            return $("#btn_char1").find(".photo");
        };
        act.click(actionTarget);
    },
    "7.Wait 90000 milliseconds": function() {
        act.wait(9e4);
    },
    '8.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "9.Wait 90000 milliseconds": function() {
        act.wait(9e4);
    },
    '10.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    '11.Click paragraph "She is worried..."': function() {
        act.click("#ContentPlaceHolder1_Q1Option1Text");
    },
    "12.Click link": function() {
        act.click("[alt='rbQ1Option1']");
    },
    '13.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '14.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "15.Click link": function() {
        act.click("[alt='rbQ2Option2']");
    },
    '16.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '17.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "18.Click link": function() {
        act.click("[alt='rbQ3Option3']");
    },
    '19.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '20.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    "21.Wait 90000 milliseconds": function() {
        act.wait(9e4);
    },
    '22.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "23.Click link": function() {
        act.click("[alt='rbQ1Option2']");
    },
    '24.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '25.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "26.Click link": function() {
        act.click("[alt='rbQ2Option4']");
    },
    '27.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '28.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "29.Click link": function() {
        act.click("[alt='rbQ3Option2']");
    },
    '30.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '31.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    "32.Wait 90000 milliseconds": function() {
        act.wait(9e4);
    },
    '33.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "34.Click link": function() {
        act.click("[alt='rbQ1Option1']");
    },
    '35.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '36.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    '37.Click paragraph "Ahmed should ask..."': function() {
        act.click("#ContentPlaceHolder1_Q2Option4Text");
    },
    "38.Click link": function() {
        act.click("[alt='rbQ2Option4']");
    },
    '39.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '40.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "41.Click link": function() {
        act.click("[alt='rbQ3Option2']");
    },
    '42.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '43.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    "44.Wait 90000 milliseconds": function() {
        act.wait(9e4);
    },
    '45.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "46.Click link": function() {
        act.click("[alt='rbQ1Option1']");
    },
    '47.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '48.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "49.Click link": function() {
        act.click("[alt='rbQ2Option3']");
    },
    '50.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '51.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "52.Click link": function() {
        act.click("[alt='rbQ3Option2']");
    },
    '53.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '54.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    "55.Click div": function() {
        var actionTarget = function() {
            return $("#btn_char2").find(".photo");
        };
        act.click(actionTarget);
    },
    "56.Wait 90000 milliseconds": function() {
        act.wait(9e4);
    },
    '57.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "58.Wait 90000 milliseconds": function() {
        act.wait(9e4);
    },
    '59.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "60.Click link": function() {
        act.click("[alt='rbQ1Option1']");
    },
    '61.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '62.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "63.Click link": function() {
        act.click("[alt='rbQ2Option3']");
    },
    '64.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '65.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "66.Click link": function() {
        act.click("[alt='rbQ3Option1']");
    },
    '67.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '68.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    "69.Wait 90000 milliseconds": function() {
        act.wait(9e4);
    },
    '70.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "71.Click link": function() {
        act.click("[alt='rbQ1Option1']");
    },
    '72.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '73.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "74.Click link": function() {
        act.click("[alt='rbQ2Option4']");
    },
    '75.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '76.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "77.Click link": function() {
        act.click("[alt='rbQ3Option2']");
    },
    '78.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '79.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    "80.Wait 90000 milliseconds": function() {
        act.wait(9e4);
    },
    '81.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "82.Click link": function() {
        act.click("[alt='rbQ1Option2']");
    },
    '83.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '84.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "85.Click link": function() {
        act.click("[alt='rbQ2Option3']");
    },
    '86.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '87.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "88.Click link": function() {
        act.click("[alt='rbQ3Option3']");
    },
    '89.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '90.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    "91.Wait 90000 milliseconds": function() {
        act.wait(9e4);
    },
    '92.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "93.Click link": function() {
        act.click("[alt='rbQ1Option2']");
    },
    '94.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '95.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "96.Click link": function() {
        act.click("[alt='rbQ2Option4']");
    },
    '97.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '98.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "99.Click link": function() {
        act.click("[alt='rbQ3Option3']");
    },
    '100.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '101.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    '102.Click link "View your Feedback"': function() {
        act.click("#ContentPlaceHolder1_ViewYourFeedbackButton");
    }
};

"@test"["English with Transcripts"] = {
    '1.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    '2.Click select "ctl00$ContentPlaceH..."': function() {
        act.click("#ddlPreferredCountryOfWork");
    },
    '3.Click option "England"': function() {
        act.click(":containsExcludeChildren(England)");
    },
    '4.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    '5.Click button "No"': function() {
        act.click("#No");
    },
    "6.Click div": function() {
        var actionTarget = function() {
            return $("#btn_char3").find(".photo");
        };
        act.click(actionTarget);
    },
    '7.Click button "View Transcript"': function() {
        act.click("#toggleToTranscriptButton");
    },
    '8.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    '9.Click button "View Transcript"': function() {
        act.click("#ContentPlaceHolder1_toggleToTranscriptButton");
    },
    '10.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    '11.Click paragraph "“Well you are..."': function() {
        act.click("#ContentPlaceHolder1_Q1Option1Text");
    },
    "12.Click link": function() {
        act.click("[alt='rbQ1Option1']");
    },
    '13.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '14.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "15.Click link": function() {
        act.click("[alt='rbQ2Option3']");
    },
    '16.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '17.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    '18.Click paragraph "It’s not up..."': function() {
        act.click("#ContentPlaceHolder1_Q3Option3Text");
    },
    "19.Click link": function() {
        act.click("[alt='rbQ3Option3']");
    },
    '20.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '21.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    '22.Click button "View Transcript"': function() {
        act.click("#ContentPlaceHolder1_toggleToTranscriptButton");
    },
    '23.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "24.Click link": function() {
        act.click("[alt='rbQ1Option2']");
    },
    '25.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '26.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "27.Click link": function() {
        act.click("[alt='rbQ2Option4']");
    },
    '28.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '29.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "30.Click link": function() {
        act.click("[alt='rbQ3Option1']");
    },
    '31.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '32.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    '33.Click button "View Transcript"': function() {
        act.click("#ContentPlaceHolder1_toggleToTranscriptButton");
    },
    '34.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "35.Click link": function() {
        act.click("[alt='rbQ1Option2']");
    },
    '36.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '37.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "38.Click link": function() {
        act.click("[alt='rbQ2Option4']");
    },
    '39.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '40.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "41.Click link": function() {
        act.click("[alt='rbQ3Option1']");
    },
    '42.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '43.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    '44.Click button "View Transcript"': function() {
        act.click("#ContentPlaceHolder1_toggleToTranscriptButton");
    },
    '45.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "46.Click link": function() {
        act.click("[alt='rbQ1Option2']");
    },
    '47.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '48.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "49.Click link": function() {
        act.click("[alt='rbQ2Option2']");
    },
    '50.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '51.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "52.Click link": function() {
        act.click("[alt='rbQ3Option4']");
    },
    '53.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '54.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    "55.Click div": function() {
        var actionTarget = function() {
            return $("#btn_char2").find(".photo");
        };
        act.click(actionTarget);
    },
    '56.Click button "View Transcript"': function() {
        act.click("#toggleToTranscriptButton");
    },
    '57.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    '58.Click button "View Transcript"': function() {
        act.click("#ContentPlaceHolder1_toggleToTranscriptButton");
    },
    '59.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "60.Click link": function() {
        act.click("[alt='rbQ1Option3']");
    },
    '61.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '62.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "63.Click link": function() {
        act.click("[alt='rbQ2Option1']");
    },
    '64.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '65.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "66.Click link": function() {
        act.click("[alt='rbQ3Option2']");
    },
    '67.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '68.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    '69.Click button "View Transcript"': function() {
        act.click("#ContentPlaceHolder1_toggleToTranscriptButton");
    },
    '70.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "71.Click link": function() {
        act.click("[alt='rbQ1Option1']");
    },
    '72.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '73.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "74.Click link": function() {
        act.click("[alt='rbQ2Option3']");
    },
    '75.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '76.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "77.Click link": function() {
        act.click("[alt='rbQ3Option3']");
    },
    '78.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '79.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    '80.Click button "View Transcript"': function() {
        act.click("#ContentPlaceHolder1_toggleToTranscriptButton");
    },
    '81.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "82.Click link": function() {
        act.click("[alt='rbQ1Option1']");
    },
    '83.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '84.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "85.Click link": function() {
        act.click("[alt='rbQ2Option3']");
    },
    '86.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '87.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "88.Click link": function() {
        act.click("[alt='rbQ3Option1']");
    },
    '89.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '90.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    '91.Click button "View Transcript"': function() {
        act.click("#ContentPlaceHolder1_toggleToTranscriptButton");
    },
    '92.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "93.Click link": function() {
        act.click("[alt='rbQ1Option2']");
    },
    '94.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '95.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "96.Click link": function() {
        act.click("[alt='rbQ2Option4']");
    },
    '97.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '98.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "99.Click link": function() {
        act.click("[alt='rbQ3Option2']");
    },
    '100.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '101.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    '102.Click link "View your Feedback"': function() {
        act.click("#ContentPlaceHolder1_ViewYourFeedbackButton");
    }
};