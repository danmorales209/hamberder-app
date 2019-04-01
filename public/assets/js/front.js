
//jQuery function called after the document is loaded.
$(document).ready(function () {

    // Add event listener to the add burger button
    $("#add-burger").on("click", function (event) {
        event.preventDefault();

        // Get the input from the <textarea>
        let newBurger = $("#burger-name").val().trim();

        // Make sure the <textarea> isn't empty
        if (newBurger) {
            // ajax post to server
            $.post("/api/add", {
                newBurger
            }, function (error) {
                if (error) {
                    console.log(error.stack);
                    return;
                }
            }).then(function () {
                // all the logic for the display is in the handlebars templates,
                // so reload page to update --Probably not the best idea for more complicated pages
                window.location.reload(true);
            });
        }
    });

    // Add event listen for the devour buttons
    $(".eat-burger").on("click", function () {
        // Get the id of the burger, which is stored in the button attribute below
        let burgerID = Number($(this).attr("burger-id"));

        // PUT request
        $.ajax({
            url: "/api/devour/" + burgerID,
            method: "PUT",
        }).then(function () {
            // Reload page for handlebars logic to display
            window.location.reload(true);
        });

    });
});