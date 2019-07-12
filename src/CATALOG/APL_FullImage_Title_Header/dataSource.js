const PublicDataSource = {
  title: 'TITLE_TEXT', //Title of the APL
  backgroundImage: 'URL_BACKGROUND_IMAGE',
  image: {
    small_url: 'URL_SMALL_IMAGE', //ADD THE SMALL IMAGE FOR DOT SIZE
    large_url: 'URL_LARGE_IMAGE' //ADD THE STAMDAR IMAGE
  },
  logoUrl: 'URL_LOGO_IMAGE'
}

/// Public DataSource model to use the component
module.exports.DataSource = PublicDataSource

/**
 * Returns the APL datasource given the public data source
 * @param {PublicDataSource} dataSource
 * @returns {APL_DATA_SOURCE} APL Datasource response to the Alexa intent handler
 */
module.exports.getInternalDataSource = function(dataSource) {
    var aplDataSource = Object.assign({}, APL_DATA_SOURCE)

    aplDataSource.bodyTemplate7Data.title = dataSource.title

    aplDataSource.bodyTemplate7Data.backgroundImage.sources[0].url = dataSource.backgroundImage
    aplDataSource.bodyTemplate7Data.backgroundImage.sources[1].url = dataSource.backgroundImage

    aplDataSource.bodyTemplate7Data.image.sources[0].url = dataSource.image.small_url
    aplDataSource.bodyTemplate7Data.image.sources[1].url = dataSource.image.large_url

    aplDataSource.bodyTemplate7Data.logoUrl = dataSource.logoUrl

    return aplDataSource
}

const APL_DATA_SOURCE = {
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
              url: 'URL_LARGE_IMAGE', //ADD THE STANDAR IMAGE
              size: 'large',
              widthPixels: 0,
              heightPixels: 0
            }
          ]
        },
        logoUrl: 'URL_LOG_IMAGE',
        hintText: 'NOT_USED'
      }
}