import './App.css';
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import Ani from './components/anime_ist/Ani';
import demon from './assets/demon.jpg';

export default function App() {

 const ani_list = [
    {
      id:1,
      name:"Demon Slayer: Kimetsu no Yaiba",
      title:"Demon",
      img:demon,
    },
    {
      id:2,
      name:"Demon Slayer: Kimetsu no Yaiba",
      title:"Demon",
      img:demon,
    },
    {
      id:3,
      name:"Demon Slayer: Kimetsu no Yaiba",
      title:"Demon",
      img:demon,
    },
    {
      id:4,
      name:"Demon Slayer: Kimetsu no Yaiba",
      title:"Demon",
      img:demon,
    },
    {
      id:4,
      name:"Demon Slayer: Kimetsu no Yaiba",
      title:"Demon",
      img:demon,
    },
    {
      id:4,
      name:"Demon Slayer: Kimetsu no Yaiba",
      title:"Demon",
      img:demon,
    },
    {
      id:4,
      name:"Demon Slayer: Kimetsu no Yaiba",
      title:"Demon",
      img:demon,
    },
    {
      id:4,
      name:"Demon Slayer: Kimetsu no Yaiba",
      title:"Demon",
      img:demon,
    },
  ];
  return (
    <section className='all'>
    <Header></Header>
    <Banner id='animi'></Banner>
    <div className='anime-list'>
    <h1>
        <span>
          Anime List
        </span>
      </h1>
    </div>
    <div className='card-container'>
      {
        ani_list.map((ani) => {
          return <Ani key={ani.id} ani={ani}></Ani>
        })
      }
    </div>
    </section>
  )
}
