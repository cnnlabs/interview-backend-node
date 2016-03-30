'use strict';

const express = require('express'); // get our express framework module
const request = require('superagent');

module.exports = function() { // export this to 'main.js'
	const app = express(); // create an instance of an express application

	require('../datafeed/data.feed')();

	return app; // return the express application instance
};

// use a program to grab the 'url', 
 // *         {
 // *             "url": String,
 // *             "headline": String,
 // *             "imageUrl": String,
 // *             "byLine": String
 // *         }


{ ads: [],
  showAds: false,
  background: {},
  bannerText: '',
  branding: { name: 'default' },
  displayLabel: false,
  extraordinary: false,
  id: 'homepage1-zone-1',
  isMobileBannerText: false,
  label: 'Hero',
  layout: 'right-fluid-left-stack',
  logo: {},
  maximizedBanner: false,
  theme: 'light',
  transparent: false,
  type: 'zone',
  url: '',
  vrName: 'zone-0-0',
  zoneContents:
   [ { ads: [],
       branding: [Object],
       id: 'container_29196500-9BE9-29F0-B378-C841A71B7E6E',
       layout: 'list-hierarchical-piped',
       title: '',
       type: 'container',
       url: '',
       containerContents: [Object],
       hideDescription: false,
       openLinkInNewWindow: false,
       vrName: 'home-top-col1' },
     { ads: [],
       branding: [Object],
       id: 'container_ED5A6575-325C-80C6-B71B-C79BF85E6DFD',
       layout: 'list-xs',
       title: 'Top stories',
       type: 'container',
       url: '',
       containerContents: [Object],
       hideDescription: false,
       openLinkInNewWindow: false,
       vrName: 'home-top-col2' } ],
  uri: '',
  pageType: 'section',
  pageSubType: '',
  sectionName: 'homepage',
  vertical: '',
  autoStartVideo: false,
  surrogateKeys:
   [ 'video_AFC60D0C-E74B-E697-CD55-C8760F6C7AFC',
     'video_F518347C-F9B7-73F0-C288-C77AFCF17104',
     'video_5A6D98E5-9C9B-BE5D-2B9C-9A980A206463',
     'video_6BD67003-6F70-F094-AC11-C1E91BFF3681',
     'video_7634F12F-700D-F1B2-B339-C32D9521635E',
     'video_FAD86C33-43A5-41B6-138A-B0387CE593B7',
     'video_F8D0EE67-972A-7DC8-9958-B3DF19D2BB10',
     'video_49C66417-9B2B-F335-F43E-B00535BE839C',
     'video_62ED4939-5FBE-F378-E3C4-B3ACA103C7C1',
     'video_E7CB8FCE-6CD7-66DB-3D95-C77FCA3BB699',
     'video_7F7CA497-D4BB-74B9-D536-BD20C503E2B8',
     'video_8C9B29B5-098B-43EA-9E53-BF5252E63B38',
     'video_CC8E8C45-925C-24D1-7136-AEBFFDCB8B28',
     'video_0608A904-14AE-9457-9900-C02FBB6EFC0C',
     'coverageContainer_8C4FF4C7-3E30-1ABB-5B13-C072E64EDA38',
     'coverageContainer_E79D9B5D-A232-6A5A-9932-D8EFA2AD6DE4',
     'coverageContainer_07F99287-1079-9ADB-76BD-95C68EC6C6DB',
     'coverageContainer_6CE44821-A427-1A1C-57A8-EE10F2E9E229',
     'coverageContainer_21948641-BF4F-596F-9FE6-3DAB5367FFEC',
     'coverageContainer_B5ED9522-33C5-5FB3-7CEE-3E0FA1AA1D2B',
     'coverageContainer_7B64F8A7-1183-AF81-87C0-3E18473445EF',
     'coverageContainer_F3473E01-B28B-725B-B227-3E15DEA10FA5',
     'coverageContainer_BCBC930A-B0DD-662D-CA7E-B7D442F8105F',
     'coverageContainer_126936B6-042C-7E1F-EBB7-B7D9517452AB',
     'coverageContainer_53B5E99A-870D-57C5-0BFE-C4F1A974E333',
     'coverageContainer_1EE0AB4D-E845-0ADA-CD1C-84D41C2A16A2',
     'coverageContainer_E2F5187F-03E6-AB37-0882-BD7B7F3E1842',
     'coverageContainer_3F23F414-04EE-7168-E033-DC29A2470B47',
     'section_homepage1',
     'section_homepage2',
     'section_homepage3',
     'section_homepage4' ],
  config:
   { companionMinBreakpoints: 'small:0, large:768',
     config: 'default',
     cdn:
      { assetPath: '/.a',
        assetHost: 'http://www.i.cdn.cnn.com',
        baseZip: 'http://z.cdn.turner.com',
        baseChrome: 'http://i.cdn.turner.com',
        chrome: 'http://i.cdn.turner.com/cnn',
        content: 'http://i2.cdn.turner.com/cnnnext/dam/assets',
        zip: 'http://z.cdn.turner.com/cnn' },
     host:
      { data: 'http://data.cnn.com',
        nowPlayingDataHost: 'http://data.cnn.com',
        www: 'http://www.cnn.com',
        us: 'http://us.cnn.com',
        intl: 'http://edition.cnn.com',
        domain: 'http://www.cnn.com',
        domainWww: 'http://www.cnn.com',
        domainIntl: 'http://edition.cnn.com' },
     dataPaths:
      { config: '/cfg/v1/domestic/prod/michonne.json',
        headers: '/cfg/v1/domestic/prod/headers.json',
        homepage: '/v1/prod/domestic/homepage.json',
        overrides: '/cfg/v1/domestic/prod/michonne-overrides.json',
        redirects: '/cfg/v1/domestic/prod/redirects.json',
        zones: '/cfg/v1/domestic/prod/zones.json' },
     dataTimeout: 5000,
     dataTtl: 60000,
     isTest: false,
     previewDataTtl: 1,
     edition: { type: 'domestic' },
     editionCookie: 'PreferredEdition',
     searchApp:
      { searchUrl: '/search/',
        queryUrl: 'http://searchapp.cnn.com/search/query.jsp' },
     livefyre: { logoUrl: 'http://zor.livefyre.com/wjs/v1.0/images/icons/poweredbylivefyre.png' },
     truste:
      { noticeUrl: '//consent.truste.com/notice?domain=cnn.com&c=m-truste&text=true',
        modalUrl: '//preferences.truste.com/webservices/js?domain=turner.com&type=turner&js=responsive' },
     maxSockets: 1000,
     blogs:
      { crossfire: [Object],
        geekout: [Object],
        inamerica: [Object],
        johnkingusa: [Object],
        religion: [Object],
        schoolsofthought: [Object],
        startingpoint: [Object],
        strombo: [Object],
        whatsnext: [Object],
        whitehouse: [Object],
        yourbottomline: [Object] },
     s3: { sponsorContent: 'http://s3.amazonaws.com/cnn-sponsored-content' },
     runtime:
      { ads: [Object],
        airportDelays: [Object],
        anchorsPage: [Object],
        articleToArticle: [Object],
        asyncScripts: [Object],
        audio: [Object],
        bannerBreakpoints: [Object],
        bylineImages: [Object],
        cache: [Object],
        catchpoint: [Object],
        clicktale: [Object],
        cnnHosts: [Object],
        cnnx: [Object],
        configUrl: 'http://data.cnn.com/cfg/v1/domestic/prod/michonne.json',
        containerBreakpoints: [Object],
        cssOverrides: [Object],
        defaultTrendImage: [Object],
        demandLoading: [Object],
        dnsPrefetch: [Object],
        dynamicYield: [Object],
        elections: [Object],
        features: [Object],
        feedback: [Object],
        feeds: [Object],
        gravity: [Object],
        imageBreakpoints: [Object],
        jsOverrides: [Object],
        jsmd: [Object],
        jumbotron: [Object],
        layouts: [Object],
        links: [Object],
        mailchimp: [Object],
        markets: [Object],
        meta: [Object],
        mobileApps: [Object],
        nativeAds: [Object],
        newrelic: [Object],
        optimizely: [Object],
        outbrain: [Object],
        pageBadge: [Object],
        pages: [Object],
        partnerHotels: [Object],
        pingdom: [Object],
        pivit: [Object],
        proximic: [Object],
        proxy: [Object],
        pushAlerts: [Object],
        refreshTimers: [Object],
        rightRailConfig: [Object],
        skimlinks: [Object],
        soasta: [Object],
        social: [Object],
        sourcePoint: [Object],
        tripadvisor: [Object],
        userMessage: [Object],
        video: [Object],
        visualRevenue: [Object],
        weather: [Object] },
     overrides:
      { '/': [Object],
        '/index.html': [Object],
        '/intl_index.html': [Object],
        '/index2.html': [Object],
        '/index4.html': [Object],
        '/2016/03/10/politics/republican-debate-live-updates/index.html': [Object],
        '/2015/03/06/politics/liveblog-test-environment/index.html': [Object] },
     zones: { section: [Object] } } }
