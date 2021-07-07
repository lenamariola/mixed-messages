let messages = []

messages.push('Leben ist teilen.')
messages.push('Der Frieden ist in dir.')
messages.push('Geh nur Wege mit Herz.')
messages.push('Unschuld erweckt Intuition.')
messages.push('Schätze die Person, die du bist.')
messages.push('Mach dir selbst und anderen Mut.')
messages.push('Freude ist die Essenz des Erfolgs.')
messages.push('Lerne in Stille, dir selbst zuzuhören.')

console.log(messages)      

const returnMixedMessage() {
    let a = Math.floor(Math.random(messages.length)
    return messages[a]
}

console.log(returnMixedMessage)