import React, {useState} from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
var _ = require('lodash');

function Board(){

        const [shuffleDeck, setShuffleDeck] = useState([
            2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11
        ]);

        function shuffleCards() {
            setShuffleDeck(_.shuffle(shuffleDeck))   
            console.log();         
        }
        
    const [player, setPlayer] = useState([]);
    const [dealer, setDealer] = useState([]);
    const [isPlayerTurn, setIsPlayerTurn] = useState(true);
    // const [playerCard, setPlayerCard] = useState([]);
    // const [dealerCard, setDealerCard] = useState([]);
    const [winner, setWinner] = useState(false);
    const [bust, setBust] = useState(false);



    function startGame(){
        // setPlayerCard([shuffleDeck[Math.floor(Math.random() * shuffleDeck.length)], shuffleDeck[Math.floor(Math.random() * shuffleDeck.length)]])
        // setDealerCard([shuffleDeck[Math.floor(Math.random() * shuffleDeck.length)], shuffleDeck[Math.floor(Math.random() * shuffleDeck.length)]])
        // setPlayer([playerCard])
        // setDealer([dealerCard])
        setPlayer([shuffleDeck[Math.floor(Math.random() * shuffleDeck.length)], shuffleDeck[Math.floor(Math.random() * shuffleDeck.length)]]);
        setDealer([shuffleDeck[Math.floor(Math.random() * shuffleDeck.length)], shuffleDeck[Math.floor(Math.random() * shuffleDeck.length)]]);
        shuffleCards();
        // console.log(playerCard);
        // return sumPlayerCards;
        
    }

    function restartGame(){
        startGame()
    }

    var sumPlayerCards =_.sum(player)
    var sumDealerCards =_.sum(dealer)
    console.log(sumPlayerCards);
    console.log(sumDealerCards);

   

    function hitCard(){
        if(isPlayerTurn){
          setPlayer(player => [...player, shuffleDeck[Math.floor(Math.random() * shuffleDeck.length)]]);
            // console.log(playerCard);
            console.log(player);
        }  if(sumDealerCards<17){
            setDealer(dealer => [...dealer, shuffleDeck[Math.floor(Math.random() * shuffleDeck.length)]])
        }
    }

    if(winner){
        return(winner)
    }
    
    function whoWonTheGame(){
        if(sumPlayerCards<sumDealerCards && sumDealerCards<=21){
            setWinner("Dealer wins the game")
            return;
        } else if( sumPlayerCards>sumDealerCards && sumPlayerCards<=21){
            setWinner("Player wins the game")
            
        } else if(sumPlayerCards>21){
            setBust(true);
            setWinner("Dealer wins the game")
        }else if(sumDealerCards>21){
            setBust(true)
            setWinner("Player wins the game")
        }
    }

   
            console.log(winner);
            console.log(shuffleDeck);
            console.log("player hand " + player)
            console.log("Dealer hand " + dealer)

   return (
    <div>
        <div>
            <button onClick ={shuffleCards} onClick={hitCard}>Hit</button>
            <button onClick={whoWonTheGame}>Stand</button>
            <button onClick={restartGame}>New Game</button>
            {( winner === "Dealer wins the game" ) &&
             <button onClick={restartGame}>Restart</button>}
        </div>
     </div>
   ) 
} 


export default Board;