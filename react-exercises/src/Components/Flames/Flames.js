import React,{useState} from 'react'
import "./flames.css"; 

let relationship = ["Friends","Love","Affection","Marriage","Enemies","Sister"]
const Flames = () => {

    const [name1,setName1] = useState("");
    const [name2,setName2] = useState("");
    const [relation,setRelation] = useState();

   let str1 = name1;
   let str2 = name2;



  function calculateRelationship(){
 

      str1 = str1.toLowerCase();
      str2 = str2.toLowerCase();

    for (let v of str1) {
    
        if(str2.includes(v)){
    str1 = str1.replace(v,"");
    str2 = str2.replace(v,"");
        }
    }
setRelation(relationship[(str1.length + str2.length) % 6])
  }

  return (
    <div className="flames-overlay">
      <div className="container">
        <div className="data-input-flames">
          <input
            placeholder="Please enter 1st name"
            onChange={(e) => setName1(e.target.value)}
          />
          <input
            placeholder="Please enter 2nd name"
            onChange={(e) => setName2(e.target.value)}
          />
        </div>
        <div className="controls-flames">
          <button onClick={calculateRelationship}>
            Calculate RelationShip
          </button>
        </div>

        <div>
          <h2>{relation?relation:"FLAMES"}</h2>
        </div>
      </div>
    </div>
  );
}

export default Flames