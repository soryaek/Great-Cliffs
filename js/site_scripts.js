function displayPartnersSection(){
    var openList =   '<li class="partner">'; 
    var closeList =  '</li>'; 
    var fileName = ['partner-bustour', 'partner-cabinrental', 'partner-campingadv', 
                'partner-collegetours', "partner-rentalbike", "partner-tourgroup"];

    var imageDescription =['Partner Bus Tours', 'Partner Cabin Rental', 'Partner Camping Adventure', 
                        'Partner College Tours', 'Partner Bike Rentals', 'Partner Tour Group']; 
    var altAttribute = [], image = [], imageList = [] , photos  = [];


    for (var i=0; i<6; i++){
        photos.push("<img src='images/partners/"+ fileName[i] + ".png'");  
        altAttribute.push(" alt= '"+ imageDescription[i] + "'>");
        image = openList + photos[i] + altAttribute[i] + closeList; 
        imageList.push(image);      
    }
    document.getElementById('partners').innerHTML = imageList.join(' ');
}
displayPartnersSection();