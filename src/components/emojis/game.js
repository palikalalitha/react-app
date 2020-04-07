import React from "react"
import Header from "./Navbar/index.js"
import EmojiCard from "./EmojiCards/index.js"
import WinorLose from "./WinOrLose/index.js"
import { EmojiContainer, HowToplayContainer, HintHeading, EmojiHeader } from "./emojisStyles.js"
let userEmojis = []
class Game extends React.Component {
  state = {
    emojis: [{ id: 1, isClicked: false, image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png", name: "Exploding Head", },
      {
        id: 2,
        isClicked: false,
        image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-2.png",
        name: "Grinnning Face with Sweat",
      },
      {
        id: 3,
        isClicked: false,
        image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-3.png",
        name: "Smiling Face with Heart-Eyes",
      },
      {
        id: 4,
        isClicked: false,
        image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-4.png",
        name: "Smirking Face",
      },
      {
        id: 5,
        isClicked: false,
        image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png",
        name: "Thinking Face",
      },
      {
        id: 6,
        isClicked: false,
        image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-6.png",
        name: "Winking Face",
      },
      {

        id: 7,
        isClicked: false,
        image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-7.png",
        name: "Grinnning Face",
      },
      {
        id: 8,
        isClicked: false,
        image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-8.png",
        name: "Crying Face",
      },
      {
        id: 9,
        isClicked: false,
        image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-9.png",
        name: "Astonished Face",
      },
      {

        id: 10,
        isClicked: false,
        image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-10.png",
        name: "Face with Tears of Joy",
      },
      {
        id: 11,
        isClicked: false,
        image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-11.png",
        name: "Star-Struck",

      },
      {
        id: 12,
        isClicked: false,
        image: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-12.png",
        name: "Winking Face with Tongue",
      },
    ],
    topScore: 0,
    gameState: "Playing",
    score: 0,
    selectedTheme: "Light-Theme"
  }
  onEmojiClick = (clickedEmoji) => {
    const { emojis } = this.state
    if (userEmojis.includes(clickedEmoji)) {
      alert("error")
      this.setState({
        gameState: "Lose"
      })
    }
    else {
      userEmojis.push(clickedEmoji)
      this.incrementScore()
      if (userEmojis.length === emojis.length) {
        this.setState({
          gameState: "Win"
        })
      }
      else {
        this.setState({
          gameState: "Playing"
        })
      }
    }

    this.shuffleEmojis()
  }


  incrementScore = () => {
    this.setState({
      score: this.state.score + 1
    })
  }
  shuffleEmojis = () => {
    let currentEmojis = this.state.emojis;
    let i, randomIndex, temporaryEmoji;
    for (i = currentEmojis.length - 1; i > 0; i--) {
      randomIndex = Math.floor(Math.random() * (i + 1))
      temporaryEmoji = currentEmojis[i]
      currentEmojis[i] = currentEmojis[randomIndex]
      currentEmojis[randomIndex] = temporaryEmoji
    }
    this.setState({
      emojis: currentEmojis
    })
  }
  setTopScore = () => {
    let { score, topScore } = this.state
    if (score > topScore) {
      this.setState({
        topScore: score
      })
    }

  }
  onPlayAgianClick = () => {
    this.setState({
      score: 0,
      gameState: "Playing",

    })
    userEmojis = []
    this.setTopScore()
  }
  resetGame = () => {
    this.setState({
      score: 0,
      topScore: 0,
      gameState: "Playing"
    })
    userEmojis = []
  }
  onChangeTheme = () => {
    const { selectedTheme } = this.state
    if (selectedTheme === "Light-Theme") {
      this.setState({
        selectedTheme: "Dark-Theme"
      })
    }
    else {
      this.setState({
        selectedTheme: "Light-Theme"
      })
    }

  }
  render() {
    let { gameState, score, emojis, topScore, selectedTheme } = this.state
    return (
      <EmojiContainer selectedTheme={selectedTheme}>
      <Header score={score} resetGame={this.resetGame} topScore={topScore} Emojis={emojis} gameStatus={gameState} onChangeTheme={this.onChangeTheme} selectedTheme={selectedTheme}/> 
      {gameState==="Playing"?
      <div>
        <EmojiCard Emojis={emojis} selectedTheme={selectedTheme} change={this.onEmojiClick}/>
      </div>:<WinorLose gameStatus={gameState}  topScore={topScore} score={score} onPlayAgianClick={this.onPlayAgianClick}/>}  
      <EmojiHeader selectedTheme={selectedTheme}>
      <HowToplayContainer selectedTheme={selectedTheme}><HintHeading>How to play?</HintHeading>
      <p>Get Points by Clicking on an image but don't click on any image more than once!</p></HowToplayContainer>
      </EmojiHeader>
      </EmojiContainer>)
  }
}
export default Game
