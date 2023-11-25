import React, { useEffect, useState } from "react";
import styles from "../styleSheet/film.module.css";
import  PeopleCard from "../PeopleCard";


export default function Species() {
  const [isGrid, setIsGrid] = useState(false);
  const api_url = "https://swapi.dev/api/species/";
  const [data, setData] = useState([]);
  useEffect(()=>{
    async function getapi(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const fetchedData = await response.json();
        setData(fetchedData.results);
        console.log("Data is fetched.");
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getapi(api_url);
  },[data]);

  function setGrid() {
    setIsGrid(true);
  }
  function setTable() {
    setIsGrid(false);
  }
  
  return (
    <div className={styles.films}>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className={`modal-dialog modal-dialog-centered`}>
          <div className={`modal-content ${styles.modalContent}`}>
            <img src="./alert.png" className={styles.alert}></img>
            <div>
              <h2>Caution!</h2>
              <span>Are you sure want to delete this film</span>
            </div>

            <div className={styles.btnGroup}>
              <button
                type="button"
                className={`btn btn-secondary ${styles.cancel}`}
              >
                Cancel
              </button>
              <button
                type="button"
                className={`btn btn-secondary ${styles.yes}`}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ========================================= */}
      
      <div className={styles.titleBar}>
        <h2>Species</h2>
        <div className={styles.displayButton}>
          <div onClick={setGrid} style={isGrid? {backgroundColor:'white', color:'gray'}:{backgroundColor:'transparent'}}>
            <img src="./grid.png"></img>
            <span style={isGrid? {display:""}:{display:"none"}}>Grid</span>
          </div>
          <div onClick={setTable} style={!isGrid? {backgroundColor:'white',color:'gray'}:{backgroundColor:'transparent'}}>
            <img src="./list.png"></img>
            <span style={!isGrid? {display:""}:{display:"none"}}>List</span>
          </div>
        </div>
      </div>
      {isGrid && (
        <div className={styles.main}>
          <div id="loading" style={data && {display:"none"}}>
            <span>Loading...</span>
          </div>
          {data &&
            data.map((curr, index) => {
              return < PeopleCard key={index} details={curr} labels={["Name","Homeworld","Lifespan"]} labels2={["name","homeworld","average_lifespan"]}/>;
            })}
        </div>
      )}
      {!isGrid && (
        <div className={styles.mainTable}>
          <table>
            <tr>
              <th>Name</th>
              <th>Homeworld</th>
              <th>Lifespan</th>
              <th></th>
            </tr>
            {data &&
              data.map((curr, index) => {
                return (
                  <tr>
                    <td>
                      <img className={styles.reel} src="./reel.png"></img>
                      {curr.name}
                    </td>
                    <td>{curr.homeworld}</td>
                    <td>{curr.average_lifespan}</td>
                    <td className={styles.threeDot}><img src='./threedot.png' className={`${styles.more} dropdown-toggle`} data-bs-toggle="dropdown" aria-expanded="false"></img>
                    <ul className={`dropdown-menu`}>
          <li><a className={`dropdown-item ${styles.menuItem}`} href='#'><img src='./view.png'></img>View</a></li>
          <li><a className={`dropdown-item ${styles.menuItem}`} href='#'><img src='./download.png'></img>Download</a></li>
          <li><a className={`dropdown-item ${styles.menuItem}`} href='#'><img src='./rename.png'></img>Rename</a></li>
          <li><a className={`dropdown-item ${styles.menuItem}`} href='#'><img src='./share.png'></img>Share link</a></li>
          <li><a className={`dropdown-item ${styles.menuItem}`} href='#'><img src='./move.png'></img>Move</a></li>
          <li><a className={`dropdown-item ${styles.menuItem}`} href='#'><img src='./markprivate.png'></img>Mark private</a></li>
          <li><a className={`dropdown-item ${styles.delete} ${styles.menuItem}`} data-bs-toggle="modal" data-bs-target="#exampleModal"><img src='./delete.png'></img>Delete</a></li>
        </ul></td>
                  </tr>
                );
              })}
          </table>
        </div>
      )}
    </div>
  );
};