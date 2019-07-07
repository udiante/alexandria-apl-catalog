module.exports = {
    launchData: {
        type: 'object',
        properties: { // Custom properties of the view
            headerTitle: "TITLE",
            mainText: "MAIN_TEXT",
            hintString: "HINT_STRING",
            logoImage: "ICON_URL",
            backgroundImage: "BACKGROUND_IMAGE",
            backgroundOpacity: "OPACITY"
        },
        transformers: [{
            inputPath: 'hintString',
            transformer: 'textToHint',
        }]
    }
}