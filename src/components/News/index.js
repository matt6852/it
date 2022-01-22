import {useEffect, useState} from "react";
import axios from "axios";

function NewsPage() {
    const [word, setWord] = useState("spade");
    const [amountWords, setAmountWords] = useState(10);
    const [rhymesWords, setRhymesWords] = useState(null);

    const getRhyms = async (word) => {
        const resp = await axios.get(
                `https://api.datamuse.com/words?rel_rhy=${word}&max=${amountWords}`,
                {
                    headers: {
                        "Access-Control-Allow-Origin":
                            "*",
                    }
                    ,
                }
            )
        ;
        console.log(resp.data);
        setRhymesWords(resp.data);
    };
    const handleInputText = (e) => {
        const value = e.target.value;
        console.log(value);
        setWord(value);
    };
    const handleInputNumber = (e) => {
        const value = e.target.value;
        console.log(value);
        setAmountWords(value);
    };

    useEffect(() => {
        getRhyms(word);
    }, [word, amountWords]);
    return (
        <div>
            <h2>Hi there ,let's find some rhyms!</h2>
            <input type='text' value={word} onChange={handleInputText}/>
            {/* <p>{word}</p> */}
            <input
                type='number'
                onChange={handleInputNumber}
                id='tentacles'
                value={amountWords}
                min='1'
                max='100'
            />
            {rhymesWords &&
                rhymesWords.map((word) => <p key={word.word}>{word.word}</p>)}
        </div>
    );
}

export default NewsPage;