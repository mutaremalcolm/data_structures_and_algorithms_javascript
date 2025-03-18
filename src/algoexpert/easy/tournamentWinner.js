export function tournamentWinner(competitions, results) {
    let index = 0

    let hashTable = {}

    let highestValue = ''

    while (index !== competitions.length) {
        const winnigTeam = competitions[index][1 - results[index]]

        if (!hashTable[winnigTeam]) {
            hashTable[winnigTeam] = 3

            if (!hashTable[highestValue]) {
                highestValue = winnigTeam
            }
        } else {
            const newValue = hashTable[winnigTeam] + 3

            if (hashTable[highestValue] < newValue) {
                highestValue = winnigTeam
            }

            hashTable[winnigTeam] = newValue
        }

        index++
    }

    return highestValue
}