function rpsgame(yourchoice){
    console.log(yourchoice.src)
    var humanchoice,botchoice;
    humanchoice = yourchoice.id;
    botchoice = NumberToChoice(randToInt());
    console.log('Computer choice:', botchoice)
    results = decidewinner(humanchoice, botchoice)
    console.log(results)

    message = finalMessage(results)
    rpsFont(yourchoice.id,botchoice,message)
    

}

function randToInt(){
    return Math.floor(Math.random()*3)
}
function NumberToChoice(number){
    return ['rock','paper','scissors'][number]
}
function decidewinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}

};
var yourScore = rpsDatabase[yourChoice][computerChoice]
var computerScore = rpsDatabase[computerChoice][yourChoice]

return [yourScore, computerScore]
}

function finalMessage([yourScore, computerScore]){
    if(yourScore == 0){
        return {'message':'You Lost!','color':'red'}
    }else if(yourScore == 0.5){
        return {'message':'You Tied!','color':'Yellow'}
    }else{
        return {'message':'You Won!','color':'Green'}
    }
}
function rpsFont(humanImageChoice,botImageChoice,finalMessage){
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src

    }
    // remove photos
    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissors').remove()

    var humanDiv = document.createElement('div')
    var botDiv  = document.createElement('div')
    var messageDiv = document.createElement('div')

    humanDiv.innerHTML = "<img src='"+imageDatabase[humanImageChoice] +"' height = 150 width = 150 style='box-shadow:0px 10px 40px  rgba(37, 50, 233, 1)' >"
    messageDiv.innerHTML = "<h1 style='color: "+finalMessage['color'] +"; font-size:60px; padding:30px; margin-top: 20px; '>" + finalMessage['message']+"</h1>"
    botDiv.innerHTML = "<img src='"+imageDatabase[botImageChoice] +"' height = 150 width = 150 style='box-shadow:0px 10px 40px  rgba(243, 38, 24, 1)' >"

    document.getElementById('flex-box-container').appendChild(humanDiv)
    document.getElementById('flex-box-container').appendChild(messageDiv)
    document.getElementById('flex-box-container').appendChild(botDiv)


}