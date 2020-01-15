"@fixture Basic marking the event";
"@page https://uat.evaluate.adc.uk.com/";

"@test"["Wait Test"] = {
    "1.Type in input": function() {
        act.type("#username", "vitort.");
    },
    "2.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "3.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "4.Type in input": function() {
        act.type("#username", ".sa");
    },
    "5.Press key TAB": function() {
        act.press("tab");
    },
    "6.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    }
};

