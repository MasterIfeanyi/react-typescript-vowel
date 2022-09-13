import { useState } from "react";
import Note from "./Note";
// import { bootstrap } from "bootstrap"

const Content = () => {

    const [word, setWord] = useState<string>('');
    const [answer, setAnswer] = useState<string>('');


    // defining vowels
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, str: string)  =>  {

        e.preventDefault();

        if (!word) return;

        let count: number = 0;

        for (let letter of str.toLowerCase()) {
            if (vowels.includes(letter)) {
                count++
            }
        }

        console.log(count);

        let sentence: string = `There are ${count} vowel(s)`;

        setAnswer(sentence)

        //return number of vowels
        return true;
    }







    return (

        <section className="section">
            <div className="container">


                <div className="row">
                    <div className="col-12 text-center">
                        <p className="my-3">This project was built with typescript</p>
                        <p className="my-3 fw-bold intro">Count the vowels in any word or sentence</p>
                    </div>
                </div>


                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 my-3">
                        <form action="" className="row" onSubmit={(e) => handleSubmit(e, word)}>
                            <div className="form-group col-12 mb-3">
                                <div className="d-flex justify-content-center align-items-center">
                                    <input
                                        required
                                        type="text"
                                        className="form-control search-bar me-2"
                                        placeholder="Enter a word or sentence"
                                        value={word}
                                        onChange={(e) => setWord(e.target.value)}
                                    />
                                    <button className="btn btn-primary form-button">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row">
                    <Note
                        answer={answer}
                    />
                </div>


            </div>
        </section>
    );
};

export default Content;
