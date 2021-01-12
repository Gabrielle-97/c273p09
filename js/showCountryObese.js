$(document).ready(function () {
    $("#idCountry").change(function () {
        var idCountry = $("#idCountry").val();
        $.ajax({
            type: "GET",
            url: "http://localhost/C237/C273_L09/getCountryDetails.php",
            cache: false,
            dataType: "JSON",
            data: "id=" + idCountry,
            success: function (response) {
                //To display the table heading
                var message = "<thead><tr><th>Population</th><th>Obese</th></tr></thead>";
                
                //This part is to display the data in the table body
                message += "<tbody>";
                message += "<td>" + response[0].population + "</td>" +
                        "<td>" + response[0].obese + "</td>";
                message += "</tbody>";
                $("#obeseTable").html(message);
            },
            error: function (obj, textStatus, errorThrown) {
                console.log("Error " + textStatus + ": " + errorThrown);
            }
        });
    });
});

//tr = table row 
