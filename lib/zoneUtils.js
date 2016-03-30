'use strict';

module.exports.resolveMedia = function (media) {

    try {
        if ( media.contentType === undefined)  {
            return '';
        } else if (media.contentType == 'image') {
            let imageUrl = media['elementContents'].imageUrl;
            if ( imageUrl === undefined) {
                let imageAlt =  media['elementContents'].imageAlt;
                if ( imageAlt === undefined) {
                    return '';
                }
            } else {
                return imageUrl;
            }

        } else {
            return '';
        }
    } catch (err) {
        throw {name: 'resolveMedia exception', message: err};
    }


};
