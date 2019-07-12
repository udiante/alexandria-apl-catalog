module.exports.LEGACY = APL_DATA_SOURCE

const PublicDataSource = {
    title: 'TITLE_TEXT', //Title of the APL,
    mainText: 'STRING',
    hintString: 'STRING',
    backgroundImage: 'URL_BACKGROUND_IMAGE',
    logoUrl: 'URL_LOGO_IMAGE',
    style: {
        backGroundOpacity: '0.7'
    }
}

module.exports.DataSource = PublicDataSource

/**
 * Returns the APL datasource given the public data source
 * @param {PublicDataSource} dataSource
 * @returns {APL_DATA_SOURCE} APL Datasource response to the Alexa intent handler
 */
module.exports.getInternalDataSource = function(dataSource) {
    var aplDataSource = Object.assign({}, APL_DATA_SOURCE)

    aplDataSource.launchData.properties.headerTitle = dataSource.title
    aplDataSource.launchData.properties.mainText = dataSource.mainText
    aplDataSource.launchData.properties.hintString = dataSource.hintString
    aplDataSource.launchData.properties.logoImage = dataSource.logoUrl
    aplDataSource.launchData.properties.backgroundImage = dataSource.backgroundImage
    aplDataSource.launchData.properties.backgroundOpacity = dataSource.style.backGroundOpacity

    return aplDataSource
}

const APL_DATA_SOURCE = {
    launchData: {
        type: 'object',
        properties: {
            headerTitle: "TITLE",
            mainText: "MAIN_TEXT",
            hintString: "HINT_STRING",
            logoImage: "ICON_URL",
            backgroundImage: "BACKGROUND_IMAGE",
            backgroundOpacity: "0.7"
        },
        transformers: [{
            inputPath: 'hintString',
            transformer: 'textToHint',
        }]
    }
}