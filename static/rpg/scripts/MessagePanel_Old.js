export class MessagePanel {
  constructor(scene, x, y, width, height, message) {
    this.scene = scene

    this.panel = this.scene.add.graphics({
      fillStyle: { color: 0x000000, alpha: 0.5 }
    })
    this.panel.fillRect(x, y, 512, 200) // Adjust size and position as needed

    this.text = this.scene.add.text(x + 20, y + 10, " > " + message, {
      fontSize: "14px",
      color: "#FFFFFF"
    })
    this.text = this.scene.add.text(
      x + 20,
      y + 30,
      " > 大家好，這是遠傳夢想號",
      { fontSize: "14px", color: "#FFFFFF" }
    )
    this.text.setWordWrapWidth(580) // Keep text within the panel

    // make the panel scrollable and make it able to display multiple messages
  }

  // Method to show the panel
  show() {
    this.panel.setVisible(true)
    this.text.setVisible(true)
  }

  // Method to hide the panel
  hide() {
    this.panel.setVisible(false)
    this.text.setVisible(false)
  }
}
