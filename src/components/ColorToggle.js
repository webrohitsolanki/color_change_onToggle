import { useState } from "react"

const ColorToggle = () => {

    const [selectColor, setSelectColor] = useState('red');

    const handleSelect = (e)=>{
        console.log(e.target.value);
        setSelectColor(e.target.value);
    }

  return (

        <div className="card p-0 col-lg-4 col-md-6  mx-auto">
            <div className="card-body">
                <span>Task1</span>
                <hr />
                <div className="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">
                    {/* using color picker */}
                    <span>color picker</span>
                    <input type="color" id="" onInput={handleSelect}/>
                </div>
                
                {/* using select option */}
                <span className="text-left">Using select</span>
                <select name="color" onChange={handleSelect} className="w-100 p-2">
                    <option value="red">red</option>
                    <option value="green">green</option>
                    <option value="yellow">yellow</option>
                    <option value="gray">gray</option>
                </select>

                <div className="border mt-4 mx-auto" style={{background:selectColor , height:"200px", width:"200px"}}>
                </div>
                <span>{selectColor}</span>
            </div>
        </div>

  )
}

export default ColorToggle