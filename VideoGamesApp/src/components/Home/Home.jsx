import React from 'react'
import './Home.css'
import Card from '../Card/Card'
const Home = ({data}) => {
    console.log(data)
  return (
    
    <main>
        hello home
    <h1>VideoGames Plataform</h1>
    <section id='filters'></section>
    <section id='content'></section>
    
    {/* {data?.map((game)=> (
    
    <Card
    title={game.title}
    img= {game.keyImage?.[0]}
    description = {game.description}
    id={game.id}
    />         */}
        
    {/* ))}  */}
    </main>
  )
}

export default Home