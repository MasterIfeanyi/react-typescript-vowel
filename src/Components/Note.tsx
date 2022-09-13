import {NoteType} from "../types/NoteTypes"

const Note = ({ answer }: NoteType) => {


    return (

        <div className="col-12">
            <p className="text-center lead fw-bold">{answer}</p>
        </div>
    );
};

export default Note;
