import React from 'react'
import styles from '@/app/styles/common.module.css'
import MovieCard from '../components/MovieCard';

const movie = async () => {


  await new Promise(resolve =>  setTimeout( resolve , 2000))

  
const url = process.env.RAPID_KEY;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2fc776e8c2msh7774a97eb3a4644p120795jsnfcc026a32177',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

const res = await fetch(url, options);
const data = await res.json()
const main_data = data.titles;
console.log(main_data.jawSummary)

  return (
    <>
    <section className={`${styles.movieSection}`}>
      <div className={styles.container} >

    <h1>Series and Movie</h1>
    <div className={styles.card_section} > 
    {
      main_data.map((curElem) => {
        return <MovieCard key={curElem.id} {...curElem} />
          })
    }
    </div>
      </div>
    </section>

   
    </>
  )
}

export default movie