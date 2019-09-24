const PublicDataSource = {
    title: 'TITLE_TEXT', //Title
    backgroundImageUrl: 'URL_BACKGROUND_IMAGE', // Background image
    logoUrl: 'URL_LOGO_IMAGE', // Skill icon logo image,
    items: [ItemModel] // List of items to display
}

const ItemModel = {
    itemIdentifier: '', // Unique value to identify the item
    primaryText: '', // Title cell
    secondaryText: '', // Subtitle cell
    tertiaryText: '', // Right principal text,
    imageURL: '' //Image displayed at the right of the cell
}

/// Public DataSource model to use the component
module.exports.DataSource = {
    PublicDataSource: PublicDataSource,
    ItemModel: ItemModel,
    newPublicDataSource: function() {
        Object.assign({}, this.PublicDataSource)
    },
    newItemModel: function() {
        Object.assign({}, this.ItemModel)
    }
}

/**
 * Returns the APL datasource given the public data source
 * @param {PublicDataSource} dataSource
 * @returns {APL_DATA_SOURCE} APL Datasource response to the Alexa intent handler
 */
module.exports.getInternalDataSource = function (dataSource) {
    var aplDataSource = Object.assign({}, APL_DATA_SOURCE)

    // Prepare the items data
    if (!dataSource.items) {
        return undefined
    }
    var itemsDataSource = []
    for (let index = 0; index < dataSource.items.length; index++) {
        const item = dataSource.items[index];
        var itemDataSource = getItemAPLFromDataSource(item, index + 1)
        itemsDataSource.push(itemDataSource)
    }

    aplDataSource.listTemplate1Metadata.title = dataSource.title
    aplDataSource.listTemplate1Metadata.logoUrl = dataSource.logoUrl
    aplDataSource.listTemplate1Metadata.backgroundImage.sources[0].url = dataSource.backgroundImageUrl
    aplDataSource.listTemplate1Metadata.backgroundImage.sources[1].url = dataSource.backgroundImageUrl

    aplDataSource.listTemplate1ListData.listPage.listItems = itemsDataSource
    aplDataSource.listTemplate1ListData.totalNumberOfItems = itemsDataSource.length

    return aplDataSource
}


// APL MODEL DATA

/**
 * 
 * @param {ItemModel} itemData 
 * @param {number} index 
 */
function getItemAPLFromDataSource(itemData, index) {
    var aplModel = Object.assign({}, APL_ITEM_SOURCE)
    aplModel.listItemIdentifier = itemData.itemIdentifier
    aplModel.ordinalNumber = index
    aplModel.textContent.primaryText.text = itemData.primaryText
    aplModel.textContent.secondaryText.text = itemData.secondaryText
    aplModel.textContent.tertiaryText.text = itemData.tertiaryText
    aplModel.image.sources[0].url = itemData.imageURL
    aplModel.image.sources[1].url = itemData.imageURL
    return aplModel
}

const APL_ITEM_SOURCE = {
    listItemIdentifier: 'itemIdentifier',
    ordinalNumber: 1,
    textContent: {
        primaryText: {
            type: 'PlainText',
            text: 'primaryText'
        },
        secondaryText: {
            type: 'PlainText',
            text: 'secondaryText'
        },
        tertiaryText: {
            type: 'PlainText',
            text: 'tertiaryText'
        }
    },
    image: {
        contentDescription: null,
        smallSourceUrl: null,
        largeSourceUrl: null,
        sources: [
            {
                url: 'imageURL',
                size: 'small',
                widthPixels: 0,
                heightPixels: 0
            },
            {
                url: 'imageURL',
                size: 'large',
                widthPixels: 0,
                heightPixels: 0
            }
        ]
    },
    token: 'itemIdentifier'
}


/** APL MODEL */

const APL_DATA_SOURCE = {
    listTemplate1Metadata: {
        type: 'object',
        objectId: 'lt1Metadata',
        backgroundImage: {
            contentDescription: null,
            smallSourceUrl: null,
            largeSourceUrl: null,
            sources: [
                {
                    url: 'backgroundImage',
                    size: 'small',
                    widthPixels: 0,
                    heightPixels: 0
                },
                {
                    url: 'backgroundImage',
                    size: 'large',
                    widthPixels: 0,
                    heightPixels: 0
                }
            ]
        },
        title: 'title',
        logoUrl: 'logoUrl'
    },
    listTemplate1ListData: {
        type: 'list',
        listId: 'lt1Sample',
        totalNumberOfItems: 10, //Replace with the number of items
        listPage: {
            listItems: []
        }
    }
}