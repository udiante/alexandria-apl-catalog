const assert = require('assert')
const APL_MANAGER = require('../index').APL_CATALOG

describe('APL Vertical List', function() {
    it('The manager returns a valid object', function(){
        const horitzonalManger = APL_MANAGER.APL_Horitzontal_Carrusel.dataSourceManager
        const dataSource = horitzonalManger.newPublicDataSource()
        var items = ["1", "2", "3", "4"]
        var itemDataSource = []
        items.forEach(element => {
            var newItem = horitzonalManger.newItemModel()
            newItem.primaryText = element
            newItem.secondaryText = element
            newItem.tertiaryText = element
            newItem.itemIdentifier = element
            newItem.imageURL = element
            itemDataSource.push(newItem)
        });
        dataSource.items = itemDataSource
        const document = APL_MANAGER.APL_Horitzontal_Carrusel.document
        assert(document)
        const internalDataSource = horitzonalManger.getInternalDataSource(dataSource)
        const itemArray = internalDataSource.listTemplate1ListData.listPage.listItems
        for (let index = 0; index < itemArray.length; index++) {
            const element = itemArray[index];
            const itemValue = items[index];
            assert(element.listItemIdentifier, itemValue)
            assert(element.textContent.primaryText, itemValue)
            assert(element.textContent.secondaryText, itemValue)
            assert(element.textContent.tertiaryText, itemValue)
        }
    })
})