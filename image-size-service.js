/**
 * Finds the Highest Quality Image based on the highest width and height
 * @param  {Object} images - An object with properties for each image size
 * @returns {Object} - Returns highest quality image
 * 
 */
function _findHighestQualityImage(images) {
    
   var highestImage, highestWidth = 0, highestHeight = 0;
   for(var property in images)
   {
       
       var image = images[property];
       if (highestHeight < image.height && highestWidth < image.width)
       {           
           highestHeight = image.height;
           highestWidth = image.width;
           highestImage = image;
       }      
   }
   
   return highestImage;
}

module.exports = {
    findHighestQualityImage: _findHighestQualityImage
};