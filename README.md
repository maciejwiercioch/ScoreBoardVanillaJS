# ScoreBoardVanillaJS

The solution consists of ScoreBoard which is used to manage games and Game which keeps game properties. 
Scoreboard enables to:
- creating a new game by calling startNewGame method which takes home team and away team as arguments
- finishing a game by calling finishGame method 
- score goals for home and away teams by calling scoreTeamHome and scoreTeamAway methods
- print results by printResults method
- results are sorted by date time and by total number of goals in a match

Game consists of the following properties:
- team home
- team away
- team home goals
- team away goals
- state( could be "notStarted", "inProgress" or "completed"
- total goals
