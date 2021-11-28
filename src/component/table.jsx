// import { BsTrashFill} from "react-icons/fa";
import { useState } from "react";

const Table=({data,setData})=>{


    function remove(index) {

                let newData=[...data];
                newData.splice(index,1);
                setData(newData);
    }

    function edit(index) {
        let newname=prompt("enter ur name: ",data[index].name);
        let newfamily=prompt("enter ur family: ",data[index].family);
        let newemail=prompt("enter ur email: ",data[index].email);
        let newphone=prompt("enter ur phone: ",data[index].phone);

        let user={
            name:newname,
            family:newfamily,
            email:newemail,
            phone:newphone
        }

        let newData=[...data];
        newData.slice(index,1,user);
        setData(newData);
    }


    return(
        <table className="table text-right">
        <thead>
            <tr>
                <th scope="col" className="text-center">حذف</th>
                <th scope="col" className="text-center">ویرایش</th>
                <th scope="col" className="text-center">#</th>
                <th scope="col" className="text-center">نام</th>
                <th scope="col" className="text-center">نام خانوادگی</th>
                <th scope="col" className="text-center">ایمیل</th>
                <th scope="col" className="text-center">تلفن</th>
            </tr>
        </thead>
        <tbody id="tbody">

          
            {
                data.map((item,index)=>(
                <tr>
                    <td scope="col" className="text-center" onClick={()=>remove(index)}>delete</td>
                    <td scope="col" className="text-center" onClick={()=>edit(index)}>edite</td>
                    <td scope="col" className="text-center">{index}</td>
                    <td scope="col" className="text-center">{item.name}</td>
                    <td scope="col" className="text-center">{item.family}</td>
                    <td scope="col" className="text-center">{item.email}</td>
                    <td scope="col" className="text-center">{item.phone}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    )
}
export default Table;