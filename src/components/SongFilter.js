import {useState} from "react"

function SongFilter ({onSubmit}){

    const [genre, setGenre] = useState("")
    const [sortAz, setSortAz] = useState("")

    function submitFilter(e){
        e.preventDefault()
        const filter = {genre: genre, sortAz: sortAz}
        onSubmit(filter)
    }
    
    
    return (
        <div>
         <form className="sortAlphabet">
            <button   onClick={submitFilter}>Filter</button>

                <select 
                    name="genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                >
                        <option value="">-- Genre --</option>
                        <option value="Pop">Pop</option>
                        <option value="Rock">Rock</option>
                        <option value="Dance">Dance</option>
                        <option value="Latin">Latin</option>
                        <option value="Hip-Hop/Rap">Hip-Hop/Rap</option>
                        <option value="Classical">Classical</option>
                        <option value="Reggae">Reggae</option>
                        <option value="Classical">Classical</option>
                        <option value="R&B/Soul">R&B/Soul</option>
                </select>    
                
                <input 
                        type="radio" 
                        name="sortAz"
                        value="a-z"
                        onChange={(e) => setSortAz(e.target.value)}
                    />a-z

                <input 
                        type="radio" 
                        name="sortAz"
                        value="z-a"
                        onChange={(e) => setSortAz(e.target.value)}
                    />z-a
            </form>
        </div>
    )
}

export default SongFilter
