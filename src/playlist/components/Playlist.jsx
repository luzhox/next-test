import React from 'react';
import Media from './Media.jsx';

function Playlist(props) {
    const playlist = props.data.categories[0].playlist
    console.log(props.data);
    return (
      <div className="Playlist">
        {
          playlist.map((item) => {
            return <Media {...item} key={item.id} />
          })
        }
      </div>
    )
  }


export default Playlist;
