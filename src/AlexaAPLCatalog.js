/**
 * Provides a default catalog of APL (Alexa Presentation Language) documents and their dataSources
 */

const CATALOG = {
    APL_Simple_Icon_Text: {
        document: require('./CATALOG/APL_Simple_Icon_Text/document.json'),
        dataSource: require('./CATALOG/APL_Simple_Icon_Text/dataSource').LEGACY,
        dataSourceManager: require('./CATALOG/APL_Simple_Icon_Text/dataSource')
    },
    APL_FullImage_Title_Header: {
        document: require('./CATALOG/APL_FullImage_Title_Header/document.json'),
        dataSourceManager: require('./CATALOG/APL_FullImage_Title_Header/dataSource')
    },
    APL_Vertical_Carrusel: {
        document: require('./CATALOG/APL_vertical_carrusel/document.json'),
        dataSourceManager: require('./CATALOG/APL_vertical_carrusel/dataSource')
    }
}


module.exports = CATALOG