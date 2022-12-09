# squashCourtManager


There are three squash courts at WPI. Squash is a two person game. Squash club has over 20 people. 
Blood has been shed fighting over the courts. It is an emotional and barbaric struggle. 

In this time of turmoil, I have decided to create an app that will first and foremost allow users to queue for the squash courts. 
This front-end only project evolved when I decided to keep track of match scores and players with the long term goal of creating
an elo system.

As of 12/9/2022
A basic React front-end allows players to add their names to a queue in playing pairs. If a court is open, they will be put on that court.
A court is a card which is red when open and green when in use, this may change. I had Open AI's Chat GPT style everything, and it looks gross.
This "card" also allows players to input their game scores. Eventually, these scores will be stored in a db

I started setting up the back end with express. It connects to mongo and currently keeps a list of Matches. 

Short Term Goals: 
 - Have users select how many games they want to play in their match when they enter the queue.
 - Have players be able to submit their games to the database.
 - Logic so unfinished games of a match won't get submitted to a database, ex. Bo3, but only 2 games played. 
 - Match history page, showing a table of previous matchs with scores and winning player highlighted.
 - Learn how to use markdown files so this doesn't just look like a wall of text.
