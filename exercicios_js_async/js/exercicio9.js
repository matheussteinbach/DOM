let i = 0
let max = 10

async function p() {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(i++)
        if (i < max){
            return p()
        }
    }

p()

