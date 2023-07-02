const Dropdown=({changeFoodData})=>{


const changeMenu=(e)=>{
    console.log(e.target.value);
}

return(
    <nav>
            <h2>dynamic dropdown</h2>

            <select className="menu" onChange={changeFoodData}>
                <option value="เมนูทั้งหมด">เมนูทั้งหมด</option>
                <option value="ผัด-ทอด"> ผัดทอด </option>
                <option value="แกง-ต้มยำ"> แกงต้มยำ </option>
                <option value="สเต็ก"> สเต็ก </option>
                <option value="เครื่องดื่ม"> เครื่องดื่ม </option>
            </select>
    </nav>
)
}
export default Dropdown