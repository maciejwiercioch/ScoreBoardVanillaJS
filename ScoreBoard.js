'use strict'

// Game object to store game properties
const game = (teamHome, teamAway) => {
    return {
        "teamHome": teamHome,
        "teamAway": teamAway,
        "teamHomeGoals": 0,
        "teamAwayGoals": 0,
        "state": "notStarted",
        "totalGoals": 0
    }
}

// Scoreboard object to add, change and remove games from the Scoreboard
const scoreBoard = () => {
    return {
        games: [],
        startNewGame: function (teamHome, teamAway) {
            const newGame = game(teamHome, teamAway);
            newGame.state = "inProgress";
            newGame.startTime = new Date();
            this.games.push(newGame);
        },
        finishGame: function (teamHome, teamAway) {
            for (let i = 0; i < this.games.length; i++) {
                if (this.games[i].teamHome === teamHome && this.games[i].teamAway === teamAway) {
                    this.games[i].state = "completed";
                    this.games[i].endTime = new Date();
                    this.games.splice(i, 1);
                    break;
                }
            }
        },
        scoreTeamHome: function (teamHome, teamAway) {
            for (let i = 0; i < this.games.length; i++) {
                if (this.games[i].teamHome === teamHome && this.games[i].teamAway === teamAway) {
                    this.games[i].teamHomeGoals += 1;
                    this.games[i].totalGoals += 1;
                }
            }
        },
        scoreTeamAway: function (teamHome, teamAway) {
            for (let i = 0; i < this.games.length; i++) {
                if (this.games[i].teamHome === teamHome && this.games[i].teamAway === teamAway) {
                    this.games[i].teamAwayGoals += 1;
                    this.games[i].totalGoals += 1;
                }
            }
        },
        printResults: function () {
            this.sortByTime();
            this.sortByResult();
            for (let i = 0; i < this.games.length; i++) {
                console.log(`${this.games[i].teamHome} ${this.games[i].teamHomeGoals} - ${this.games[i].teamAway} ${this.games[i].teamAwayGoals}`)
            }
        },
        sortByTime: function () {
            this.games = this.games.sort(
                (game1, game2) => Number(game2.date) - Number(game1.date))
        },
        sortByResult: function () {
            this.games = this.games.sort(
                (game1, game2) => Number(game2.totalGoals) - Number(game1.totalGoals)
            )
        }
    }
}