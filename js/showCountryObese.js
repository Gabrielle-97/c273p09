$(document).ready(function () {

    $("#idCountry").change(function () {
        var idCountry = $("#idCountry").val();

        $.ajax({
            type: "GET",
            url: "http://localhost/C237/C273_L09/getCountryDetails.php",
            data: "id=" + idCountry,
            cache: false,
            dataType: "JSON",
            success: function (response) {
                console.log("a");
                var message = "<tr><th>Population</th><th>Obese</th></tr>";
                for (i = 0; i < response.length; i++) {
                    message += "<td>" + response[i].population + "</td>" + "<td>" + response[i].obese + "</td>";
                }
                $("#obeseTable").html(message);


            },
            error: function (obj, textStatus, errorThrown) {
                console.log("Error " + textStatus + ": " + errorThrown);
            }
        });
    });
});

//tr = table row 
