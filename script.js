$(document).ready(function() {

        $(".clickable").click(function() {

            $(".image").toggle();
            $(".words").toggle();

        })
        $(".clickable1").click(function() {

            $(".image1").toggle();
            $(".words1").toggle();

        })
        $(".clickable2").click(function() {

                $(".image2").toggle();
                $(".words2").toggle();

            })
            /*
                $(".images").hover(function() {
                    $(".images").css("opacity", "0.5");
                    $(".col-md-3").append("<p>reddit<p>")
                }, function() 
                    $(".images").css("opacity", "1")
                        //   $(this).remove();
                })
            */

    })
    //document.getElementById("sends").onclick = function() {send()};


function send() {
    const name = document.getElementById('nameid').value
        // const email = document.getElementById('emailid').value
        //const message = document.getElementById('messageid').value

    alert(`${name},  we have received your message. Thank you for reaching out to us.`)
    console.log(name)
}