$(document).ready(function() {
    $("#main").hide()
    $(".loader").hide()
    $(document).tooltip()
    $("#splashpage").click(function() {
        $(this).fadeOut(2500)
        window.setTimeout(function() {
            $(".loader").show()
        }, 2400)
        window.setTimeout(function() {
            $(".loader").hide()
            $("#splashpage").hide()
            $("body").addClass("background")
            $("#main").fadeIn("slow")
            start()
        }, 7500)
    }) 
})
function start() {
    if(localStorage.name !== null) {
    rename(localStorage.name)
    }
    else {
        $("#dialog").dialog()
    }
}
function rename(new_name) {
    localStorage.name = new_name
    $(".nameshow").html(localStorage.name)
    $("#dialog").html("<h3>Say, " + localStorage.name + ", you dont look familiar.  What are you?<br><button onclick=\'localStorage.charClass = \'human\' \'; title='Humans are intelligent creatures, and are good with both magic and melee alike.  They, however, are neutral - and get neither good or evil benifits.'>Human</button>")
    $("#dialog").dialog()
}
function reset() {
    localStorage.name = null
}
