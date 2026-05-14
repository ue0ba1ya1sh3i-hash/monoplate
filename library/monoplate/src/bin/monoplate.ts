#!/usr/bin/env node

import figlet from "figlet"
import gradient from "gradient-string"
import { prompts } from "monoplate-kit"

function showLogo() {
  const logo = figlet.textSync("Monoplate", {
    font: "ANSI Shadow",
    verticalLayout: "default",
    whitespaceBreak: true,
  })

  console.log(gradient(['#80eeff', '#f780ff']).multiline(logo))
}

(async () => {
  showLogo()
})()
