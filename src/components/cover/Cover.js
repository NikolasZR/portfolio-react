import React from 'react'
import'./cover.css'
import coverVideo from '../../media/coverVideo.mp4'

const Cover = () => {
  return (
    <div className='cover-conteiner'>
        <video className='video' src={coverVideo} autoPlay loop muted />
      <h1>Nicolas Aberastegui</h1>
      <p>Developer Full stack | Front-end | back-end</p>
    </div>
  )
}

export default Cover
