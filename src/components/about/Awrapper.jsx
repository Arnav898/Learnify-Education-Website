import React from "react";
import { awrapper } from "../../data";

const Awrapper = () => {
  return (
    <>
      <section className='awrapper'>
        <div className='container grid'>
          {awrapper.map((val, index) => ( // Added index parameter
            <div className='box flex' key={index}> {/* Added key prop */}
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <div className='text'>
                <h1>{val.data}</h1>
                <h3>{val.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Awrapper;
