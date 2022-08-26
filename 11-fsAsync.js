// Asynchronous: non-Block code

const { readFile, writeFile } = require("fs")

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err)
    return
  }

  const first = result

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err)
      return
    }

    const second = result

    writeFile(
      "./content/thirdAsync.txt",
      `This is the third file: ${first}, ${second}`,
      (err) => {
        if (err) {
          console.log(err)
          return
        }

        console.log("File saved successfully")
      }
    )
  })
})