[nodemon] restarting due to changes...
[nodemon] starting `node main.js`
Server is running at http://127.0.0.1:8080
{ ads: [],
  showAds: false,
  background: {},
  bannerText: '',
  branding: { name: 'default' },
  displayLabel: false,
  extraordinary: false,
  id: 'homepage1-zone-1',
  isMobileBannerText: false,
  label: 'Hero',
  layout: 'right-fluid-left-stack',
  logo: {},
  maximizedBanner: false,
  theme: 'light',
  transparent: false,
  type: 'zone',
  url: '',
  vrName: 'zone-0-0',
  zoneContents:
   [ { ads: [],
       branding: [Object],
       id: 'container_29196500-9BE9-29F0-B378-C841A71B7E6E',
       layout: 'list-hierarchical-piped',
       title: '',
       type: 'container',
       url: '',
       containerContents: [Object],
       hideDescription: false,
       openLinkInNewWindow: false,
       vrName: 'home-top-col1' },
     { ads: [],
       branding: [Object],
       id: 'container_ED5A6575-325C-80C6-B71B-C79BF85E6DFD',
       layout: 'list-xs',
       title: 'Top stories',
       type: 'container',
       url: '',
       containerContents: [Object],
       hideDescription: false,
       openLinkInNewWindow: false,
       vrName: 'home-top-col2' } ],
  uri: '',
  pageType: 'section',
  pageSubType: '',
  sectionName: 'homepage',
  vertical: '',
  autoStartVideo: false,
  surrogateKeys:
   [ 'video_AFC60D0C-E74B-E697-CD55-C8760F6C7AFC',
     'video_F518347C-F9B7-73F0-C288-C77AFCF17104',
     'video_5A6D98E5-9C9B-BE5D-2B9C-9A980A206463',
     'video_6BD67003-6F70-F094-AC11-C1E91BFF3681',
     'video_7634F12F-700D-F1B2-B339-C32D9521635E',
     'video_FAD86C33-43A5-41B6-138A-B0387CE593B7',
     'video_F8D0EE67-972A-7DC8-9958-B3DF19D2BB10',
     'video_49C66417-9B2B-F335-F43E-B00535BE839C',
     'video_62ED4939-5FBE-F378-E3C4-B3ACA103C7C1',
     'video_E7CB8FCE-6CD7-66DB-3D95-C77FCA3BB699',
     'video_7F7CA497-D4BB-74B9-D536-BD20C503E2B8',
     'video_8C9B29B5-098B-43EA-9E53-BF5252E63B38',
     'video_CC8E8C45-925C-24D1-7136-AEBFFDCB8B28',
     'video_0608A904-14AE-9457-9900-C02FBB6EFC0C',
     'coverageContainer_8C4FF4C7-3E30-1ABB-5B13-C072E64EDA38',
     'coverageContainer_E79D9B5D-A232-6A5A-9932-D8EFA2AD6DE4',
     'coverageContainer_07F99287-1079-9ADB-76BD-95C68EC6C6DB',
     'coverageContainer_6CE44821-A427-1A1C-57A8-EE10F2E9E229',
     'coverageContainer_21948641-BF4F-596F-9FE6-3DAB5367FFEC',
     'coverageContainer_B5ED9522-33C5-5FB3-7CEE-3E0FA1AA1D2B',
     'coverageContainer_7B64F8A7-1183-AF81-87C0-3E18473445EF',
     'coverageContainer_F3473E01-B28B-725B-B227-3E15DEA10FA5',
     'coverageContainer_BCBC930A-B0DD-662D-CA7E-B7D442F8105F',
     'coverageContainer_126936B6-042C-7E1F-EBB7-B7D9517452AB',
     'coverageContainer_53B5E99A-870D-57C5-0BFE-C4F1A974E333',
     'coverageContainer_1EE0AB4D-E845-0ADA-CD1C-84D41C2A16A2',
     'coverageContainer_E2F5187F-03E6-AB37-0882-BD7B7F3E1842',
     'coverageContainer_3F23F414-04EE-7168-E033-DC29A2470B47',
     'section_homepage1',
     'section_homepage2',
     'section_homepage3',
     'section_homepage4' ],
  config:
   { companionMinBreakpoints: 'small:0, large:768',
     config: 'default',
     cdn:
      { assetPath: '/.a',
        assetHost: 'http://www.i.cdn.cnn.com',
        baseZip: 'http://z.cdn.turner.com',
        baseChrome: 'http://i.cdn.turner.com',
        chrome: 'http://i.cdn.turner.com/cnn',
        content: 'http://i2.cdn.turner.com/cnnnext/dam/assets',
        zip: 'http://z.cdn.turner.com/cnn' },
     host:
      { data: 'http://data.cnn.com',
        nowPlayingDataHost: 'http://data.cnn.com',
        www: 'http://www.cnn.com',
        us: 'http://us.cnn.com',
        intl: 'http://edition.cnn.com',
        domain: 'http://www.cnn.com',
        domainWww: 'http://www.cnn.com',
        domainIntl: 'http://edition.cnn.com' },
     dataPaths:
      { config: '/cfg/v1/domestic/prod/michonne.json',
        headers: '/cfg/v1/domestic/prod/headers.json',
        homepage: '/v1/prod/domestic/homepage.json',
        overrides: '/cfg/v1/domestic/prod/michonne-overrides.json',
        redirects: '/cfg/v1/domestic/prod/redirects.json',
        zones: '/cfg/v1/domestic/prod/zones.json' },
     dataTimeout: 5000,
     dataTtl: 60000,
     isTest: false,
     previewDataTtl: 1,
     edition: { type: 'domestic' },
     editionCookie: 'PreferredEdition',
     searchApp:
      { searchUrl: '/search/',
        queryUrl: 'http://searchapp.cnn.com/search/query.jsp' },
     livefyre: { logoUrl: 'http://zor.livefyre.com/wjs/v1.0/images/icons/poweredbylivefyre.png' },
     truste:
      { noticeUrl: '//consent.truste.com/notice?domain=cnn.com&c=m-truste&text=true',
        modalUrl: '//preferences.truste.com/webservices/js?domain=turner.com&type=turner&js=responsive' },
     maxSockets: 1000,
     blogs:
      { crossfire: [Object],
        geekout: [Object],
        inamerica: [Object],
        johnkingusa: [Object],
        religion: [Object],
        schoolsofthought: [Object],
        startingpoint: [Object],
        strombo: [Object],
        whatsnext: [Object],
        whitehouse: [Object],
        yourbottomline: [Object] },
     s3: { sponsorContent: 'http://s3.amazonaws.com/cnn-sponsored-content' },
     runtime:
      { ads: [Object],
        airportDelays: [Object],
        anchorsPage: [Object],
        articleToArticle: [Object],
        asyncScripts: [Object],
        audio: [Object],
        bannerBreakpoints: [Object],
        bylineImages: [Object],
        cache: [Object],
        catchpoint: [Object],
        clicktale: [Object],
        cnnHosts: [Object],
        cnnx: [Object],
        configUrl: 'http://data.cnn.com/cfg/v1/domestic/prod/michonne.json',
        containerBreakpoints: [Object],
        cssOverrides: [Object],
        defaultTrendImage: [Object],
        demandLoading: [Object],
        dnsPrefetch: [Object],
        dynamicYield: [Object],
        elections: [Object],
        features: [Object],
        feedback: [Object],
        feeds: [Object],
        gravity: [Object],
        imageBreakpoints: [Object],
        jsOverrides: [Object],
        jsmd: [Object],
        jumbotron: [Object],
        layouts: [Object],
        links: [Object],
        mailchimp: [Object],
        markets: [Object],
        meta: [Object],
        mobileApps: [Object],
        nativeAds: [Object],
        newrelic: [Object],
        optimizely: [Object],
        outbrain: [Object],
        pageBadge: [Object],
        pages: [Object],
        partnerHotels: [Object],
        pingdom: [Object],
        pivit: [Object],
        proximic: [Object],
        proxy: [Object],
        pushAlerts: [Object],
        refreshTimers: [Object],
        rightRailConfig: [Object],
        skimlinks: [Object],
        soasta: [Object],
        social: [Object],
        sourcePoint: [Object],
        tripadvisor: [Object],
        userMessage: [Object],
        video: [Object],
        visualRevenue: [Object],
        weather: [Object] },
     overrides:
      { '/': [Object],
        '/index.html': [Object],
        '/intl_index.html': [Object],
        '/index2.html': [Object],
        '/index4.html': [Object],
        '/2016/03/10/politics/republican-debate-live-updates/index.html': [Object],
        '/2015/03/06/politics/liveblog-test-environment/index.html': [Object] },
     zones: { section: [Object] } } }

