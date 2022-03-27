import React, { useState } from "react";
import "./App.css";
import data from "./data.json";

//I put CSS styles in a variable for Tailwind, got really length and were being implemented more than once
const style = {
  button: `bg-job text-xs text-bgImage rounded-sm font-semibold h-6 p-2 mr-4 pt-3 flex items-center justify-center text-center mb-3 hover:text-white hover:bg-bgImage`,
  button2: `text-xs text-white rounded-xl font-semibold h-6 p-2 mr-4 pt-3 flex items-center justify-center text-center`,
  button3: `bg-job text-xs text-bgImage rounded-sm font-semibold h-6 p-2 mr-4 pt-3 flex items-center justify-center text-center mb-3`,
};


//Typescript interface for the data.json file
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


//type for the filterBox useState to help add functionality to the box that is shown at the top of the app
type IState = {
  filterBox: string[];
  setFilterBox: React.Dispatch<React.SetStateAction<string[]>>;
};

//type for filterToggle useState, was suppose to change the data that was shown when "reversing" the filtering process
type IState2 = {
  filterToggle: boolean;
  setFilterToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

function App() {
  const [initalData, setData] = useState(data); //useState for the first data mapping
  const [secondInitalData, setSecondData] = useState(data); //useState for the second data mapping when "reversing" the filtering
  const [filterBox, setFilterBox] = useState<IState["filterBox"]>([]); //useState for the box that is shown on top of the app
  const [filterToggle, setFilterToggle] = useState<IState2["filterToggle"]>(false); //switches between initialData and secondInitialData
  const [filterActive, setFilterActive] = useState(false); //useState that allows the filterBox at the top of the app to appear

  //Filters the jobs based on if they have the role that was clicked
  const filterRole = (role: string): void => {
    const newData = initalData.filter((data) => data.role === role);
    setData(newData);
    const newItem = role;
    if (filterBox.includes(role)) {
      setFilterBox(filterBox);
    } else {
      const newPosition = [...filterBox, newItem];
      setFilterBox(newPosition);
      setFilterActive(true);
    }
  };

  //Filters the positions based on if they have the role that was clicked
  const filterPosition = (position: string): void => {
    let newItem, newPosition;
    const newData = initalData.filter((data) => data.position === position);
    setData(newData);
    if (filterBox.includes("Senior")) {
      setFilterBox(filterBox);
    } else if (filterBox.includes("Fullstack")) {
      setFilterBox(filterBox);
    } else if (filterBox.includes("Junior")) {
      setFilterBox(filterBox);
    } else {
      if (position === "Senior Frontend Developer") {
        newItem = "Senior";
        newPosition = [...filterBox, newItem];
        setFilterBox(newPosition);
      }

      if (position === "Fullstack Developer") {
        newItem = "Fullstack";
        newPosition = [...filterBox, newItem];
        setFilterBox(newPosition);
        const newData = initalData.filter((data) => data.position === position);
        setData(newData);
      }

      if (
        position === "Junior Frontend Developer" ||
        position === "Junior Backend Developer" ||
        position === "Junior Developer" ||
        position === "Front-end Dev"
      ) {
        newItem = "Junior";
        newPosition = [...filterBox, newItem];
        setFilterBox(newPosition);
      }
      setFilterActive(true);
    }
  };

  //Resets all the filtering done and makes the filterBox disappear
  const clearFilter = (): void => {
    setFilterBox([]);
    setData(data);
    setFilterActive(false);
  };

  //Deletes the roles, positions, etc that are inside the filterBox
  const deleteFilter = (value: string): void => {
    setFilterBox(filterBox.filter((item) => item !== value));
    if (filterBox.length < 2) {
      setFilterBox([]);
      setData(data);
      setFilterActive(false);
      setFilterToggle(false);
    }
  };

  //Filters the levels based on if they have the role that was clicked
  const filterLevel = (level: string): void => {
    const newData = initalData.filter((data) => data.level === level);
    setData(newData);
    setFilterActive(true);
    setFilterToggle(false);
    if (filterBox.includes(level)) {
      setFilterBox(filterBox);
    } else {
      const newItem = level;
      const newPosition = [...filterBox, newItem];
      setFilterBox(newPosition);
    }
  };

  //Filters the jobs based on if they have the role that was clicked
  const filterLanguage = (language: string): void => {
    const newData = initalData.filter((data) =>
      data.languages.includes(language)
    );
    setData(newData);
    setFilterActive(true);
    if (filterBox.includes(language)) {
      setFilterBox(filterBox);
    } else {
      const newItem = language;
      const newPosition = [...filterBox, newItem];
      setFilterBox(newPosition);
    }
  };

  //Filters the tools based on if they have the role that was clicked
  const filterTool = (tool: string): void => {
    const newData = initalData.filter((data) => data.tools.includes(tool));
    setData(newData);
    setFilterActive(true);
    if (filterBox.includes(tool)) {
      setFilterBox(filterBox);
    } else {
      const newItem = tool;
      const newPosition = [...filterBox, newItem];
      setFilterBox(newPosition);
    }
  };

  return (
    <main>
      {/* The box that is shown that has a list of all the things that was filtered */}
      <div className="h-156 bg-bgImage mb-70 bg-mobileHeader bg-no-repeat bg-fixed bg-mobile bg-75 md:bg-desktop md:bg-100">
        {filterActive && (
          <div className="w-80 h-9 bg-white m-auto mb-3 relative rounded-sm translate-y-55 shadow-xl flex items-center pl-3 overflow-scroll md:translate-y-33 md:w-800 md:pl-5">
            {filterBox.map((value: string): JSX.Element => {
              return (
                <section key={value}>
                  <div
                    className={`${style.button3} mt-3 h-4 flex items-center rounded-sm`}
                  >
                    <div className="flex items-center">
                      <span className="text-left">{value}</span>
                      <button
                        onClick={() => deleteFilter(value)}
                        className="rounded-r-sm bg-bgImage flex items-center h-5 mb-1  pl-2 translate-x-2 hover:bg-black min-w-18px"
                      >
                        <img
                          src="./images/icon-remove.svg"
                          alt=""
                          width="10"
                          height="10"
                          className="translate-x-close translate-y-closey"
                        />
                      </button>
                    </div>
                  </div>
                </section>
              );
            })}
            <span
              className="text-right text-navbar px-5 text-bgImage font-bold underline cursor-pointer "
              onClick={clearFilter}
            >
              Clear
            </span>
          </div>
        )}
      </div>
      {/* The second data set when trying to "reverse" the filtering process */}
      {filterToggle === true
        ? secondInitalData.map((card: CardData): JSX.Element => {
            const {
              id,
              company,
              logo,
              position,
              role,
              level,
              postedAt,
              contract,
              location,
              languages,
              tools,
            } = card;
            return (
              <div
                className="bg-white w-80 m-auto h-64 rounded-md shadow-xl mb-11 md:w-800 md:h-32"
                key={id}
              >
                <img
                  className="z-50 absolute translate-y-4 translate-x-8 w-50 h-50 md:w-75 md:h-75 md:translate-y-45"
                  src={logo}
                  alt="logo"
                />
                <div className="bg-bgImage h-64 w-2 rounded-l-md md:h-32">
                  <section className="w-312 h-64 ml-2 p-5 pt-10 md:flex md:items-center md:p-0 md:ml-40 md:h-32">
                    <div className="h-28 border-solid border-b-2 md:border-none md:mr-12 md:pt-3 md:w-full">
                      <div className="flex items-center mb-3">
                        <span className="text-bgImage font-semibold text-sm pr-4">
                          {company}
                        </span>
                        <div
                          className={
                            card.new ? `${style.button2} bg-bgImage` : ""
                          }
                        >
                          {card.new ? "NEW!" : ""}
                        </div>
                        <div
                          className={
                            card.featured ? `${style.button2} bg-black` : ""
                          }
                        >
                          {card.featured ? "FEATURED" : ""}
                        </div>
                      </div>
                      <h1
                        className="font-semibold mb-2 hover:text-bgImage cursor-pointer md:whitespace-nowrap"
                        onClick={() => filterPosition(position)}
                      >
                        {position}
                      </h1>
                      <div className="text-sm opacity-50 flex items-center md:whitespace-nowrap">
                        <span className="mr-2">{postedAt}</span>
                        <div className="w-1 h-1 rounded-lg bg-black mr-2"></div>
                        <span className="mr-2">{contract}</span>
                        <div className="w-1 h-1 rounded-lg bg-black mr-2"></div>
                        <span>{location}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap md:flex-nowrap md:w-full">
                      <button
                        className={style.button}
                        onClick={() => filterRole(role)}
                      >
                        {role}
                      </button>
                      <button
                        className={style.button}
                        onClick={() => filterLevel(level)}
                      >
                        {level}
                      </button>
                      <button
                        className={style.button}
                        onClick={() => filterLanguage(languages[0])}
                      >
                        {languages[0]}
                      </button>
                      <button
                        className={
                          languages.length > 1 ? `${style.button}` : ""
                        }
                        onClick={() => filterLanguage(languages[1])}
                      >
                        {languages.length > 1 ? languages[1] : ""}
                      </button>
                      <button
                        className={
                          languages.length > 2 ? `${style.button}` : ""
                        }
                        onClick={() => filterLanguage(languages[2])}
                      >
                        {languages.length > 2 ? languages[2] : ""}
                      </button>
                      <button
                        className={tools.length > 0 ? `${style.button}` : ""}
                        onClick={() => filterTool(tools[0])}
                      >
                        {tools.length > 0 ? tools[0] : ""}
                      </button>
                      <button
                        className={tools.length > 1 ? `${style.button}` : ""}
                        onClick={() => filterTool(tools[1])}
                      >
                        {tools.length > 1 ? tools[1] : ""}
                      </button>
                    </div>
                  </section>
                </div>
              </div>
            );
          })
          // The initial data set before trying to "reverse" the filtering process
        : initalData.map((card: CardData): JSX.Element => {
            const {
              id,
              company,
              logo,
              position,
              role,
              level,
              postedAt,
              contract,
              location,
              languages,
              tools,
            } = card;
            return (
              <div
                className="bg-white w-80 m-auto h-64 rounded-md shadow-xl mb-11 md:w-800 md:h-32"
                key={id}
              >
                <img
                  className="z-50 absolute translate-y-4 translate-x-8 w-50 h-50 md:w-75 md:h-75 md:translate-y-45"
                  src={logo}
                  alt="logo"
                />
                <div className="bg-bgImage h-64 w-2 rounded-l-md md:h-32">
                  <section className="w-312 h-64 ml-2 p-5 pt-10 md:flex md:items-center md:p-0 md:ml-40 md:h-32">
                    <div className="h-28 border-solid border-b-2 md:border-none md:mr-12 md:pt-3 md:w-full">
                      <div className="flex items-center mb-3">
                        <span className="text-bgImage font-semibold text-sm pr-4">
                          {company}
                        </span>
                        <div
                          className={
                            card.new ? `${style.button2} bg-bgImage` : ""
                          }
                        >
                          {card.new ? "NEW!" : ""}
                        </div>
                        <div
                          className={
                            card.featured ? `${style.button2} bg-black` : ""
                          }
                        >
                          {card.featured ? "FEATURED" : ""}
                        </div>
                      </div>
                      <h1
                        className="font-semibold mb-2 hover:text-bgImage cursor-pointer md:whitespace-nowrap"
                        onClick={() => filterPosition(position)}
                      >
                        {position}
                      </h1>
                      <div className="text-sm opacity-50 flex items-center md:whitespace-nowrap">
                        <span className="mr-2">{postedAt}</span>
                        <div className="w-1 h-1 rounded-lg bg-black mr-2"></div>
                        <span className="mr-2">{contract}</span>
                        <div className="w-1 h-1 rounded-lg bg-black mr-2"></div>
                        <span>{location}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap md:flex-nowrap md:w-full">
                      <button
                        className={style.button}
                        onClick={() => filterRole(role)}
                      >
                        {role}
                      </button>
                      <button
                        className={style.button}
                        onClick={() => filterLevel(level)}
                      >
                        {level}
                      </button>
                      <button
                        className={style.button}
                        onClick={() => filterLanguage(languages[0])}
                      >
                        {languages[0]}
                      </button>
                      <button
                        className={
                          languages.length > 1 ? `${style.button}` : ""
                        }
                        onClick={() => filterLanguage(languages[1])}
                      >
                        {languages.length > 1 ? languages[1] : ""}
                      </button>
                      <button
                        className={
                          languages.length > 2 ? `${style.button}` : ""
                        }
                        onClick={() => filterLanguage(languages[2])}
                      >
                        {languages.length > 2 ? languages[2] : ""}
                      </button>
                      <button
                        className={tools.length > 0 ? `${style.button}` : ""}
                        onClick={() => filterTool(tools[0])}
                      >
                        {tools.length > 0 ? tools[0] : ""}
                      </button>
                      <button
                        className={tools.length > 1 ? `${style.button}` : ""}
                        onClick={() => filterTool(tools[1])}
                      >
                        {tools.length > 1 ? tools[1] : ""}
                      </button>
                    </div>
                  </section>
                </div>
              </div>
            );
          })}
    </main>
  );
}

export default App;
