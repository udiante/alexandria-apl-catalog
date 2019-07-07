module.exports = {
    launchData: {
        type: 'object',
        properties: { // Custom properties of the view
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