/*{"ads":[],"showAds":false,"background":{},"bannerText":"","branding":{"name":"default"},"displayLabel":false,"extraordinary":false,"id":"homepage1-zone-1","isMobileBannerText":false,"label":"Hero","layout":"right-fluid-left-stack","logo":{},"maximizedBanner":false,"theme":"light","transparent":false,"type":"zone","url":"","vrName":"zone-0-0","zoneContents":[{"ads":[],"branding":{"name":"default"},"id":"container_29196500-9BE9-29F0-B378-C841A71B7E6E","layout":"list-hierarchical-piped","title":"","type":"container","url":"","containerContents":[{"branding":"","cardContents":{"auxiliaryText":"","bannerText":["My brother is an ISIS executioner"],"bannerPosition":"Below Image","brandingLink":"","brandingImageUrl":"","brandingTextHead":"","brandingTextSub":"","cardSectionName":"world","contentType":"","cta":"share","descriptionText":[""],"descriptionPlainText":"","headlinePostText":"","headlinePreText":"","headlineText":["Latest video, on-camera murder, is last straw for his family"],"headlinePlainText":"Latest video, on-camera murder, is last straw for his family","iconImageUrl":"","iconType":"","isMobileBannerText":false,"kickerText":"","media":{"contentType":"image","type":"element","cutFormat":"16:9","elementContents":{"caption":"hicham chaib family pkg holmes wrn_00000312.jpg","imageAlt":"hicham chaib family pkg holmes wrn_00000312","imageUrl":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329182103-hicham-chaib-family-pkg-holmes-wrn-00000312-large-tease.jpg","label":"","galleryTitle":"","head":"","cuts":{"mini":{"height":124,"width":220,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329182103-hicham-chaib-family-pkg-holmes-wrn-00000312-small-tease.jpg"},"xsmall":{"height":169,"width":300,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329182103-hicham-chaib-family-pkg-holmes-wrn-00000312-medium-tease.jpg"},"small":{"height":259,"width":460,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329182103-hicham-chaib-family-pkg-holmes-wrn-00000312-large-tease.jpg"},"medium":{"height":438,"width":780,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329182103-hicham-chaib-family-pkg-holmes-wrn-00000312-overlay-tease.jpg"},"large":{"height":619,"width":1100,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329182103-hicham-chaib-family-pkg-holmes-wrn-00000312-super-tease.jpg"},"full16x9":{"height":900,"width":1600,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329182103-hicham-chaib-family-pkg-holmes-wrn-00000312-full-169.jpg"},"mini1x1":{"height":120,"width":120,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329182103-hicham-chaib-family-pkg-holmes-wrn-00000312-small-11.jpg"}},"responsiveImage":true}},"overMediaText":"","sectionUri":"/world/index.html","showSocialSharebar":true,"shortUrl":"http://cnn.it/1VSbEKS","statusText":"","statusColor":"exclusive","targetType":"","timestampDisplay":"","timestampUtc":"","lastModifiedText":"4 h","lastModifiedState":"","type":"card","url":"/2016/03/29/world/family-isis-executioner-hicham-chaib-speaks-out/index.html","width":"","height":""},"contentType":"article","maximizedBanner":false,"type":"card"},{"branding":"","cardContents":{"auxiliaryText":"By Joshua Berlinger and Catherine E. Shoichet, CNN","bannerText":"","bannerPosition":"Below Image","brandingLink":"","brandingImageUrl":"","brandingTextHead":"","brandingTextSub":"","cardSectionName":"us","contentType":"","cta":"share","descriptionText":["A Mississippi woman has plead guilty after authorities accused her and her fiance of trying to join <a href=\"http://www.cnn.com/2014/08/08/world/isis-fast-facts/index.html\">ISIS</a>."],"descriptionPlainText":"A Mississippi woman has plead guilty after authorities accused her and her fiance of trying to join ISIS.","headlinePostText":"","headlinePreText":"","headlineText":["U.S. woman: I tried to join ISIS"],"headlinePlainText":"U.S. woman: I tried to join ISIS","iconImageUrl":"","iconType":"","isMobileBannerText":false,"kickerText":"","media":{"contentType":"image","type":"element","cutFormat":"16:9","elementContents":{"caption":"mississippi couple isis brown wolf_00001330.jpg","imageAlt":"mississippi couple isis brown wolf_00001330","imageUrl":"http://i2.cdn.turner.com/cnnnext/dam/assets/150811132915-mississippi-couple-isis-brown-wolf-00001330-large-tease.jpg","label":"","galleryTitle":"","head":"","cuts":{"mini":{"height":169,"width":300,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/150811132915-mississippi-couple-isis-brown-wolf-00001330-small-tease.jpg"},"xsmall":{"height":259,"width":460,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/150811132915-mississippi-couple-isis-brown-wolf-00001330-medium-tease.jpg"},"small":{"height":619,"width":1100,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/150811132915-mississippi-couple-isis-brown-wolf-00001330-large-tease.jpg"},"medium":{"height":438,"width":780,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/150811132915-mississippi-couple-isis-brown-wolf-00001330-overlay-tease.jpg"},"large":{"height":900,"width":1600,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/150811132915-mississippi-couple-isis-brown-wolf-00001330-super-tease.jpg"},"full16x9":{"height":900,"width":1600,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/150811132915-mississippi-couple-isis-brown-wolf-00001330-full-169.jpg"},"mini1x1":{"height":120,"width":120,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/150811132915-mississippi-couple-isis-brown-wolf-00001330-small-11.jpg"}},"responsiveImage":true}},"overMediaText":"","sectionUri":"/us/index.html","showSocialSharebar":true,"shortUrl":"http://cnn.it/25vCw7G","statusText":"","statusColor":"","targetType":"","timestampDisplay":"","timestampUtc":"","lastModifiedText":"","lastModifiedState":"","type":"card","url":"/2016/03/30/us/mississippi-isis-guilty-plea-jaelyn-young/index.html","width":"","height":""},"contentType":"article","maximizedBanner":false,"type":"card"},{"branding":"","cardContents":{"auxiliaryText":"By Paul Cruickshank, CNN","bannerText":"","bannerPosition":"Below Image","brandingLink":"","brandingImageUrl":"","brandingTextHead":"","brandingTextSub":"","cardSectionName":"europe","contentType":"","cta":"share","descriptionText":["The night that shook Paris started with three rental cars: three cars with three teams of terrorists maneuvering through the Friday evening traffic, armed with the weapons of war."],"descriptionPlainText":"The night that shook Paris started with three rental cars: three cars with three teams of terrorists maneuvering through the Friday evening traffic, armed with the weapons of war.","headlinePostText":"","headlinePreText":"","headlineText":["Paris, Brussels: Inside story"],"headlinePlainText":"Paris, Brussels: Inside story","iconImageUrl":"","iconType":"","isMobileBannerText":false,"kickerText":"","media":{"contentType":"image","type":"element","cutFormat":"16:9","elementContents":{"caption":"The Belgian Interior Ministry's Crisis Center has released two new stills of the Paris attack suspect, Salah Abdeslam, who is still at large and is the subject of an international arrest warrant.","imageAlt":"The Belgian Interior Ministry's Crisis Center has released two new stills of the Paris attack suspect, Salah Abdeslam, who is still at large and is the subject of an international arrest warrant.","imageUrl":"http://i2.cdn.turner.com/cnnnext/dam/assets/151121194100-salah-abdeslam-mugs-split-large-tease.jpg","label":"","galleryTitle":"","head":"","cuts":{"mini":{"height":124,"width":220,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/151121194100-salah-abdeslam-mugs-split-small-tease.jpg"},"xsmall":{"height":169,"width":300,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/151121194100-salah-abdeslam-mugs-split-medium-tease.jpg"},"small":{"height":259,"width":460,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/151121194100-salah-abdeslam-mugs-split-large-tease.jpg"},"medium":{"height":438,"width":780,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/151121194100-salah-abdeslam-mugs-split-overlay-tease.jpg"},"large":{"height":619,"width":1100,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/151121194100-salah-abdeslam-mugs-split-super-tease.jpg"},"full16x9":{"height":900,"width":1600,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/151121194100-salah-abdeslam-mugs-split-full-169.jpg"},"mini1x1":{"height":120,"width":120,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/151121194100-salah-abdeslam-mugs-split-small-11.jpg"}},"responsiveImage":true}},"overMediaText":"","sectionUri":"/europe/index.html","showSocialSharebar":true,"shortUrl":"http://cnn.it/1RqvXgH","statusText":"","statusColor":"","targetType":"","timestampDisplay":"","timestampUtc":"","lastModifiedText":"2 h","lastModifiedState":"","type":"card","url":"/2016/03/30/europe/inside-paris-brussels-terror-attacks/index.html","width":"","height":""},"contentType":"article","maximizedBanner":false,"type":"card"},{"branding":"","cardContents":{"auxiliaryText":"By Savannah Pratt, CNN","bannerText":"","bannerPosition":"Below Image","brandingLink":"","brandingImageUrl":"","brandingTextHead":"","brandingTextSub":"","cardSectionName":"world","contentType":"","cta":"share","descriptionText":["<a href=\"http://www.cnn.com/2015/11/20/europe/stade-de-france-survivor-paris-attacks/\">Bley Mokono </a>was waiting for his son at a restaurant near the Stade de France when he brushed shoulders with a man drenched in sweat. Something seemed off. "],"descriptionPlainText":"Bley Mokono was waiting for his son at a restaurant near the Stade de France when he brushed shoulders with a man drenched in sweat. Something seemed off.","headlinePostText":"","headlinePreText":"","headlineText":["Face to face with suicide bomber"],"headlinePlainText":"Face to face with suicide bomber","iconImageUrl":"","iconType":"","isMobileBannerText":false,"kickerText":"","media":{"contentType":"image","type":"element","cutFormat":"16:9","elementContents":{"caption":"BERLIN, GERMANY - NOVEMBER 14:  People finish arranging candles into the word \"Paris\" next to flowers and messages left at the gate of the French Embassy following the recent terror attacks in Paris on November 14, 2015 in Berlin, Germany. Hundreds of people came throughout the day to lay flowers, candles and messages of condolence to mourn the victims of attacks last night in Paris that left at least 120 people dead across the French capital. The Islamic State (IS) has claimed responsibility for the attacks that were carried out by at least eight terrorists..  (Photo by Sean Gallup/Getty Images)","imageAlt":"BERLIN, GERMANY - NOVEMBER 14:  People finish arranging candles into the word \"Paris\" next to flowers and messages left at the gate of the French Embassy following the recent terror attacks in Paris on November 14, 2015 in Berlin, Germany. Hundreds of people came throughout the day to lay flowers, candles and messages of condolence to mourn the victims of attacks last night in Paris that left at least 120 people dead across the French capital. The Islamic State (IS) has claimed responsibility for the attacks that were carried out by at least eight terrorists..  (Photo by Sean Gallup/Getty Images)","imageUrl":"http://i2.cdn.turner.com/cnnnext/dam/assets/151126125923-paris-attacks-candles-large-tease.jpg","label":"","galleryTitle":"","head":"","cuts":{"mini":{"height":124,"width":220,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/151126125923-paris-attacks-candles-small-tease.jpg"},"xsmall":{"height":169,"width":300,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/151126125923-paris-attacks-candles-medium-tease.jpg"},"small":{"height":259,"width":460,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/151126125923-paris-attacks-candles-large-tease.jpg"},"medium":{"height":438,"width":780,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/151126125923-paris-attacks-candles-overlay-tease.jpg"},"large":{"height":619,"width":1100,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/151126125923-paris-attacks-candles-super-tease.jpg"},"full16x9":{"height":900,"width":1600,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/151126125923-paris-attacks-candles-full-169.jpg"},"mini1x1":{"height":120,"width":120,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/151126125923-paris-attacks-candles-small-11.jpg"}},"responsiveImage":true}},"overMediaText":"","sectionUri":"/world/index.html","showSocialSharebar":true,"shortUrl":"http://cnn.it/1RqwGOX","statusText":"","statusColor":"","targetType":"","timestampDisplay":"","timestampUtc":"","lastModifiedText":"2 h","lastModifiedState":"","type":"card","url":"/2016/03/30/world/paris-attacks-bley-mokono-survivor/index.html","width":"","height":""},"contentType":"article","maximizedBanner":false,"type":"card"}],"hideDescription":false,"openLinkInNewWindow":false,"vrName":"home-top-col1"},{"ads":[],"branding":{"name":"default"},"id":"container_ED5A6575-325C-80C6-B71B-C79BF85E6DFD","layout":"list-xs","title":"Top stories","type":"container","url":"","containerContents":[{"branding":"","cardContents":{"auxiliaryText":"By Eric Bradner, CNN","bannerText":"","bannerPosition":"Below Image","brandingLink":"","brandingImageUrl":"","brandingTextHead":"","brandingTextSub":"","cardSectionName":"politics","contentType":"","cta":"share","descriptionText":["Ted Cruz holds a wide lead over Donald Trump in Wisconsin less than a week from the state's primary, and Bernie Sanders has a narrow edge over Hillary Clinton, a new <a href=\"http://law.marquette.edu/poll/\" target=\"_blank\">Marquette University Law School poll</a> shows. "],"descriptionPlainText":"Ted Cruz holds a wide lead over Donald Trump in Wisconsin less than a week from the state's primary, and Bernie Sanders has a narrow edge over Hillary Clinton, a new Marquette University Law School poll shows.","headlinePostText":"","headlinePreText":"","headlineText":["Poll: Cruz holds wide lead in Wisc."],"headlinePlainText":"Poll: Cruz holds wide lead in Wisc.","iconImageUrl":"","iconType":"","isMobileBannerText":false,"kickerText":"","media":{"contentType":"image","type":"element","cutFormat":"16:9","elementContents":{"caption":"","imageAlt":"cruz trump kasich townhall nightof photos comp","imageUrl":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329231710-cruz-trump-kasich-townhall-nightof-photos-comp-large-tease.jpg","label":"","galleryTitle":"","head":"","cuts":{"mini":{"height":124,"width":220,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329231710-cruz-trump-kasich-townhall-nightof-photos-comp-small-tease.jpg"},"xsmall":{"height":169,"width":300,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329231710-cruz-trump-kasich-townhall-nightof-photos-comp-medium-tease.jpg"},"small":{"height":259,"width":460,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329231710-cruz-trump-kasich-townhall-nightof-photos-comp-large-tease.jpg"},"medium":{"height":438,"width":780,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329231710-cruz-trump-kasich-townhall-nightof-photos-comp-overlay-tease.jpg"},"large":{"height":619,"width":1100,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329231710-cruz-trump-kasich-townhall-nightof-photos-comp-super-tease.jpg"},"full16x9":{"height":900,"width":1600,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329231710-cruz-trump-kasich-townhall-nightof-photos-comp-full-169.jpg"},"mini1x1":{"height":120,"width":120,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329231710-cruz-trump-kasich-townhall-nightof-photos-comp-small-11.jpg"}},"responsiveImage":true}},"overMediaText":"","sectionUri":"/politics/index.html","showSocialSharebar":true,"shortUrl":"http://cnn.it/1RqXfmX","statusText":"","statusColor":"","targetType":"","timestampDisplay":"","timestampUtc":"","lastModifiedText":"15 m","lastModifiedState":"red","type":"card","url":"/2016/03/30/politics/wisconsin-poll-ted-cruz-bernie-sanders-lead/index.html","width":"","height":""},"contentType":"article","maximizedBanner":false,"type":"card"},{"branding":"","cardContents":{"auxiliaryText":"By Allie Malloy and Wesley Bruer, CNN","bannerText":"","bannerPosition":"Below Image","brandingLink":"","brandingImageUrl":"","brandingTextHead":"","brandingTextSub":"","cardSectionName":"politics","contentType":"","cta":"share","descriptionText":["President Barack Obama is commuting the prison sentences of 61 people who were serving time for drug offenses, the White House announced Wednesday."],"descriptionPlainText":"President Barack Obama is commuting the prison sentences of 61 people who were serving time for drug offenses, the White House announced Wednesday.","headlinePostText":"","headlinePreText":"","headlineText":["Obama commutes prison sentences "],"headlinePlainText":"Obama commutes prison sentences ","iconImageUrl":"","iconType":"","isMobileBannerText":false,"kickerText":"","media":{"contentType":"image","type":"element","cutFormat":"16:9","elementContents":{"caption":"President Barack Obama delivers the keynote address at the awards dinner for Syracuse University's Toner Prize for Excellence in Political Reporting at the Andrew W. Mellon Auditorium March 28, 2016 in Washington, DC.","imageAlt":"President Barack Obama delivers the keynote address at the awards dinner for Syracuse University's Toner Prize for Excellence in Political Reporting at the Andrew W. Mellon Auditorium March 28, 2016 in Washington, DC.","imageUrl":"http://i2.cdn.turner.com/cnnnext/dam/assets/160328213047-obama-toner-large-tease.jpg","label":"","galleryTitle":"","head":"","cuts":{"mini":{"height":124,"width":220,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160328213047-obama-toner-small-tease.jpg"},"xsmall":{"height":169,"width":300,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160328213047-obama-toner-medium-tease.jpg"},"small":{"height":259,"width":460,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160328213047-obama-toner-large-tease.jpg"},"medium":{"height":438,"width":780,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160328213047-obama-toner-overlay-tease.jpg"},"large":{"height":619,"width":1100,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160328213047-obama-toner-super-tease.jpg"},"full16x9":{"height":900,"width":1600,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160328213047-obama-toner-full-169.jpg"},"mini1x1":{"height":120,"width":120,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160328213047-obama-toner-small-11.jpg"}},"responsiveImage":true}},"overMediaText":"","sectionUri":"/politics/index.html","showSocialSharebar":true,"shortUrl":"http://cnn.it/1ZL0Qy8","statusText":"","statusColor":"","targetType":"","timestampDisplay":"","timestampUtc":"","lastModifiedText":"6 m","lastModifiedState":"red","type":"card","url":"/2016/03/30/politics/barack-obama-commutes-prison-sentences/index.html","width":"","height":""},"contentType":"article","maximizedBanner":false,"type":"card"},{"branding":"","cardContents":{"auxiliaryText":"By Dana Ford and Eliott C. McLaughlin, CNN","bannerText":"","bannerPosition":"Below Image","brandingLink":"","brandingImageUrl":"","brandingTextHead":"","brandingTextSub":"","cardSectionName":"us","contentType":"","cta":"share","descriptionText":["Minneapolis police Officers Mike Ringgenberg and Dustin Schwarze will not face charges in the November shooting death of 24-year-old Jamar Clark, Hennepin County Attorney Mike Freeman said Wednesday. "],"descriptionPlainText":"Minneapolis police Officers Mike Ringgenberg and Dustin Schwarze will not face charges in the November shooting death of 24-year-old Jamar Clark, Hennepin County Attorney Mike Freeman said Wednesday.","headlinePostText":"","headlinePreText":"","headlineText":["No charges in Jamar Clark death"],"headlinePlainText":"No charges in Jamar Clark death","iconImageUrl":"","iconType":"","isMobileBannerText":false,"kickerText":"","media":{"contentType":"image","type":"element","cutFormat":"16:9","elementContents":{"caption":"jamar clark shooting video minnesota governor pkg_00003024.jpg","imageAlt":"jamar clark shooting video minnesota governor pkg_00003024","imageUrl":"http://i2.cdn.turner.com/cnnnext/dam/assets/151124011955-jamar-clark-shooting-video-minnesota-governor-pkg-00003024-large-tease.jpg","label":"","galleryTitle":"","head":"","cuts":{"mini":{"height":124,"width":220,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/151124011955-jamar-clark-shooting-video-minnesota-governor-pkg-00003024-small-tease.jpg"},"xsmall":{"height":169,"width":300,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/151124011955-jamar-clark-shooting-video-minnesota-governor-pkg-00003024-medium-tease.jpg"},"small":{"height":259,"width":460,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/151124011955-jamar-clark-shooting-video-minnesota-governor-pkg-00003024-large-tease.jpg"},"medium":{"height":438,"width":780,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/151124011955-jamar-clark-shooting-video-minnesota-governor-pkg-00003024-overlay-tease.jpg"},"large":{"height":619,"width":1100,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/151124011955-jamar-clark-shooting-video-minnesota-governor-pkg-00003024-super-tease.jpg"},"full16x9":{"height":900,"width":1600,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/151124011955-jamar-clark-shooting-video-minnesota-governor-pkg-00003024-full-169.jpg"},"mini1x1":{"height":120,"width":120,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/151124011955-jamar-clark-shooting-video-minnesota-governor-pkg-00003024-small-11.jpg"}},"responsiveImage":true}},"overMediaText":"","sectionUri":"/us/index.html","showSocialSharebar":true,"shortUrl":"http://cnn.it/1PFM7Nv","statusText":"","statusColor":"","targetType":"","timestampDisplay":"","timestampUtc":"","lastModifiedText":"21 m","lastModifiedState":"red","type":"card","url":"/2016/03/30/us/minneapolis-jamar-clark-police-shooting-no-charges/index.html","width":"","height":""},"contentType":"article","maximizedBanner":false,"type":"card"},{"branding":"","cardContents":{"auxiliaryText":"","bannerText":["Pledge? What pledge?"],"bannerPosition":"Below Image","brandingLink":"","brandingImageUrl":"","brandingTextHead":"","brandingTextSub":"","cardSectionName":"politics","contentType":"","cta":"share","descriptionText":["The ironclad commitment each Republican presidential candidate gave to support the party's nominee -- no matter who that may be -- is no more. "],"descriptionPlainText":"The ironclad commitment each Republican presidential candidate gave to support the party's nominee -- no matter who that may be -- is no more.","headlinePostText":"","headlinePreText":"","headlineText":["GOP candidates back off pledge"],"headlinePlainText":"GOP candidates back off pledge","iconImageUrl":"","iconType":"","isMobileBannerText":false,"kickerText":"","media":{"contentType":"image","type":"element","cutFormat":"16:9","elementContents":{"caption":"","imageAlt":"","imageUrl":"http://i2.cdn.turner.com/cnnnext/dam/assets/160330091040-cruz-trump-kasich-0329-town-hall-large-tease.jpg","label":"","galleryTitle":"","head":"","cuts":{"mini":{"height":124,"width":220,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160330091040-cruz-trump-kasich-0329-town-hall-small-tease.jpg"},"xsmall":{"height":169,"width":300,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160330091040-cruz-trump-kasich-0329-town-hall-medium-tease.jpg"},"small":{"height":259,"width":460,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160330091040-cruz-trump-kasich-0329-town-hall-large-tease.jpg"},"medium":{"height":438,"width":780,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160330091040-cruz-trump-kasich-0329-town-hall-overlay-tease.jpg"},"large":{"height":619,"width":1100,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160330091040-cruz-trump-kasich-0329-town-hall-super-tease.jpg"},"full16x9":{"height":900,"width":1600,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160330091040-cruz-trump-kasich-0329-town-hall-full-169.jpg"},"mini1x1":{"height":120,"width":120,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160330091040-cruz-trump-kasich-0329-town-hall-small-11.jpg"}},"responsiveImage":true}},"overMediaText":"","sectionUri":"/politics/index.html","showSocialSharebar":true,"shortUrl":"http://cnn.it/1ThKnAK","statusText":"","statusColor":"","targetType":"","timestampDisplay":"","timestampUtc":"","lastModifiedText":"4 h","lastModifiedState":"","type":"card","url":"/2016/03/30/politics/republican-town-hall-takeaways/index.html","width":"","height":""},"contentType":"article","maximizedBanner":true,"type":"card"},{"branding":"","cardContents":{"auxiliaryText":"By Eric Bradner, CNN","bannerText":"","bannerPosition":"Below Image","brandingLink":"","brandingImageUrl":"","brandingTextHead":"","brandingTextSub":"","cardSectionName":"politics","contentType":"","cta":"share","descriptionText":["A U.S. Border Patrol agents' union is endorsing Donald Trump for president, offering the Republican front-runner support on his signature issue of immigration while praising him as a break from the current political system."],"descriptionPlainText":"A U.S. Border Patrol agents' union is endorsing Donald Trump for president, offering the Republican front-runner support on his signature issue of immigration while praising him as a break from the current political system.","headlinePostText":"","headlinePreText":"","headlineText":["Border Patrol union endorses Trump"],"headlinePlainText":"Border Patrol union endorses Trump","iconImageUrl":"","iconType":"","isMobileBannerText":false,"kickerText":"","media":{"contentType":"image","type":"element","cutFormat":"16:9","elementContents":{"caption":"Republican Presidential candidate and business mogul Donald Trump exits his plane during his trip to the border on July 23, 2015 in Laredo, Texas.","imageAlt":"Republican Presidential candidate and business mogul Donald Trump exits his plane during his trip to the border on July 23, 2015 in Laredo, Texas.","imageUrl":"http://i2.cdn.turner.com/cnnnext/dam/assets/150723184216-donald-trump-july-23-2015-large-tease.jpg","label":"","galleryTitle":"","head":"","cuts":{"mini":{"height":169,"width":300,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/150723184216-donald-trump-july-23-2015-small-tease.jpg"},"xsmall":{"height":259,"width":460,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/150723184216-donald-trump-july-23-2015-medium-tease.jpg"},"small":{"height":619,"width":1100,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/150723184216-donald-trump-july-23-2015-large-tease.jpg"},"medium":{"height":438,"width":780,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/150723184216-donald-trump-july-23-2015-overlay-tease.jpg"},"large":{"height":900,"width":1600,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/150723184216-donald-trump-july-23-2015-super-tease.jpg"},"full16x9":{"height":900,"width":1600,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/150723184216-donald-trump-july-23-2015-full-169.jpg"},"mini1x1":{"height":120,"width":120,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/150723184216-donald-trump-july-23-2015-small-11.jpg"}},"responsiveImage":true}},"overMediaText":"","sectionUri":"/politics/index.html","showSocialSharebar":true,"shortUrl":"http://cnn.it/1UteUgj","statusText":"","statusColor":"","targetType":"","timestampDisplay":"","timestampUtc":"","lastModifiedText":"1 h","lastModifiedState":"","type":"card","url":"/2016/03/30/politics/border-patrol-union-endorses-donald-trump/index.html","width":"","height":""},"contentType":"article","maximizedBanner":false,"type":"card"},{"branding":"","cardContents":{"auxiliaryText":"By Catherine E. Shoichet and Sara Ganim, CNN","bannerText":"","bannerPosition":"Below Image","brandingLink":"","brandingImageUrl":"","brandingTextHead":"","brandingTextSub":"","cardSectionName":"health","contentType":"","cta":"share","descriptionText":["Terminix has agreed to pay $10 million for illegally using a pesticide containing a toxic chemical in the U.S. Virgin Islands, <a href=\"https://www.justice.gov/opa/pr/terminix-companies-agree-pay-10-million-applying-restricted-use-pesticide-residences-us\" target=\"_blank\">federal officials said</a>."],"descriptionPlainText":"Terminix has agreed to pay $10 million for illegally using a pesticide containing a toxic chemical in the U.S. Virgin Islands, federal officials said.","headlinePostText":"","headlinePreText":"","headlineText":["Terminix fined $10 million"],"headlinePlainText":"Terminix fined $10 million","iconImageUrl":"","iconType":"","isMobileBannerText":false,"kickerText":"","media":{"contentType":"image","type":"element","cutFormat":"16:9","elementContents":{"caption":"","imageAlt":"","imageUrl":"http://i2.cdn.turner.com/cnnnext/dam/assets/150404114350-feds-say-pesticide-suspected-in-family-illness-terminix-large-169.png","label":"","galleryTitle":"","head":"","cuts":{"mini":{"height":124,"width":220,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/150404114350-feds-say-pesticide-suspected-in-family-illness-terminix-small-169.png"},"xsmall":{"height":173,"width":307,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/150404114350-feds-say-pesticide-suspected-in-family-illness-terminix-medium-plus-169.png"},"small":{"height":259,"width":460,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/150404114350-feds-say-pesticide-suspected-in-family-illness-terminix-large-169.png"},"medium":{"height":438,"width":780,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/150404114350-feds-say-pesticide-suspected-in-family-illness-terminix-exlarge-169.png"},"large":{"height":619,"width":1100,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/150404114350-feds-say-pesticide-suspected-in-family-illness-terminix-super-169.png"},"full16x9":{"height":900,"width":1600,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/150404114350-feds-say-pesticide-suspected-in-family-illness-terminix-full-169.png"},"mini1x1":{"height":120,"width":120,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/150404114350-feds-say-pesticide-suspected-in-family-illness-terminix-small-11.png"}},"responsiveImage":true}},"overMediaText":"","sectionUri":"/health/index.html","showSocialSharebar":true,"shortUrl":"http://cnn.it/1VSqGAm","statusText":"","statusColor":"","targetType":"","timestampDisplay":"","timestampUtc":"","lastModifiedText":"","lastModifiedState":"","type":"card","url":"/2016/03/29/health/terminix-fined-virgin-islands-pesticide/index.html","width":"","height":""},"contentType":"article","maximizedBanner":false,"type":"card"},{"branding":"","cardContents":{"auxiliaryText":"","bannerText":"","bannerPosition":"Below Image","brandingLink":"","brandingImageUrl":"","brandingTextHead":"","brandingTextSub":"","cardSectionName":"","contentType":"","cta":"share","descriptionText":["Boeing has announced it will cut 4,000 jobs to reduce costs as it battles rival Airbus and softer demand for aircraft."],"descriptionPlainText":"Boeing has announced it will cut 4,000 jobs to reduce costs as it battles rival Airbus and softer demand for aircraft.","headlinePostText":"","headlinePreText":"","headlineText":["Boeing cutting 4,000 jobs"],"headlinePlainText":"Boeing cutting 4,000 jobs","iconImageUrl":"","iconType":"","isMobileBannerText":false,"kickerText":"","media":{"contentType":"image","type":"element","cutFormat":"16:9","elementContents":{"caption":"","imageAlt":"","imageUrl":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329210424-cnnmoney-boeing-dreamliner-large-tease.jpg","label":"","galleryTitle":"","head":"","cuts":{"mini":{"height":124,"width":220,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329210424-cnnmoney-boeing-dreamliner-small-tease.jpg"},"xsmall":{"height":169,"width":300,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329210424-cnnmoney-boeing-dreamliner-medium-tease.jpg"},"small":{"height":259,"width":460,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329210424-cnnmoney-boeing-dreamliner-large-tease.jpg"},"medium":{"height":438,"width":780,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329210424-cnnmoney-boeing-dreamliner-overlay-tease.jpg"},"large":{"height":619,"width":1100,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329210424-cnnmoney-boeing-dreamliner-super-tease.jpg"},"full16x9":{"height":900,"width":1600,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329210424-cnnmoney-boeing-dreamliner-full-169.jpg"},"mini1x1":{"height":120,"width":120,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329210424-cnnmoney-boeing-dreamliner-small-11.jpg"}},"responsiveImage":true}},"overMediaText":"","sectionUri":"","showSocialSharebar":true,"shortUrl":"","statusText":"","statusColor":"","targetType":"","timestampDisplay":"","timestampUtc":"","lastModifiedText":"","lastModifiedState":"","type":"card","url":"http://money.cnn.com/2016/03/30/news/companies/boeing-job-cuts/index.html","width":"","height":""},"contentType":"hyperlink","maximizedBanner":false,"type":"card"},{"branding":"","cardContents":{"auxiliaryText":"","bannerText":"","bannerPosition":"Below Image","brandingLink":"","brandingImageUrl":"","brandingTextHead":"","brandingTextSub":"","cardSectionName":"","contentType":"","cta":"share","descriptionText":["Patients in Obamacare are sicker and need significantly more medical care than those in employer-sponsored plans, according to a new Blue Cross Blue Shield Association report."],"descriptionPlainText":"Patients in Obamacare are sicker and need significantly more medical care than those in employer-sponsored plans, according to a new Blue Cross Blue Shield Association report.","headlinePostText":"","headlinePreText":"","headlineText":["Obamacare patients sicker, costlier"],"headlinePlainText":"Obamacare patients sicker, costlier","iconImageUrl":"","iconType":"","isMobileBannerText":false,"kickerText":"","media":{"contentType":"image","type":"element","cutFormat":"16:9","elementContents":{"caption":"","imageAlt":"","imageUrl":"http://i2.cdn.turner.com/cnnnext/dam/assets/160330111013-money-obamacare-tease-large-tease.jpg","label":"","galleryTitle":"","head":"","cuts":{"mini":{"height":124,"width":220,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160330111013-money-obamacare-tease-small-tease.jpg"},"xsmall":{"height":169,"width":300,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160330111013-money-obamacare-tease-medium-tease.jpg"},"small":{"height":259,"width":460,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160330111013-money-obamacare-tease-large-tease.jpg"},"medium":{"height":438,"width":780,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160330111013-money-obamacare-tease-overlay-tease.jpg"},"large":{"height":619,"width":1100,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160330111013-money-obamacare-tease-super-tease.jpg"},"full16x9":{"height":900,"width":1600,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160330111013-money-obamacare-tease-full-169.jpg"},"mini1x1":{"height":120,"width":120,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160330111013-money-obamacare-tease-small-11.jpg"}},"responsiveImage":true}},"overMediaText":"","sectionUri":"","showSocialSharebar":true,"shortUrl":"","statusText":"","statusColor":"","targetType":"","timestampDisplay":"","timestampUtc":"","lastModifiedText":"","lastModifiedState":"","type":"card","url":"http://money.cnn.com/2016/03/30/news/economy/obamacare-patients-blue-cross-blue-shield/index.html","width":"","height":""},"contentType":"hyperlink","maximizedBanner":false,"type":"card"},{"branding":"","cardContents":{"auxiliaryText":"By Eric Bradner and Gregory Krieg, CNN","bannerText":"","bannerPosition":"Below Image","brandingLink":"","brandingImageUrl":"","brandingTextHead":"","brandingTextSub":"","cardSectionName":"politics","contentType":"","cta":"share","descriptionText":["Ted Cruz on Tuesday night accused Donald Trump's allies of conspiring to publish a National Enquirer story alleging the Texas senator had multiple affairs with unnamed women."],"descriptionPlainText":"Ted Cruz on Tuesday night accused Donald Trump's allies of conspiring to publish a National Enquirer story alleging the Texas senator had multiple affairs with unnamed women.","headlinePostText":"","headlinePreText":"","headlineText":["Latest sign of chaos in the GOP?"],"headlinePlainText":"Latest sign of chaos in the GOP?","iconImageUrl":"","iconType":"","isMobileBannerText":false,"kickerText":"","media":{"contentType":"image","type":"element","cutFormat":"16:9","elementContents":{"caption":"","imageAlt":"","imageUrl":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329170205-amanda-carpenter-on-the-lead-0329-large-tease.jpg","label":"","galleryTitle":"","head":"","cuts":{"mini":{"height":124,"width":220,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329170205-amanda-carpenter-on-the-lead-0329-small-tease.jpg"},"xsmall":{"height":169,"width":300,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329170205-amanda-carpenter-on-the-lead-0329-medium-tease.jpg"},"small":{"height":259,"width":460,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329170205-amanda-carpenter-on-the-lead-0329-large-tease.jpg"},"medium":{"height":438,"width":780,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329170205-amanda-carpenter-on-the-lead-0329-overlay-tease.jpg"},"large":{"height":619,"width":1100,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329170205-amanda-carpenter-on-the-lead-0329-super-tease.jpg"},"full16x9":{"height":900,"width":1600,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329170205-amanda-carpenter-on-the-lead-0329-full-169.jpg"},"mini1x1":{"height":120,"width":120,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329170205-amanda-carpenter-on-the-lead-0329-small-11.jpg"}},"responsiveImage":true}},"overMediaText":"","sectionUri":"/politics/index.html","showSocialSharebar":true,"shortUrl":"http://cnn.it/22ZiBeY","statusText":"","statusColor":"","targetType":"","timestampDisplay":"","timestampUtc":"","lastModifiedText":"","lastModifiedState":"","type":"card","url":"/2016/03/29/politics/amanda-carpenter-ted-cruz-allegations/index.html","width":"","height":""},"contentType":"article","maximizedBanner":false,"type":"card"},{"branding":"","cardContents":{"auxiliaryText":"By Joshua Berlinger, CNN","bannerText":"","bannerPosition":"Below Image","brandingLink":"","brandingImageUrl":"","brandingTextHead":"","brandingTextSub":"","cardSectionName":"entertainment","contentType":"","cta":"share","descriptionText":["One of Elton John's personal security guards is suing the musician, alleging battery, sexual battery and sexual harassment."],"descriptionPlainText":"One of Elton John's personal security guards is suing the musician, alleging battery, sexual battery and sexual harassment.","headlinePostText":"","headlinePreText":"","headlineText":["Elton John faces harassment suit"],"headlinePlainText":"Elton John faces harassment suit","iconImageUrl":"","iconType":"","isMobileBannerText":false,"kickerText":"","media":{"contentType":"image","type":"element","cutFormat":"16:9","elementContents":{"caption":"Elton John performs during a fundraiser for Democratic presidential candidate Hillary Clinton at Radio City Music Hall on March 2, 2016 in New York City. ","imageAlt":"Elton John performs during a fundraiser for Democratic presidential candidate Hillary Clinton at Radio City Music Hall on March 2, 2016 in New York City. ","imageUrl":"http://i2.cdn.turner.com/cnnnext/dam/assets/160302215028-elton-john-fundraiser-large-tease.jpg","label":"","galleryTitle":"","head":"","cuts":{"mini":{"height":124,"width":220,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160302215028-elton-john-fundraiser-small-tease.jpg"},"xsmall":{"height":169,"width":300,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160302215028-elton-john-fundraiser-medium-tease.jpg"},"small":{"height":259,"width":460,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160302215028-elton-john-fundraiser-large-tease.jpg"},"medium":{"height":438,"width":780,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160302215028-elton-john-fundraiser-overlay-tease.jpg"},"large":{"height":619,"width":1100,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160302215028-elton-john-fundraiser-super-tease.jpg"},"full16x9":{"height":900,"width":1600,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160302215028-elton-john-fundraiser-full-169.jpg"},"mini1x1":{"height":120,"width":120,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160302215028-elton-john-fundraiser-small-11.jpg"}},"responsiveImage":true}},"overMediaText":"","sectionUri":"/entertainment/index.html","showSocialSharebar":true,"shortUrl":"http://cnn.it/1UUbCCK","statusText":"","statusColor":"","targetType":"","timestampDisplay":"","timestampUtc":"","lastModifiedText":"16 m","lastModifiedState":"red","type":"card","url":"/2016/03/30/entertainment/elton-john-sexual-harassment-lawsuit/index.html","width":"","height":""},"contentType":"article","maximizedBanner":false,"type":"card"},{"branding":"","cardContents":{"auxiliaryText":"","bannerText":"","bannerPosition":"Below Image","brandingLink":"","brandingImageUrl":"","brandingTextHead":"","brandingTextSub":"","cardSectionName":"video","contentType":"","cta":"share","descriptionText":["A newly released North Korean propaganda film portrays the nation engaging in a nuclear war with the United States. CNN's Paula Hancocks reports."],"descriptionPlainText":"A newly released North Korean propaganda film portrays the nation engaging in a nuclear war with the United States. CNN's Paula Hancocks reports.","headlinePostText":"","headlinePreText":"","headlineText":["N. Korea threatens U.S. strike"],"headlinePlainText":"N. Korea threatens U.S. strike","iconImageUrl":"","iconType":"video","isMobileBannerText":false,"kickerText":"","media":{"contentType":"image","type":"element","cutFormat":"16:9","elementContents":{"caption":"north korea propaganda video nuclear war paula hancocks lkl_00002217.jpg","imageAlt":"north korea propaganda video nuclear war paula hancocks lkl_00002217","imageUrl":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329063929-north-korea-propaganda-video-nuclear-war-paula-hancocks-lkl-00002217-large-tease.jpg","label":"","galleryTitle":"","head":"","cuts":{"mini":{"height":124,"width":220,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329063929-north-korea-propaganda-video-nuclear-war-paula-hancocks-lkl-00002217-small-tease.jpg"},"xsmall":{"height":169,"width":300,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329063929-north-korea-propaganda-video-nuclear-war-paula-hancocks-lkl-00002217-medium-tease.jpg"},"small":{"height":259,"width":460,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329063929-north-korea-propaganda-video-nuclear-war-paula-hancocks-lkl-00002217-large-tease.jpg"},"medium":{"height":438,"width":780,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329063929-north-korea-propaganda-video-nuclear-war-paula-hancocks-lkl-00002217-overlay-tease.jpg"},"large":{"height":619,"width":1100,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329063929-north-korea-propaganda-video-nuclear-war-paula-hancocks-lkl-00002217-super-tease.jpg"},"full16x9":{"height":900,"width":1600,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329063929-north-korea-propaganda-video-nuclear-war-paula-hancocks-lkl-00002217-full-169.jpg"},"mini1x1":{"height":120,"width":120,"type":"jpg","uri":"http://i2.cdn.turner.com/cnnnext/dam/assets/160329063929-north-korea-propaganda-video-nuclear-war-paula-hancocks-lkl-00002217-small-11.jpg"}},"responsiveImage":true},"duration":"1:28"},"overMediaText":"","sectionUri":"","showSocialSharebar":true,"shortUrl":"http://cnn.it/1Url14M","statusText":"","statusColor":"","targetType":"","timestampDisplay":"","timestampUtc":"","lastModifiedText":"","lastModifiedState":"","type":"card","url":"/videos/world/2016/03/29/north-korea-propaganda-video-nuclear-war-paula-hancocks-lkl.cnn","width":"","height":"","videoCMSUri":"/video/data/3.0/video/world/2016/03/29/north-korea-propaganda-video-nuclear-war-paula-hancocks-lkl.cnn/index.xml","videoId":"world/2016/03/29/north-korea-propaganda-video-nuclear-war-paula-hancocks-lkl.cnn","dateCreated":"9:00 AM ET, Wed March 30, 2016","sourceName":"","sourceLink":""},"contentType":"video","maximizedBanner":false,"type":"card"}],"hideDescription":false,"openLinkInNewWindow":false,"vrName":"home-top-col2"}],"uri":"","pageType":"section","pageSubType":"","sectionName":"homepage","vertical":"","autoStartVideo":false,"surrogateKeys":["video_AFC60D0C-E74B-E697-CD55-C8760F6C7AFC","video_F518347C-F9B7-73F0-C288-C77AFCF17104","video_5A6D98E5-9C9B-BE5D-2B9C-9A980A206463","video_6BD67003-6F70-F094-AC11-C1E91BFF3681","video_7634F12F-700D-F1B2-B339-C32D9521635E","video_FAD86C33-43A5-41B6-138A-B0387CE593B7","video_F8D0EE67-972A-7DC8-9958-B3DF19D2BB10","video_49C66417-9B2B-F335-F43E-B00535BE839C","video_62ED4939-5FBE-F378-E3C4-B3ACA103C7C1","video_E7CB8FCE-6CD7-66DB-3D95-C77FCA3BB699","video_7F7CA497-D4BB-74B9-D536-BD20C503E2B8","video_8C9B29B5-098B-43EA-9E53-BF5252E63B38","video_CC8E8C45-925C-24D1-7136-AEBFFDCB8B28","video_0608A904-14AE-9457-9900-C02FBB6EFC0C","coverageContainer_8C4FF4C7-3E30-1ABB-5B13-C072E64EDA38","coverageContainer_E79D9B5D-A232-6A5A-9932-D8EFA2AD6DE4","coverageContainer_07F99287-1079-9ADB-76BD-95C68EC6C6DB","coverageContainer_6CE44821-A427-1A1C-57A8-EE10F2E9E229","coverageContainer_21948641-BF4F-596F-9FE6-3DAB5367FFEC","coverageContainer_B5ED9522-33C5-5FB3-7CEE-3E0FA1AA1D2B","coverageContainer_7B64F8A7-1183-AF81-87C0-3E18473445EF","coverageContainer_F3473E01-B28B-725B-B227-3E15DEA10FA5","coverageContainer_BCBC930A-B0DD-662D-CA7E-B7D442F8105F","coverageContainer_126936B6-042C-7E1F-EBB7-B7D9517452AB","coverageContainer_53B5E99A-870D-57C5-0BFE-C4F1A974E333","coverageContainer_1EE0AB4D-E845-0ADA-CD1C-84D41C2A16A2","coverageContainer_E2F5187F-03E6-AB37-0882-BD7B7F3E1842","coverageContainer_3F23F414-04EE-7168-E033-DC29A2470B47","section_homepage1","section_homepage2","section_homepage3","section_homepage4"],"config":{"companionMinBreakpoints":"small:0, large:768","config":"default","cdn":{"assetPath":"/.a","assetHost":"http://www.i.cdn.cnn.com","baseZip":"http://z.cdn.turner.com","baseChrome":"http://i.cdn.turner.com","chrome":"http://i.cdn.turner.com/cnn","content":"http://i2.cdn.turner.com/cnnnext/dam/assets","zip":"http://z.cdn.turner.com/cnn"},"host":{"data":"http://data.cnn.com","nowPlayingDataHost":"http://data.cnn.com","www":"http://www.cnn.com","us":"http://us.cnn.com","intl":"http://edition.cnn.com","domain":"http://www.cnn.com","domainWww":"http://www.cnn.com","domainIntl":"http://edition.cnn.com"},"dataPaths":{"config":"/cfg/v1/domestic/prod/michonne.json","headers":"/cfg/v1/domestic/prod/headers.json","homepage":"/v1/prod/domestic/homepage.json","overrides":"/cfg/v1/domestic/prod/michonne-overrides.json","redirects":"/cfg/v1/domestic/prod/redirects.json","zones":"/cfg/v1/domestic/prod/zones.json"},"dataTimeout":5000,"dataTtl":60000,"isTest":false,"previewDataTtl":1,"edition":{"type":"domestic"},"editionCookie":"PreferredEdition","searchApp":{"searchUrl":"/search/","queryUrl":"http://searchapp.cnn.com/search/query.jsp"},"livefyre":{"logoUrl":"http://zor.livefyre.com/wjs/v1.0/images/icons/poweredbylivefyre.png"},"truste":{"noticeUrl":"//consent.truste.com/notice?domain=cnn.com&c=m-truste&text=true","modalUrl":"//preferences.truste.com/webservices/js?domain=turner.com&type=turner&js=responsive"},"maxSockets":1000,"blogs":{"crossfire":{"section":"tv","modelType":"show","parent":"/shows/crossfire"},"geekout":{"section":"living"},"inamerica":{"section":"us"},"johnkingusa":{"section":"us"},"religion":{"section":"tv","modelType":"list","parent":"/living/belief-blog"},"schoolsofthought":{"section":"us"},"startingpoint":{"section":"tv"},"strombo":{"section":"us"},"whatsnext":{"section":"tech"},"whitehouse":{"section":"politics"},"yourbottomline":{"section":"tv"}},"s3":{"sponsorContent":"http://s3.amazonaws.com/cnn-sponsored-content"},"runtime":{"ads":{"ais":"http://z.cdn.turner.com/analytics/cnn/ais.js","amazon":{"amznkey":"3159"},"companionAdStates":[{"label":"small","minWidth":0},{"label":"large","minWidth":768}],"epic":{"registryPath":"http://z.cdn.turner.com/ads/cnn"},"freewheel":{"networkId":48804,"profile":"cnn_mobile_web_linktag2"},"galleryAdClicks":6},"airportDelays":{"getAirportData":"/airport/status","serviceHost":"http://services.faa.gov"},"anchorsPage":{"headerText":"Faces of CNN Worldwide"},"articleToArticle":{"threshold":1200,"disableHoverThreshold":1},"asyncScripts":{"pivit":{"id":"pivit-js","src":"https://cdn.pivit.io/web-assets/widgets/1.6.19/widgets.js"}},"audio":{"podcastHost":"http://podcasts.cnn.net/cnn"},"bannerBreakpoints":{"states":"c0.0:0, c8.5:600, c9.5:680, c10.5:760, c11.5:840, c12.5:920, c13.5:1000, c14.5:1080"},"bylineImages":{"threshold":640},"cache":{"defaultTime":1},"catchpoint":{"configUrl":"http://g.3gl.net/jp/184/v2/C","requestUrl":"http://g.3gl.net/jp/v2/M"},"clicktale":{"src":"/www04/ptc/342da402-a44b-4b59-aba4-8fc2310e4478.js"},"cnnHosts":["cnn.com","cnnespanol.com","cnnespanol.cnn.com","cnnpolitics.com","edition.cnn.com","inhealth.cnn.com","ireport.cnn.com","money.cnn.com","travel.cnn.com","www.cnn.com","www.cnnespanol.com","www.cnnespanol.cnn.com","www.cnnpolitics.com","www.ireport.cnn.com","www.money.cnn.com","www.travel.cnn.com"],"cnnx":{"downloadUrl":"http://cnn.it/go","streamUrl":"http://go.cnn.com/?stream="},"configUrl":"http://data.cnn.com/cfg/v1/domestic/prod/michonne.json","containerBreakpoints":{"full16x9":1100,"large":780,"medium":460,"small":300,"xsmall":0},"cssOverrides":{"url":"http://z.cdn.turner.com/cnn/.e/css/4.0/overrides.css"},"defaultTrendImage":{"url":"http://i.cdn.turner.com/cnn/.element/img/4.0/logos/cnn_logo_dark_grey.png"},"demandLoading":{"enableForCarousels":true,"enableForImages":true,"threshold":300},"dnsPrefetch":["//weather.cnn.com","//pmd.cdn.turner.com","//ht.cdn.turner.com","//i2.cdn.turner.com","//www.ugdturner.com","//vrt.outbrain.com","//consent.truste.com"],"dynamicYield":{"scSec":8766314,"srcDynamic":"//cdn.dynamicyield.com/api/8766314/api_dynamic.js","srcStatic":"//cdn.dynamicyield.com/api/8766314/api_static.js"},"elections":{"serviceHost":"http://election-2016.inturner.io"},"features":{"enable404SearchResults":false,"enableAirportDelays":true,"enableAmazonDisplayAds":true,"enableAmazonVideoAds":true,"enableAppDeeplinks":true,"enableAppia":false,"enableAspenForCVP":true,"enableAspenForTOS":true,"enableBreakingNews":true,"enableCatchpoint":false,"enableClickTale":true,"enableCriteoAds":true,"enableCssOverrides":false,"enableDisplayAds":true,"enableDnsPrefetch":true,"enableDynamicYield":false,"enableEpicAds":true,"enableFacebookAuthorTags":true,"enableFloatingShareBar":true,"enableGalleryAds":true,"enableGigyaLogin":true,"enableGravity":false,"enableIZLfooter":false,"enableJsOverrides":false,"enableKrux":true,"enableLiveFyre":true,"enableLiveVideoGeoCheck":true,"enableMailchimp":true,"enableMarkets":true,"enableNativeAds":true,"enableNewRelicBrowser":false,"enableOmniture":true,"enableOptimizely":true,"enableOutbrainGallery":true,"enableOutbrainVideoKPI":true,"enablePageBadge":true,"enablePingdom":false,"enablePivit":true,"enableProximic":true,"enableQuantcast":false,"enableReadMore":true,"enableRefreshTimers":true,"enableRubiconFastlane":true,"enableSafariPushAlerts":true,"enableShareButtons":true,"enableSkimlinks":true,"enableSoasta":true,"enableSourcePoint":true,"enableTestHarness":false,"enableTiming":false,"enableTripAdvisorAffiliate":false,"enableTypeahead":true,"enableUsabilla":true,"enableUserMessage":true,"enableVideoEndSlate":true,"enableVideoExperienceUnification":false,"enableVideoExperienceUnificationVideoPinning":false,"enableVideoPinning":true,"enableVisualRevenue":true,"enableVisualRevenueVideo":true,"enableWeather":true,"enableYieldMo":true,"enableZoneOutbrain":true,"useStaticHomepage":false},"feedback":{"apiEndpoint":"https://mailcar.cnn.com/api/v1/"},"feeds":{"breakingNews":{"ttl":120000,"url":"http://data.cnn.com/jsonp/breaking_news/domestic.json"}},"gravity":{"id":"93f8c51d6c0425946a44c5302fb62bff"},"imageBreakpoints":{"full16x9":1101,"large":781,"medium":461,"mini":0,"small":308,"xsmall":221},"jsOverrides":{"url":"http://z.cdn.turner.com/cnn/.e/js/4.0/overrides.js"},"jsmd":{"lib":"jsmd.min.js"},"jumbotron":{"autoScrollEnabled":false,"autoScrollInterval":8000,"pauseAutoscrollWhenInvisible":true,"pauseVideoWhenInvisible":true,"responsiveContainerConstraints":{"mobile":480,"tablet":800,"desktop":2500},"scrollPausesJumbotronInterval":5000},"layouts":["ac360","comments","feedback","forms","go","left-rail-short","left-rail-tall","login","no-rail","right-rail-short","right-rail-tall","right-rail","search","special-article","studentnews"],"links":{"leadership":"/specials/more/cnn-leadership"},"mailchimp":{"section":{"entertainment":{"enableFooter":false,"enableInclude":true},"health":{"enableFooter":false,"enableInclude":true},"homepage":{"enableFooter":false,"enableInclude":false},"intl_homepage":{"enableFooter":false,"enableInclude":false},"living":{"enableFooter":false,"enableInclude":true},"politics":{"enableFooter":false,"enableInclude":true},"tech":{"enableFooter":false,"enableInclude":true},"travel":{"enableFooter":false,"enableInclude":true},"us":{"enableFooter":false,"enableInclude":true},"world":{"enableFooter":false,"enableInclude":true}}},"markets":{"converterService":"/common/modules/iframe/currencyConverter.asp","lookupService":"/services/cnndotcom/lookup.asp","serviceHost":"http://markets.money.cnn.com"},"meta":{"og":{"fbAppId":"80401312489","siteName":"CNN","video":{"contentType":"application/x-shockwave-flash","height":270,"host":"http://www.cnn.com","secureHost":"https://cnn.fb.turner.com","site":"cnn","viralContext":"facebook","width":420}},"refreshRate":1800},"mobileApps":{"downloadUrls":{"android":"https://play.google.com/store/apps/details?id=com.cnn.mobile.android.phone","generic":"http://www.cnn.com/mobile/index.landing.html","iemobile":"http://www.windowsphone.com/en-US/apps/16d73639-0539-4fc6-91ca-d2987181f381","ios":"https://itunes.apple.com/us/app/cnn-app-for-iphone/id331786748"}},"nativeAds":{"src":"http://a.postrelease.com/serve/load.js?async=true"},"newrelic":{"src":"http://z.cdn.turner.com/cnn/.element/js/4.0/newrelic-browser-476.min.js"},"optimizely":{"url":"//cdn.optimizely.com/js/131788053.js"},"outbrain":{"importType":{"blog":{"enabled":false}},"section":{"entertainment":{"zone":{"adId":"ad_rect_btf_02","outBrainId":"AR_38"}},"health":{"zone":{"adId":"ad_rect_atf_01","outBrainId":"SF_8"}},"living":{"zone":{"adId":"ad_rect_atf_01","outBrainId":"SF_9"}},"politics":{"zone":{"adId":"ad_rect_atf_02","outBrainId":"SF_6"}},"tech":{"zone":{"adId":"ad_rect_atf_01","outBrainId":"SF_7"}},"travel":{"zone":{"adId":"ad_rect_atf_01","outBrainId":"SF_10"}},"us":{"zone":{"adId":"ad_rect_atf_01","outBrainId":"SF_4"}},"world":{"zone":{"adId":"ad_rect_atf_01","outBrainId":"SF_5"}}},"videoKPISrc":"http://traffic.outbrain.com/network/trackpxl?advid=814&action=view"},"pageBadge":{"copy":"Live TV","link":"http://cnn.it/go2","position":"topright","showGo":true,"validCountries":["US","CA","PR","VI"]},"pages":[{"pageType":"article","layout":"right-rail-tall"},{"pageType":"audio","layout":"right-rail-tall"},{"pageType":"default","layout":"no-rail"},{"pageType":"forms","layout":"forms"},{"pageType":"gallery","layout":"right-rail-short"},{"pageType":"list","layout":"no-rail"},{"pageType":"profile","layout":"no-rail"},{"pageType":"section","layout":"no-rail"},{"pageType":"show","layout":"no-rail"},{"pageType":"special","layout":"no-rail"},{"pageType":"video","layout":"right-rail-short"},{"pageType":"videoCollection","layout":"no-rail"}],"partnerHotels":{"listService":"/services/travel/partnerHotels","checkService":"/services/travel/partnerCheck","serviceHost":"http://cnn-service-travel-partner-hotels.prod.services.ec2.dmtio.net:3000"},"pingdom":{"id":"54aab30fabe53da87ff771ae","src":"//rum-static.pingdom.net/prum.min.js"},"pivit":{"src":"https://cdn.pivit.io/web-assets/widgets/1.6.19/widgets.js"},"proximic":{"delay":60000,"src":"http://segment-data-us-east.zqtk.net/turner-47fcf6"},"proxy":{"defaultTtl":1},"pushAlerts":{"safari":{"webServiceURL":"https://alertshub.cnn.com/distributionhub","websitePushID":"web.com.cnn.redalert"}},"refreshTimers":{"ad":{"default":{"interval":0}},"event":{},"page":{"default":{"interval":0},"intlHome20":{"interval":20,"isVisible":true,"pageType":"section","resetDelay":3,"resetThreshold":17,"sectionName":"intl_homepage"},"us20":{"interval":20,"isVisible":true,"pageType":"section","resetDelay":3,"resetThreshold":17,"sectionName":"us"},"usHome20":{"interval":20,"isVisible":true,"pageType":"section","resetDelay":3,"resetThreshold":17,"sectionName":"homepage"}}},"rightRailConfig":{"longArticle":{"articleLength":6400,"enableAdLock":true,"epic":[{"adId":"ad_rect_atf_03","columnPosition":1,"position":"desktop","zonePosition":1},{"adId":"ad_rect_btf_04","columnPosition":0,"position":"desktop","zonePosition":3}],"outbrain":{"widgetId":"HOP_66"}},"shortArticle":{"epic":[{"adId":"ad_rect_atf_03","columnPosition":0,"position":"desktop","zonePosition":3}]}},"skimlinks":{"src":"//s.skimresources.com/js/87732X1540624.skimlinks.js","sections":["entertainment","health","living","tech","travel","us"]},"soasta":{"src":"http://c.go-mpulse.net/boomerang/3ELNE-XNZJH-GJW9A-GMCCC-HF5K6"},"social":{"avatar":{"host":"avatar.cnn.com"},"embedscripts":{"instagramjs":"//platform.instagram.com/en_US/embeds.js","twitterjs":"//platform.twitter.com/widgets.js","livefyrejs":"//cdn.livefyre.com/Livefyre.js"},"gigya":{"appId":"3_gtUbleJNtrRITgx-1mM_ci7GcIrH8xL9W_VfAbzSa4zpFrRwnpq_eYd8QTRkr7VC","enableOnLeaf":true,"enableOnFirstZone":true,"shareStatsPostURL":"http://actionevent.cnn.com/api/v1/event/addEvent"},"livefyre":{"key":"azjgDYu+5pGDaNSl4JUIDK/EqSU=","mobileCommentsBaseUrl":"http://cnn.bootstrap.fyre.co/api/v1.1/public/comments/ncomments/","network":"cnn.fyre.co","networkName":"cnn","siteId":353270,"srcDomain":"http://cdn.livefyre.com","appembed":"app-embed#0.6.6","timeLineModulePollInterval":1,"tokenEndpoint":"//cnn-login-app.prod.services.ec2.dmtio.net/services/livefyre/authtoken"},"msib":{"authUrl":"cnn-comments://livefyre/authentication","baseUrl":"https://audience.cnn.com/services/cnn","errorUrl":"cnn-comments://livefyre/error","loginUrl":"cnn-comments://livefyre/login"},"whatsapp":{"baseUrl":"whatsapp://send?text=CNN story:"}},"sourcePoint":{"cacheTime":"1m","dataPath":"/sp/imm.dat"},"tripadvisor":{"affiliate":{"script":"http://i.cdn.turner.com/cnn/.e/widget/tripadvisor/affiliate.linker/cnntravel.affiliate-linker.min.js"},"partnerHotels":{"apiKey":"E6E67BB01FD2467688ED25D5F5BC095A","apiBaseUrl":"http://api.tripadvisor.com/api/partner/2.0/location/","servicePath":"/services/travel/partnerHotels/"},"widget":{"apiKey":"E6E67BB01FD2467688ED25D5F5BC095A","css":"http://i.cdn.turner.com/cnn/.e/widget/tripadvisor/service.info/css/cnntravel.maps.min.css","script":"http://i.cdn.turner.com/cnn/.e/widget/tripadvisor/service.info/cnntravel.maps.bundle.min.js","map":{"api":"Mapbox","apiKey":"pk.eyJ1IjoiY25uZGlnaXRhbCIsImEiOiJhMmI0NTFkNWMzNmMyODU4NTQyMjQzNWFkM2I5OGFkMCJ9.S01hv9vVgIbHvy1QuAsoyQ","optionsKey":"mapbox_access_token"}}},"userMessage":[{"dismissCookie":{"expiration":"Tue, 01 Jan 2115 00:00:00 UTC","expirationPeriod":2592000000,"name":"NotifiedIE8Support","value":true},"headerText":"Internet Explorer 8 is no longer supported","height":{"small":140,"medium":120,"large":130},"id":"ie8","messageText":"Thank you for your interest in CNN.com. We’ve detected that you are using a browser that we no longer support. Please update to a more current browser version or visit us on your mobile device."},{"dismissCookie":{"expiration":"Tue, 01 Jan 2115 00:00:00 UTC","name":"CNNtosAgreed","oldCookieExpiration":"Tue, 01 Sep 2015 00:00:00 UTC","oldCookieName":"tosAgreed","value":true},"headerText":"Our Terms of Service and Privacy Policy Have Changed","height":{"small":120,"medium":100,"large":110},"id":"tos","messageText":"By using this site, you agree to the <a href=\"/privacy\">Privacy Policy</a> and <a href=\"/terms\">Terms of Service</a>."}],"video":{"api":{"loaderBaseURLFULLPATH":"http://www.cnn.com/.element/widget/video/videoapi/api/","loaderBaseURL":"/.element/widget/video/videoapi/api/","loaderBaseURLLocal":"http://localhost.cnn.com:3000/build/api/","version":"latest"},"collection":{"playNextVideoTimeout":1500},"goFreePreview":{"adobeEnvironment":"prod","aspenContext":"prev10","endSlate":{"ctaText":"Sign in to your TV Service Provider","messageText":"Keep watching CNN anytime, anywhere with CNNgo.<br/>Sign in to your TV service provider to get access to<br/>all of your favorite CNN shows and specials.","titleText":"Your CNNgo preview has expired"},"errorSlate":{"defaultText":"An error has occurred. Click OK to refresh.","subscriptionErrorText":"Your pay TV subscription does not include CNN. Please contact your TV Service Provider.","troubleShootingText":"If error persists, see <a href=\"//www.cnn.com/help/cnngo-troubleshooting.html\" class=\"troubleshooting-link\" target=\"_blank\">troubleshooting instructions.</a>"},"goSmartLink":"http://cnn.it/go","helpLink":"http://www.cnn.com/help","persistentCta":{"cobrandingText":"In partnership with","countdownText":"Preview expires in","persistentCtaText":"Experience"},"removeMinimumDimensionsTimeout":1500,"temppass":"TempPass_CNN10min"},"liveStream":{"blockSlate":{"messageText":"We are sorry but this video is not available in your country or region.","titleText":"Video Not Available","imageUrl":"http://i.cdn.turner.com/cnn/.element/img/3.0/video/block-slate-image.jpg"},"geoCheckAPI":"//mss-geo-service-api.prod.services.ec2.dmtio.net/api/getLocation","geoCheckCacheTime":4,"geoCheckCountry":"US","geoCheckKey":"Y25ufHdlYnNpdGU","geoCheckTimeout":3000,"pageRefreshTime":360},"mutedPlayer":{"startTime":7,"stopInterval":30,"stopTime":23,"timeZone":"America/New_York"},"embedLinks":{"clipboardOperationsSWF":"http://i.cdn.turner.com/cnn/video/assets/CNNVideoClipboardCopy.swf","buttonImage":"{cdnassetpath}/{build}/assets/embed_video_button.png","imageButtonXOffset":0,"imageButtonYOffset":3,"embedLinkPattern":"<iframe width='416' height='234' src='http://{host}/video/api/embed.html#/video/{videoId}' frameborder='0'></iframe>"},"network":"cnn"},"visualRevenue":{"id":"6","src":"http://a.visualrevenue.com/vrs.js"},"weather":{"citySearch":"/weather/citySearch","enableInHeader":true,"enableInFooter":true,"getForecast":"/weather/getForecast","serviceCitySearchHost":"http://weather.cnn.com","serviceForecastHost":"http://weather.cnn.com","storedLocationsAmount":6}},"overrides":{"/":{"features":{"enableCssOverrides":true}},"/index.html":{"features":{"enableCssOverrides":true}},"/intl_index.html":{"features":{"enableCssOverrides":true}},"/index2.html":{"_variant":"main1","ads":{},"features":{"enableRefreshTimers":false}},"/index4.html":{"_variant":"main1","ads":{},"features":{"enableIZLfooter":true,"enableClickTale":false,"enableNativeAds":false}},"/2016/03/10/politics/republican-debate-live-updates/index.html":{"features":{"enableCssOverrides":true,"enableJsOverrides":true},"CssOverrides":{"url":"http://z.cdn.turner.com/cnn/.element/css/4.0/overrides.css"},"jsOverrides":{"url":"http://z.cdn.turner.com/cnn/.element/js/4.0/overrides.js"}},"/2015/03/06/politics/liveblog-test-environment/index.html":{"features":{"enableCssOverrides":true,"enableJsOverrides":true},"CssOverrides":{"url":"http://z.cdn.turner.com/cnn/.element/css/4.0/esand/overrides.css"},"jsOverrides":{"url":"http://z.cdn.turner.com/cnn/.element/js/4.0/esand/overrides.js"}}},"zones":{"section":{"index.html":{"enablePictureFill":false,"enableZonesScrollToLoad":false,"lazyLoad":true,"loadAllZonesLazy":false,"zones":{"minWidth":{"0":["index.html:homepage1-zone-1","index3.html:homepage-magellan-zone-1","index3.html:homepage-magellan-zone-2","index3.html:homepage-magellan-zone-3","index3.html:homepage-magellan-zone-4","index.html:homepage4-zone-5","index.html:homepage4-zone-7"],"640":["index.html:homepage1-zone-1","index.html:homepage2-zone-1","index.html:homepage3-zone-1","index.html:homepage4-zone-1","index.html:homepage4-zone-2","index.html:homepage4-zone-3","index.html:homepage4-zone-4","index.html:homepage4-zone-5","index.html:homepage4-zone-6","index.html:homepage4-zone-7"],"800":["index.html:homepage1-zone-1","index.html:homepage2-zone-1","index.html:homepage3-zone-1","index.html:homepage4-zone-1","index.html:homepage4-zone-2","index.html:homepage4-zone-3","index.html:homepage4-zone-4","index.html:homepage4-zone-5","index.html:homepage4-zone-6","index.html:homepage4-zone-7"]}},"containers":{"minWidth":{"0":["homepage1-zone-1:1:coveragecontainer/2015/06/15/c1-mobile"]}}},"index2.html":{"enablePictureFill":true,"enableZonesScrollToLoad":false,"lazyLoad":true,"zones":{"minWidth":{"0":["index2.html:homepage1-zone-1","index3.html:homepage-magellan-zone-1","index3.html:homepage-magellan-zone-2","index3.html:homepage-magellan-zone-3","index3.html:homepage-magellan-zone-4","index2.html:homepage4-zone-5","index2.html:homepage4-zone-7"],"640":["index2.html:homepage1-zone-1","index2.html:homepage2-zone-1","index2.html:homepage3-zone-1","index2.html:homepage4-zone-1","index2.html:homepage4-zone-2","index2.html:homepage4-zone-3","index2.html:homepage4-zone-4","index2.html:homepage4-zone-5","index2.html:homepage4-zone-6","index2.html:homepage4-zone-7"],"800":["index2.html:homepage1-zone-1","index2.html:homepage2-zone-1","index2.html:homepage3-zone-1","index2.html:homepage4-zone-1","index2.html:homepage4-zone-2","index2.html:homepage4-zone-3","index2.html:homepage4-zone-4","index2.html:homepage4-zone-5","index2.html:homepage4-zone-6","index2.html:homepage4-zone-7"]}}},"index4.html":{"enablePictureFill":false,"enableZonesScrollToLoad":false,"lazyLoad":false,"loadAllZonesLazy":false,"zones":{"minWidth":{"0":["index4.html:homepage-orion-zone-1","index3.html:homepage-magellan-zone-1","index3.html:homepage-magellan-zone-2","index3.html:homepage-magellan-zone-3","index3.html:homepage-magellan-zone-4","index.html:homepage4-zone-5"],"640":["index4.html:homepage-orion-zone-1","index4.html:homepage-orion-zone-2","index.html:homepage3-zone-1","index.html:homepage4-zone-1","index.html:homepage4-zone-2","index.html:homepage4-zone-3","index.html:homepage4-zone-4","index.html:homepage4-zone-5"],"800":["index.html:homepage1-zone-1","index.html:homepage2-zone-1","index.html:homepage3-zone-1","index.html:homepage4-zone-1","index.html:homepage4-zone-2","index.html:homepage4-zone-3","index.html:homepage4-zone-4","index.html:homepage4-zone-5"]}}},"politics/index.html":{"enablePictureFill":false,"enableZonesScrollToLoad":false,"lazyLoad":true,"loadAllZonesLazy":true,"zones":{"minWidth":{"0":["_politics-zone-injection/index.html:politics-injection-zone-1","politics/index.html:politics-zone-1","_politics-zone-injection/index.html:politics-injection-zone-2","politics/index.html:politics-zone-2","politics/index.html:politics-zone-3","politics/index.html:politics-zone-4","politics/index.html:politics-zone-5","politics/index.html:politics-zone-6","politics/index.html:politics-zone-7","politics/index.html:politics-zone-8"],"640":["_politics-zone-injection/index.html:politics-injection-zone-1","politics/index.html:politics-zone-1","_politics-zone-injection/index.html:politics-injection-zone-2","politics/index.html:politics-zone-2","politics/index.html:politics-zone-3","politics/index.html:politics-zone-4","politics/index.html:politics-zone-5","politics/index.html:politics-zone-6","politics/index.html:politics-zone-7","politics/index.html:politics-zone-8"],"800":["_politics-zone-injection/index.html:politics-injection-zone-1","politics/index.html:politics-zone-1","_politics-zone-injection/index.html:politics-injection-zone-2","politics/index.html:politics-zone-2","politics/index.html:politics-zone-3","politics/index.html:politics-zone-4","politics/index.html:politics-zone-5","politics/index.html:politics-zone-6","politics/index.html:politics-zone-7","politics/index.html:politics-zone-8"]}}}}}}}*/

