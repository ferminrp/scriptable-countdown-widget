// Enter the date until the countdown
let endDate = new Date("March 3, 2024 18:00:00")


let now = new Date()
let difference = endDate - now
let days = Math.floor(difference / (1000 * 60 * 60 * 24))
let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
let seconds = Math.floor((difference % (1000 * 60)) / 1000)

let widget = new ListWidget()


// Choose a color and comment the rest lines. (You can add your own color, this are the ones I recommend
widget.backgroundColor = new Color("6841D8") // Majorelle Blue
// widget.backgroundColor = new Color("EF3159") // Crayola Red
// widget.backgroundColor = new Color("EFA008") // Gamboge (Orange)
// widget.backgroundColor = new Color("F24D2F") // Cinnabar (tipo rojo)
// widget.backgroundColor = new Color("30C943") // Lime Green
// widget.backgroundColor = new Color("2BB792") // Mint
// widget.backgroundColor = new Color("27A9D0") // Pacific cyan




let countdown = widget.addText(`${days}`)
countdown.font = new Font("ArialRoundedMTBold", 42, "bold")
countdown.textColor = Color.white()

widget.addSpacer(2)

// You can change the next line to your own language like "Days until"
let diasHasta = widget.addText("dias hasta")
diasHasta.font = new Font("ArialRoundedMTBold", 16)
diasHasta.textColor = Color.white()
diasHasta.textOpacity = 0.8

widget.addSpacer(2)

// Change the name of the event
let ocasion = widget.addText("Roadtrip")

ocasion.font = new Font("ArialRoundedMTBold", 20)
ocasion.textColor = Color.white()

Script.setWidget(widget)
Script.complete()
