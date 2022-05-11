function betterThanAverage(classPoints, yourPoints) {
    let totalPeerScores = classPoints.reduce((a,b) => a + b)
    let avgPeerScore = totalPeerScores / classPoints.length
    if (yourPoints > avgPeerScore) {
        return true
    } else {
        return false
    }
}
// FIRST TRYYYYY
