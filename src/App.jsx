import Header from './components/Header';
import Section from './components/Section';
import ListItem from './components/ListItem';

import moviesList from './database/moviesList.json'
import seriesList from './database/seriesList.json'
import socialList from './database/socialList.json'

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Section title="Meus filmes" subtitle="Os meus preferidos!" className="movies-list" >
          {
            moviesList.map(function (item) {
              return (
                <ListItem
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>
        <Section title="Minhas séries" subtitle="Essas são as melhores!" className="movies-list" >
          {
            seriesList.map(function (item) {
              return (
                <ListItem
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>
        <Section title="Minhas redes" subtitle="Se conecte comigo agora mesmo!" className="social-list">
          {
            socialList.map(function (item) {
              return (
                <ListItem
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>
      </main>
      </>
  )
}

export default App;