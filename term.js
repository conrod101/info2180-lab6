$(document).ready(function() {

            var searchB = $(".search");
            var url = "https://info2180-lab6-conrod101.c9users.io/request.php?q=";


            searchB.on('click', searchFunction);


            function searchFunction(event) {
                event.preventDefault();

                var searchTerm = $("#term").val();

                $.ajax({
                        url: url + searchTerm,
                    })
                    .done(function(data) {
                            $("#result").html(data);

                        }





                    });