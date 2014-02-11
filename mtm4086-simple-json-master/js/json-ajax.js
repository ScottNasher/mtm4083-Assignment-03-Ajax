function loadJSON(){
   var data_file = "data.json";
   var http_request = new XMLHttpRequest();
   try{
      // Opera 8.0+, Firefox, Chrome, Safari
      http_request = new XMLHttpRequest();
   }catch (e){
      // Internet Explorer Browsers
      try{
         http_request = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e) {
         try{
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            // Something went wrong
            alert("Your browser may not support AJAX, or refresh cause something went wrong");
            return false;
         }
      }
   }
   http_request.onreadystatechange  = function(){

      // readyState == 4 means the request was successful
      if (http_request.readyState == 4  ){
        // Javascript function JSON.parse to parse JSON data
        var jsonObj = JSON.parse(http_request.responseText);

        // My Entire JSON Object from data.json
        //console.log(jsonObj);
		
		//div to append all results to
		//var feedWrapper = document.getElementById('article-feed');
		
		//Create Img with src attr as imageURL
		//var articleImage = document.createElement('img');
		//articleImage.setAttribute("src", jsonObj[1].imageUrl);
		
		//append image to aritcleFeed Div
		//feedWrapper.appendChild(articleImage);

		/*var newTitle = document.createElement('h1');
		newTitle.innerHTML = (jsonObj[1].title);
		feedWrapper.appendChild(newTitle);*/
		
		
		for (var key in jsonObj){
			console.log(jsonObj[key]);
			//Create Img with src attr as imageURL
			
	    var feedWrapper = document.getElementById('article-feed');
		var feedItem = document.createElement('div');
		feedItem.className += "feedItem";
		feedWrapper.appendChild(feedItem);
		
		
		var articleTitle = document.createElement('h2');
		articleTitle.innerHTML = (jsonObj[key].title);
		feedItem.appendChild(articleTitle);
		
		var articleImage = document.createElement('img');
		articleImage.setAttribute("src", jsonObj[key].imageUrl);
		feedItem.appendChild(articleImage);
		
		var articleCaption = document.createElement('p');
		articleCaption.innerHTML = (jsonObj[key].caption);
		feedItem.appendChild(articleCaption);
		
		var articleCredit = document.createElement('p');
		articleCredit.className += "credits";
		articleCredit.innerHTML = (jsonObj[key].credits);
		feedItem.appendChild(articleCredit);
		
		}
      }

   }
   http_request.open("GET", data_file, true);
   http_request.send();
}

//auto load loadJSON();