$(document).ready( function() {
    $("#add-burger").on("click", function() {
        let newBurger = $("burger-name").val().trim();

        $.post("/api/add", newBurger, function (error) {
            if (error) {
                console.log(error.stack);
                return;
            }
        });
    });

    $(".eat-burger").on("click", function() {
        let burgerID = Number($(this).attr("burger-id"));
        
        $.ajax({
            url: "devour",
            method: "PUT",
            data: burgerID,
            dataType: "json"
        }).then(function() {
            location.reload(true);
        })

    });
})