$(document).ready(function () {

    $("#add-burger").on("click", function (event) {
        event.preventDefault();

        let newBurger = $("#burger-name").val().trim();

        if (newBurger) {
            $.post("/api/add", {
                newBurger
            }, function (error) {
                if (error) {
                    console.log(error.stack);
                    return;
                }
            }).then(function () {

                location.reload(true);
            });
        }

    });

    $(".eat-burger").on("click", function () {
        let burgerID = Number($(this).attr("burger-id"));

        $.ajax({
            url: "/api/devour/" + burgerID,
            method: "PUT",
        }).then(function () {
            window.location.reload(true);
        });

    });
});