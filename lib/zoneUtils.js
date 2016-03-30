'use strict';

module.exports.resolveMedia = function (media) {

    console.log(JSON.stringify(media));
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
                let cuts = media['elementContents'].cuts,
                    highest = 0;
                for ( let ndx in cuts ) {
                    let cut = cuts[ndx],
                        nexthighest = cut.height + cut.width;
                    if ( nexthighest > highest ) {
                        highest = nexthighest;
                        imageUrl = cut.uri;
                    }

                    console.log();
                }
                return imageUrl;
            }

        } else {
            return '';
        }
    } catch (err) {
        throw {name: 'resolveMedia exception', message: err};
    }


};
