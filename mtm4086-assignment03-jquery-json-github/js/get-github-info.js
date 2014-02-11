$('#save').click(function () {
    // add loading image to div
    $('#loading').html('<img src="http://preloaders.net/preloaders/287/Filling%20broken%20ring.gif"> loading...');
    
    // run ajax request
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api.github.com/users/nash0033",
        success: function (data) {
            // replace div's content with returned data
            // setTimeout added to show loading
            console.log(data);
            setTimeout(function () {
				var date = (data.created_at);
                $('#loading').html('<img src="' + data.avatar_url + '"><br>' + '<p>User Login: ' + data.login + '</p>' + '<p> Site URL: <a href="https://github.com/nash0033">' + data.html_url + '</a></p>'  + '<p>Number of public repos: ' + data.public_repos + '</p>' + '<p>Date Created: ' + data.created_at + '</p>');
            }, 2000);
        }
    });
});