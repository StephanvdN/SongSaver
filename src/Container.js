import React, { Component } from "react"
import SearchSong from "./components/FindSong"

class Container extends Component {
    constructor() {
        super()
        this.state = {
            songSaverList: [
                { title: "One More Time", artist: "Daft Punk", genre: "Dance", rating: "5" },
                { title: "Show Me Love", artist: "Robin S", genre: "Dance", rating: "5" },
                { title: "Can't Get You Out of My Head", artist: "Kylie Minogue", genre: "Dance", rating: "5" },
                { title: "Nuthin' but a 'G' Thang", artist: "Dr. Dre feat. Snoop Doggy Dogg", genre: "Hip-Hop/Rap", rating: "5" },
                { title: "Juicy", artist: "The Notorious B.I.G.", genre: "Hip-Hop/Rap", rating: "5" },
                { title: "In Da Club", artist: "50 Cent", genre: "Hip-Hop/Rap", rating: "5" },
                { title: "Oye Como Va", artist: "Santana", genre: "Latin", rating: "5" },
                { title: "La Gota Fria", artist: "Carlos Vives", genre: "Latin", rating: "5" },
                { title: "One Love", artist: "Bob Marley", genre: "Reggae", rating: "5" },
                { title: "Maria", artist: "Ricky Martin", genre: "Latin", rating: "5" },
                { title: "Bam Bam", artist: "Sister Nancy", genre: "Reggae", rating: "5" },
                { title: "Three Little Birds", artist: "Bob Marley", genre: "Reggae", rating: "5" },
                { title: "Yeah", artist: "Usher feat. Lil Jon & Ludacris", genre: "R&B/Soul", rating: "5" },
                { title: "I'll Be Missing You", artist: "Puff Daddy feat. Faith Evans & 112", genre: "R&B/Soul", rating: "5" },
                { title: "Un-Break My Heart", artist: "Toni Braxton", genre: "R&B/Soul", rating: "5" },
                { title: "Smells Like Teen Spirit", artist: "Nirvana", genre: "Rock", rating: "5" },
                { title: "Hotel California", artist: "Eagles", genre: "Rock", rating: "5" },
                { title: "Numb", artist: "Linkin Park", genre: "Rock", rating: "5" },
            ],

            filteredSongList: []
        }
        this.addInput = this.addInput.bind(this)
        this.onSongClick = this.onSongClick.bind(this)
        this.filterList = this.filterList.bind(this)
    }

    filterList(filter) {
        var filterList = filter.genre === "" ? this.state.songSaverList.map(item => item) : this.state.songSaverList.filter(item => item.genre === filter.genre)
            if(filter.sortAz === "a-z"){
                filterList.sort((a, b) => (a.title > b.title) ? 1 : -1)
            }else if(filter.sortAz === "z-a"){
                filterList.sort((a, b) => (a.title < b.title) ? 1 : -1)
            }
            this.setState({ filteredSongList: filterList })
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Song Saver</h1>
                </header>

                <main>
                    <SearchSong
                        songs={this.state.filteredSongList.length > 0 ? this.state.filteredSongList : this.state.songSaverList}
                        addInput={this.addInput}
                        onSongClick={this.onSongClick}
                        filterList={this.filterList}
                    />
                </main>
            </div>
        )
    }

    
    addInput = (song) => {
        this.setState({
            songSaverList: [...this.state.songSaverList,
            {
                title: song.title,
                artist: song.artist,
                genre: song.genre,
                rating: song.rating
            }]
        })
    }

    onSongClick(song) {
        const newSongSaverList = this.state.songSaverList.filter(item => item.title !== song.title)
        this.setState({ songSaverList: newSongSaverList })
    }

    
}

export default Container;
