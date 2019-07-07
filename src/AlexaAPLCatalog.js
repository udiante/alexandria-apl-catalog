/**
 * Provides a default catalog of APL (Alexa Presentation Language) documents and their dataSources
 */

const CATALOG = {
    APL_Simple_Icon_Text: {
        document: require('./CATALOG/APL_Simple_Icon_Text/document.json'),
        dataSource: require('./CATALOG/APL_Simple_Icon_Text/dataSource')
    }
}


module.exports = {
    APL_Simple_Icon_Text: CATALOG.APL_Simple_Icon_Text
}