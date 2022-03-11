import React, {useState, useEffect} from 'react'
import Word from '../components/Word';

const WordContainer = () => {
    const [word, setWord] = useState([]);

    useEffect(() => {
        getWord();
    }, [])

    const getWord = function(){
        fetch("https://wordsapiv1.p.mashape.com/words/inevitable")
        .then(res => res.json())
        .then(word => setWord(word))
        console.log(word);
    }
    
    // const onCountrySelected = function(country){
    //     setSelectedCountry(country);
    // }

    return(
        <>
        <Word word={word}/>
        </>
    )
}
export default WordContainer