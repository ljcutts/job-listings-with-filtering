import React, {useState} from 'react';
import { idText } from 'typescript';
import './App.css';
import data from './data.json'

const style = {
  button: `bg-job text-xs text-bgImage rounded-sm font-semibold h-6 p-2 mr-4 pt-3 flex items-center justify-center text-center mb-3 hover:text-white hover:bg-bgImage`,
  button2: `text-xs text-white rounded-xl font-semibold h-6 p-2 mr-4 pt-3 flex items-center justify-center text-center`,
  button3: `bg-job text-xs text-bgImage rounded-sm font-semibold h-6 p-2 mr-4 pt-3 flex items-center justify-center text-center mb-3`,
}

interface CardData {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

type IState = {
  filterBox: string[];
  setFilterBox: React.Dispatch<React.SetStateAction<string[]>>; 
}
 
// Maybe create an array of values that can be filter
// Fix CSS for filter navbar

function App() {

  const [initalData, setData] = useState(data);
  const [filterBox, setFilterBox] = useState<IState["filterBox"]>([]); //['Frontend']
  const [filterActive, setFilterActive] = useState(false);

  const filterRole = (role: string): void => {
    const newData = initalData.filter((data) => data.role === role);
    setData(newData);
  };

  const filterPosition = (position: string ): void => {
    const newData = initalData.filter((data) => data.position === position);
    setData(newData);
    setFilterActive(true)
    console.log('hello')
    if(position = "Senior Frontend Developer") {
      const newItem = 'Senior';
      const newPosition = [...filterBox, newItem];
      setFilterBox(newPosition); 
      console.log(position)
      console.log(filterActive)
      // Use the include method for these as well
    } else if (position = 'Fullstack Developer' || 'Full Stack Engineer' || 'Software Engineer') {

    } else if (position = 'Junior Frontend Developer' || 'Junior Backend Developer' || 'Junior Developer' || 'Front-end Dev') {

    }
  };

  const filterLevel = (level: string): void => {
    const newData = initalData.filter((data) => data.level === level);
    setData(newData);
  };

  const filterLanguage = (language: string): void => {
    const newData = initalData.filter((data) => data.languages.includes(language));
    setData(newData);
    console.log(language)
  };

  const filterTool = (tool: string): void => {
    const newData = initalData.filter((data) => data.tools.includes(tool));
    setData(newData);
  };

  const clearFilter = (): void => {
    setFilterBox([])
    setFilterActive(false);
  }



  return (
    <main>
       <div className='h-156 bg-bgImage mb-70 bg-mobileHeader bg-no-repeat bg-fixed'>
      <img src="./images/bg-header-mobile.svg" className='max-h-156' />
     {filterActive && 
       <div className='w-80 h-9 bg-white m-auto mb-3 relative rounded-sm translate-y-55 shadow-xl flex items-center pl-3 justify-between'>
       <div className={`${style.button3} mt-3 h-4 flex items-center justify-between rounded-sm`}>
         {filterBox.map((value: string) => {
           return (
             <> 
             <div className='flex justify-between items-center'>
             <span key={value} className='text-left'>{value}</span>
            <button className='rounded-r-sm bg-bgImage flex items-center h-5 mb-1  pl-2 translate-x-2 hover:bg-black'><img src="./images/icon-remove.svg" alt="" width='10' height='10' className='translate-x-close translate-y-closey' /></button>
             </div>
            </>
           )
         })}
       </div>
       <span className='text-right text-navbar px-5 text-bgImage font-bold underline cursor-pointer' onClick={clearFilter}>Clear</span>
     </div>
     }
    </div>
   
    {initalData.map((card: CardData): JSX.Element => {
      const {id, company, logo, position, role, level, postedAt, contract, location, languages, tools } = card
      return (
        <div className='bg-white w-80 m-auto h-64 rounded-md shadow-xl mb-11' key={id}>
        <img className='z-50 absolute translate-y-4 translate-x-8 ' src={logo} height='50' width='50' />
        <div className='bg-bgImage h-64 w-2 rounded-l-md'>
          <section className='w-312 h-64  ml-2 p-5 pt-10'>
          <div className='h-28 border-solid border-b-2 '>
             <div className='flex items-center mb-3'>
               <span className='text-bgImage font-semibold text-sm pr-4'>{company}</span>
               <div className={card.new ? `${style.button2} bg-bgImage` : ''}>{card.new ? 'NEW!' :''}</div>
               <div className={card.featured ? `${style.button2} bg-black` : ''}>{card.featured ? 'FEATURED' : ''}</div>
             </div>
             <h1 className='font-semibold mb-2 hover:text-bgImage cursor-pointer' onClick={() => filterPosition(position)}>{position}</h1>
             <div className='text-sm opacity-50 flex items-center'>
               <span className='mr-2'>{postedAt}</span>
               <div className='w-1 h-1 rounded-lg bg-black mr-2'></div>
               <span className='mr-2'>{contract}</span>
               <div className='w-1 h-1 rounded-lg bg-black mr-2'></div>
               <span>{location}</span>
             </div>
           </div>
           <div className='mt-4 flex flex-wrap'>
            <button className={style.button} onClick={() => filterRole(role)}>{role}</button>
            <button className={style.button} onClick={() => filterLevel(level)}>{level}</button>
            <button className={style.button} onClick={() => filterLanguage(languages[0])}>{languages[0]}</button>
            <button className={languages.length > 1 ? `${style.button}` : ''} onClick={() => filterLanguage(languages[1])}>{languages.length > 1 ? languages[1] : ''}</button>
            <button className={languages.length > 2 ? `${style.button}` : ''} onClick={() => filterLanguage(languages[2])}>{languages.length > 2 ? languages[2] : ''}</button>
            <button className={tools.length > 0 ? `${style.button}` : ''} onClick={() => filterTool(tools[0])}>{tools.length > 0 ? tools[0] : ''}</button>
            <button className={tools.length > 1 ? `${style.button}` : ''} onClick={() => filterTool(tools[1])}>{tools.length > 1 ? tools[1] : ''}</button>
           </div>
          </section>  
        </div>
    </div>
      )
    })}
    </main>
   

  );
}

export default App;