/*
 * ## Task 1 (of 2)
 *
 * Create a script starting in this file, but not limited to, that will pull
 * data from a remote source JSON feed, transform it, then output a different
 * JSON feed matching a specific schema.  This should execute when running
 * `npm start` and should log output to the console.
 *
 *
 * ### Source:
 *
 *     http://www.cnn.com/data/ocs/section/index.html:homepage1-zone-1.json
 *
 *
 * ### Output:
 *
 *     A valid JSON string representing an array of articles from the
 *     "Top stories" container with the following properties for each article:
 *
 *         {
 *             "url": String,
 *             "headline": String,
 *             "imageUrl": String,
 *             "byLine": String
 *         }
 *
 *
 * ### Other information and guidelines:
 *
 * - Use the node version specified by the engines property in package.json.
 *
 * - `url` should include the protocol and domain, which would be www.cnn.com.
 *
 * - Not all articles will have an image.  If an article has something like a
 *   gallery or a video, use your best judgement.
 *
 * - The `imageUrl` should reference the highest quality image available.
 *
 * - The `byLine` should contain information about the author of the article,
 *   which may not be available for every article.
 *
 * - The source feed will represent what is on the top of the www.cnn.com
 *   homepage.  The content to map is in a _container_ with a _title_ of
 *   "Top stories".  This content changes all the time.  The placement of
 *   this container will change as well.
 *
 *
 *
 *
 * ## Task 2 (of 2)
 *
 * Configure the project to execute ESLint on all JavaScript files in the
 * project using the included .eslintrc configuration when `npm test` is run.
 * DO NOT use Grunt or Gulp.  The test should pass.
 *
 *
 *
 *
 * ## Extra Credit
 *
 * Write a unit test to validate that the JSON ouput is valid and matches the
 * expected schema.
 */