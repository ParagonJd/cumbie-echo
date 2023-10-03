$(document).ready(function() {
    $("#option1").click(function() {
        displayResponse("Me: I go where I want... Rick: Well, you found this place, but you're in for a wild ride, pal.");
        showVaultLink();
        showLeaveLink();
    });

    $("#option2").click(function() {
        displayResponse("Me: I'm here to collect your bounty, Rick Sanchez... Rick: You must have a death wish!");
        showVaultLink();
        showLeaveLink();
    });

    $("#option3").click(function() {
        displayResponse("Me: Listen, man, I'm just here to grade your assignment. Rick: Just don't touch anything, okay?");
        showVaultLink();
        showLeaveLink();
    });

    function displayResponse(responseText) {
        $("#response").text(responseText);
    }

    function showVaultLink() {
        $("#vaultLink").show();
    }
    function showLeaveLink() {
        $("#leaveLink").show();
    }
});