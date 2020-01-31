"@fixture New version";
"@page http://dev.aquestionofcare.adc.uk.com/home-page";

"@test"["English with Transcripts"] = {
    '1.Click link "English |"': function() {
        act.click("#hlEnglish");
    },
    '2.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    '3.Click select "ctl00$ContentPlaceH..."': function() {
        act.click("#ddlPreferredCountryOfWork");
    },
    '4.Click option "England"': function() {
        act.click(":containsExcludeChildren(England)");
    },
    '5.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    '6.Click button "No"': function() {
        act.click("#No");
    },
    "7.Click div": function() {
        var actionTarget = function() {
            return $("#btn_char4").find(".photo");
        };
        act.click(actionTarget);
    },
    '8.Click button "View Transcript"': function() {
        act.click("#toggleToTranscriptButton");
    },
    '9.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    '10.Click button "View Transcript"': function() {
        act.click("#ContentPlaceHolder1_toggleToTranscriptButton");
    },
    '11.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
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
        act.click("[alt='rbQ2Option1']");
    },
    '16.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '17.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "18.Click link": function() {
        act.click("[alt='rbQ3Option1']");
    },
    '19.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '20.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    '21.Click button "View Transcript"': function() {
        act.click("#ContentPlaceHolder1_toggleToTranscriptButton");
    },
    '22.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "23.Click link": function() {
        act.click("[alt='rbQ1Option1']");
    },
    '24.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '25.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "26.Click link": function() {
        act.click("[alt='rbQ2Option1']");
    },
    '27.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '28.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "29.Click link": function() {
        act.click("[alt='rbQ3Option1']");
    },
    '30.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '31.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    '32.Click button "View Transcript"': function() {
        act.click("#ContentPlaceHolder1_toggleToTranscriptButton");
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
    "37.Click link": function() {
        act.click("[alt='rbQ2Option1']");
    },
    '38.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '39.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "40.Click link": function() {
        act.click("[alt='rbQ3Option1']");
    },
    '41.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '42.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    '43.Click button "View Transcript"': function() {
        act.click("#ContentPlaceHolder1_toggleToTranscriptButton");
    },
    '44.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "45.Click link": function() {
        act.click("[alt='rbQ1Option1']");
    },
    '46.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '47.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "48.Click link": function() {
        act.click("[alt='rbQ2Option1']");
    },
    '49.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '50.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "51.Click link": function() {
        act.click("[alt='rbQ3Option1']");
    },
    '52.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '53.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    "54.Click div": function() {
        var actionTarget = function() {
            return $("#btn_char5").find(".photo");
        };
        act.click(actionTarget);
    },
    '55.Click button "View Transcript"': function() {
        act.click("#toggleToTranscriptButton");
    },
    '56.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    '57.Click button "View Transcript"': function() {
        act.click("#ContentPlaceHolder1_toggleToTranscriptButton");
    },
    '58.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "59.Click link": function() {
        act.click("[alt='rbQ1Option1']");
    },
    '60.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '61.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "62.Click link": function() {
        act.click("[alt='rbQ2Option1']");
    },
    '63.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '64.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    '65.Click paragraph "Ben should wait..."': function() {
        act.click("#ContentPlaceHolder1_Q3Option1Text");
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
        act.click("[alt='rbQ2Option1']");
    },
    '75.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '76.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "77.Click link": function() {
        act.click("[alt='rbQ3Option1']");
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
        act.click("[alt='rbQ2Option1']");
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
        act.click("[alt='rbQ1Option1']");
    },
    '94.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '95.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "96.Click link": function() {
        act.click("[alt='rbQ2Option1']");
    },
    '97.Click link "Submit"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '98.Click link "Next"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "99.Click link": function() {
        act.click("[alt='rbQ3Option1']");
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

"@test"["Welsh with Transcripts"] = {
    '1.Click link "Cymraeg"': function() {
        act.click("#hlWelsh");
    },
    '2.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    '3.Click select "ctl00$ContentPlaceH..."': function() {
        act.click("#ddlPreferredCountryOfWork");
    },
    '4.Click option "Lloegr"': function() {
        act.click(":containsExcludeChildren(Lloegr)");
    },
    '5.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    '6.Click button "Na"': function() {
        act.click("#No");
    },
    "7.Click div": function() {
        var actionTarget = function() {
            return $("#btn_char4").find(".photo");
        };
        act.click(actionTarget);
    },
    '8.Click button "Gweld Trawsgrifiad"': function() {
        act.click("#toggleToTranscriptButton");
    },
    '9.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    '10.Click button "Gweld Trawsgrifiad"': function() {
        act.click("#ContentPlaceHolder1_toggleToTranscriptButton");
    },
    '11.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "12.Click link": function() {
        act.click("[alt='rbQ1Option2']");
    },
    '13.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '14.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "15.Click link": function() {
        act.click("[alt='rbQ2Option1']");
    },
    '16.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '17.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "18.Click link": function() {
        act.click("[alt='rbQ3Option1']");
    },
    '19.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '20.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    '21.Click button "Gweld Trawsgrifiad"': function() {
        act.click("#ContentPlaceHolder1_toggleToTranscriptButton");
    },
    '22.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "23.Click link": function() {
        act.click("[alt='rbQ1Option1']");
    },
    '24.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '25.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "26.Click link": function() {
        act.click("[alt='rbQ2Option1']");
    },
    '27.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '28.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "29.Click link": function() {
        act.click("[alt='rbQ3Option1']");
    },
    '30.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '31.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    '32.Click button "Gweld Trawsgrifiad"': function() {
        act.click("#ContentPlaceHolder1_toggleToTranscriptButton");
    },
    '33.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "34.Click link": function() {
        act.click("[alt='rbQ1Option1']");
    },
    '35.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '36.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "37.Click link": function() {
        act.click("[alt='rbQ2Option1']");
    },
    '38.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '39.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "40.Click link": function() {
        act.click("[alt='rbQ3Option1']");
    },
    '41.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '42.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    '43.Click button "Gweld Trawsgrifiad"': function() {
        act.click("#ContentPlaceHolder1_toggleToTranscriptButton");
    },
    '44.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "45.Click link": function() {
        act.click("[alt='rbQ1Option1']");
    },
    '46.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '47.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "48.Click link": function() {
        act.click("[alt='rbQ2Option1']");
    },
    '49.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '50.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "51.Click link": function() {
        act.click("[alt='rbQ3Option1']");
    },
    '52.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '53.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    "54.Click div": function() {
        var actionTarget = function() {
            return $("#btn_char5").find(".photo");
        };
        act.click(actionTarget);
    },
    '55.Click button "Gweld Trawsgrifiad"': function() {
        act.click("#toggleToTranscriptButton");
    },
    '56.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    '57.Click button "Gweld Trawsgrifiad"': function() {
        act.click("#ContentPlaceHolder1_toggleToTranscriptButton");
    },
    '58.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "59.Click link": function() {
        act.click("[alt='rbQ1Option1']");
    },
    '60.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '61.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "62.Click link": function() {
        act.click("[alt='rbQ2Option1']");
    },
    '63.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '64.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "65.Click link": function() {
        act.click("[alt='rbQ3Option1']");
    },
    '66.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '67.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    '68.Click button "Gweld Trawsgrifiad"': function() {
        act.click("#ContentPlaceHolder1_toggleToTranscriptButton");
    },
    '69.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "70.Click link": function() {
        act.click("[alt='rbQ1Option1']");
    },
    '71.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '72.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "73.Click link": function() {
        act.click("[alt='rbQ2Option1']");
    },
    '74.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '75.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "76.Click link": function() {
        act.click("[alt='rbQ3Option1']");
    },
    '77.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '78.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    '79.Click button "Gweld Trawsgrifiad"': function() {
        act.click("#ContentPlaceHolder1_toggleToTranscriptButton");
    },
    '80.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "81.Click link": function() {
        act.click("[alt='rbQ1Option1']");
    },
    '82.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '83.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "84.Click link": function() {
        act.click("[alt='rbQ2Option1']");
    },
    '85.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '86.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "87.Click link": function() {
        act.click("[alt='rbQ3Option1']");
    },
    '88.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '89.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    '90.Click button "Gweld Trawsgrifiad"': function() {
        act.click("#ContentPlaceHolder1_toggleToTranscriptButton");
    },
    '91.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_NextButton");
    },
    "92.Click link": function() {
        act.click("[alt='rbQ1Option1']");
    },
    '93.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q1SubmitAnswerButton");
    },
    '94.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q1SubmittedNext");
    },
    "95.Click link": function() {
        act.click("[alt='rbQ2Option1']");
    },
    '96.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q2SubmitAnswerButton");
    },
    '97.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q2SubmittedNext");
    },
    "98.Click link": function() {
        act.click("[alt='rbQ3Option1']");
    },
    '99.Click link "Cyflwyno"': function() {
        act.click("#ContentPlaceHolder1_q3SubmitAnswerButton");
    },
    '100.Click link "Nesaf"': function() {
        act.click("#ContentPlaceHolder1_q3SubmittedNext");
    },
    '101.Click link "Gweld eich Adborth"': function() {
        act.click("#ContentPlaceHolder1_ViewYourFeedbackButton");
    }
};

