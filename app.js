const body = document.querySelector('body')
const sliderInput = document.querySelector('#slider-input')
const allBoxes = document.querySelectorAll('.box')
const allPills = document.querySelectorAll('.pill')
const allHiddenPills = document.querySelectorAll('.hidden-pill')
const allArrows = document.querySelectorAll('.arrow')
const expandPill = document.querySelector('#expand')
const xLetter = document.querySelector('#x-letter')
const xLetterSVG = document.querySelector('#x-letter-svg')
const xBox = document.querySelector('.x-box')
const socialFan = document.querySelector('.social-fan')
const reversePill = document.querySelector('#reverse')
const boxContainer = document.querySelector('.box-container')
const iconPath = document.querySelector('#icon')
const hiddenBox = document.querySelector('.hidden-box')
const textBox = document.querySelector('.hidden-box .text-box')


let paletteIndex = 0
const xLetterIndex = 11
const socialFanIndex = 1
const rotateIconIndex = 3


//Start State

xLetterSVG.style.fill = colorPalettes[paletteIndex][xLetterIndex].fill
allPills.forEach((pill, i) => 
pill.style.backgroundColor = colorPalettes[paletteIndex][i].fill)
allHiddenPills.forEach((hiddenPill => 
    hiddenPill.style.backgroundColor = colorPalettes[paletteIndex][socialFanIndex].fill))

const expand = () => {
    if (hiddenBox.clientWidth !== 0){
        textBox.classList.add('hidden')
        setTimeout(() => hiddenBox.style.width = '0', 200)
    }
    else{
        hiddenBox.style.width = '1700px'
        setTimeout(() => textBox.classList.remove('hidden') , 500)
    }
}

expandPill.addEventListener('click', expand)


const reverse = () => {
    if (boxContainer.style.flexWrap === 'wrap'){
        boxContainer.style.flexWrap = 'wrap-reverse'
    }
    else {
        boxContainer.style.flexWrap = 'wrap'
    }
}
reversePill.addEventListener('click', reverse)


const addTheme = (
    bodyBackgroundColor,
    strokeWidth,
    svgFill,
    opacity,
    lineColor,
    borderRadius,
    boxBackgroundColor,
    pillBackgroundColor
    ) => {
        body.style.backgroundColor = bodyBackgroundColor
        xLetterPath.style.strokeWidth = strokeWidth
        xLetterSVG.style.fill = svgFill || colorPalettes[paletteIndex][xLetterIndex].fill
        xLetterSVG.style.opacity = opacity
        xBox.style.backgroundColor = boxBackgroundColor || colorPalettes[paletteIndex][xLetterIndex].fill
        iconPath.style.stroke = lineColor || colorPalettes[paletteIndex][rotateIconIndex].altStroke
        iconPath.style.strokeWidth = strokeWidth

        allBoxes.forEach((box,i) => 
            box.style.backgroundColor = boxBackgroundColor || colorPalettes[paletteIndex][i].fill
        )

        allPills.forEach((pill, i) => {
            pill.style.opacity = opacity
            pill.style.backgroundColor = pillBackgroundColor || colorPalettes[paletteIndex][i].fill
            pill.style.borderWidth = strokeWidth
            pill.style.borderColor = lineColor || colorPalettes[paletteIndex][i].altStroke
            pill.style.borderBlockStyle = 'solid'
            pill.style.borderRadius = borderRadius
        })

        allHiddenPills.forEach(hiddenPill => {
            hiddenPill.style.opacity = opacity
            hiddenPill.style.borderWidth = strokeWidth
            hiddenPill.style.borderColor = lineColor || colorPalettes[paletteIndex][socialFanIndex].altStroke
            hiddenPill.style.borderRadius = borderRadius
        })

        allArrows.forEach(arrow => {
            arrow.style.borderBlockStyle = 'solid'
            arrow.style.borderColor = lineColor
            arrow.style.borderWidth = '0' + strokeWidth + '' + strokeWidth + '0'
            arrow.style.opacity = opacity
        })
}





const moveSlider = () => {
   const sliderInput = document.querySelector('#slider-input')
   const sliderValue = sliderInput.value
   if (sliderValue !== 0) {
    bodyBackgroundColor, strokeWidth,svgFill,opacity,lineColor,borderRadius,boxBackgroundColor,pillBackgroundColor
    addTheme('white', '12px', null, 1,  'rgb(38, 38, 38)', '100px', 'white', null)
   }
   if (sliderValue > 1 && sliderValue <=3){
    //addTheme
   }
   if (sliderValue >= 4 && sliderValue <= 6){
    //addTheme
   }
   if (sliderValue >= 7 && sliderValue < 9){
    //addTheme
   }
   if (sliderValue === 10){
    //addTheme 
   }
}

sliderInput.addEventListener('input', moveSlider)





