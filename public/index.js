$("#add_user").submit(function(event){
    alert("Data inserted successfully");
})

$("#update_user").submit(function(event) {
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, (n, i) => {
        data[n['name']] = n['value']
    })

    // console.log(unindexed_array);

    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(response => {
        alert("Data updated successfully");
    })
})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function() {
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method": "DELETE"
        }

        if(confirm("Are you Sure to delete this user?")){
            $.ajax(request).done(response => {
                alert("User deleted successfully");
                location.reload();
            })
        }


    })


}