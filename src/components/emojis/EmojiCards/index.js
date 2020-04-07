import React from "react"
import { Emojicards, EmojiName, EmojiImage, EmojiCardContainer } from "../emojisStyles.js"
class EmojiCard extends React.Component {
    render() {
        const { Emojis, change, selectedTheme } = this.props
        return (
            <div>
            <EmojiCardContainer>
            {Emojis.map((item,index) => 
            <Emojicards selectedTheme={selectedTheme}>
                <EmojiImage selectedTheme={selectedTheme} src={item.image} key={item.name} alt={item.name}
                onClick={()=>change(item)} />
                <EmojiName selectedTheme={selectedTheme}>{item.name}</EmojiName>
            </Emojicards>)}
            </EmojiCardContainer>
            </div>)
    }
}
export default EmojiCard
