module.exports = {
    bodyTemplate7Data: {
        type: 'object',
        objectId: 'bt7Sample',
        title: 'TITLE_TEXT', //Title of the APL
        backgroundImage: {
          contentDescription: null,
          smallSourceUrl: null,
          largeSourceUrl: null,
          sources: [
            {
              url: 'URL_SMALL_BACKGROUND',
              size: 'small',
              widthPixels: 0,
              heightPixels: 0
            },
            {
              url: 'URL_LARGE_BACKGROUND',
              size: 'large',
              widthPixels: 0,
              heightPixels: 0
            }
          ]
        },
        image: {
          contentDescription: null,
          smallSourceUrl: null,
          largeSourceUrl: null,
          sources: [
            {
              url: 'URL_SMALL_IMAGE', //ADD THE SMALL IMAGE FOR DOT SIZE
              size: 'small',
              widthPixels: 0,
              heightPixels: 0
            },
            {
              url: 'URL_LARGE_IMAGE', //ADD THE STAMDAR IMAGE
              size: 'large',
              widthPixels: 0,
              heightPixels: 0
            }
          ]
        },
        logoUrl: 'URL_LOG_IMAGE',
        hintText: 'Try, "Alexa, search for blue cheese"'
      }
}