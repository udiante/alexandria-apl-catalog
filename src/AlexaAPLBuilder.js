const APL_CATALOG = require('./AlexaAPLCatalog')

const APL_RESPONSE = {
    document: {},
    dataSource: {}
}

/**
 * @returns {APL_RESPONSE}
 */
function newResponse() {
    return Object.assign({}, APL_RESPONSE) 
}

/**
 * 
 * @param {*} skillName 
 * @param {*} mainText 
 * @param {*} hintText 
 * @param {*} iconURL 
 * @param {*} backgroundImage 
 * @returns {APL_RESPONSE}
 */
function NewSimpleTextAPL(skillName, mainText, hintText, iconURL, backgroundImage) {
    var response = newResponse()
    var dataSource = APL_CATALOG.APL_Simple_Icon_Text.dataSourceManager.DataSource
    dataSource.title = skillName || ''
    dataSource.mainText = mainText
    dataSource.hintString = hintText || ''
    dataSource.backgroundImage = backgroundImage || ''
    dataSource.logoUrl = iconURL || ''
    response.dataSource = APL_CATALOG.APL_Simple_Icon_Text.dataSourceManager.getInternalDataSource(dataSource)
    response.document = APL_CATALOG.APL_Simple_Icon_Text.document
}

module.exports = {
    NewSimpleTextAPL : NewSimpleTextAPL
}