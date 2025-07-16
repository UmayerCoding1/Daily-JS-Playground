async function seelp (delay) {
    return new Promise((resolve) => setTimeout(resolve,delay))
}

const typewriter = async (Text,delay) =>{
    for(const character of Text){
        console.log(character);
        await seelp(delay)
    }
    console.log(Text);
    
}

console.log(typewriter('Umayer Hossain, 20', 1000))