import { useState, useEffect } from 'react';
import './App.css';
import { MdOutlineMenuOpen } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import Details1 from "./components/Details1";
import Details2 from "./components/Details2";
import Details3 from "./components/Details3";
import axios from 'axios';



function App() {

  const baseUrl = `https://api.quicksell.co/v1/internal/frontend-assignment`;

  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);

  const [group, setGroup] = useState("Status");
  const [order, setOrder] = useState("INC");


  const handleChangeGroup = (e) => {
    setGroup(e.target.value);
    setOpen(!open);

  }


  const handleChangeOrder = (e) => {
    setOrder(e.target.value);
    setOpen(!open);
  }

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  }, [baseUrl]);

  if (data === null)
    return null;

  return (
    <div className="App">
      <div className='header_section' >
        <div className='menu-container'>

          {/* this is menu head */}
          <div className='menu-head' onClick={() => setOpen(!open)}>
            <MdOutlineMenuOpen />
            <p>Display</p>
            <RiArrowDropDownLine />
          </div>

        </div>
      </div>

      <div className='body'>
        {/* this is menu body */}
        <div className={`menu-body ${open ? "active" : "inactive"}`} >
          <div className='body-item'>
            <p>Grouping</p>
            <select value={group} onChange={handleChangeGroup} className='select-body' >
              <option value="Status">Status</option>
              <option value="User">User</option>
              <option value="Priority">Priority</option>
            </select>

          </div>
          <div className='body-item'>
            <p>Ordering</p>
            <select value={order} onChange={handleChangeOrder} className='select-body'>
              <option value="INC">INC</option>
              <option value="DEC">DEC</option>
            </select>
          </div>
        </div>


        {/* all columns */}

        {group === "Status" && <Details1 data={data} order={order} />}

        {group === "User" && <Details2 data={data} order={order} />}

        {group === "Priority" && <Details3 data={data}  />}



      </div>
    </div >
  );
}

export default App;
