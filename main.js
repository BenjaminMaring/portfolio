class swap {

    setTheme = false
    theme = document.getElementById('theme-switch')
    themeText = document.getElementById('theme-selected')

// this method swaps the theme between light and dark. dark is the default theme
switchTheme() {

    // This changes to light
    if (this.setTheme === false){
        this.theme.style.transform = "translateX(30px)"
        this.setTheme = true
        this.themeText.innerHTML = "Light"
        this.themeText.style = "color: black;"

        document.documentElement.style.setProperty('--background', 'radial-gradient(circle, rgba(255,255,255,1) 35%, rgba(182,182,182,1) 100%)')
        document.documentElement.style.setProperty('--box-color', '#cccccc')
        document.documentElement.style.setProperty('--before', '#999999')
        document.documentElement.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.7)')
        document.documentElement.style.setProperty('--text-color', 'black')


    //this code changes it to dark
    } else if (this.setTheme === true) {
        this.theme.style.transform = "translateX(0px)"
        this.setTheme = false
        this.themeText.innerHTML = "Dark"
        this.themeText.style = "color: #fff;"

        document.documentElement.style.setProperty('--background', 'radial-gradient(circle, rgba(30,30,30,1) 35%, rgba(0,0,0,1) 100%)')
        document.documentElement.style.setProperty('--box-color', '#3e3f46')
        document.documentElement.style.setProperty('--before', '#2e3133')
        document.documentElement.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.25)')
        document.documentElement.style.setProperty('--text-color', '#999')


    } else {console.log("Theme error")}
}
} //end class

const choice = new swap()

const input = document.getElementById('colorpicker')

input.addEventListener("change", updateValue)

function updateValue(e) {
    document.documentElement.style.setProperty('--highlight', input.value)
}


// var color = document.getElementById("colorpicker").value
// document.documentElement.style.setProperty('--highlight', color)
