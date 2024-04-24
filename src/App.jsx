import React from "react";
import { useForm, useFieldArray,Controller } from "react-hook-form";
import { FaTrashCan } from "react-icons/fa6";

function App() {
  const { register, control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      test: [{ firstName: "Bill", lastName: "Luo" }]
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test"
  });

  return (
    <form>
    <div className='flex flex-col gap-2 w-ful  border-2 border-slate-400 rounded-lg m-2 lg:my-5 lg:mx-[50px] p-5 shadow-lg bg-white'>
    <h1 className="w-full text-5xl font-bold text-center p-5 m-2 text-blue-700 ">ORDER MATERIAL</h1>

      <div className='flex flex-col lg:flex-row gap-2 w-full'>
        <div className="flex flex-col gap-2  w-full">
        <label className="required">Order List Id</label>
        <input type="text"/>
        </div>
        <div className="flex flex-col gap-2  w-full"><label className="required" htmlFor="building">Building Id</label>
        <input type="text"  />
        </div>
        <div className="flex flex-col gap-2  w-full"><label className="required" htmlFor="building">Building Name</label>
        <input type="text"  />
        </div>
        
      </div>
      <div className='flex flex-col lg:flex-row gap-2 w-full'> 
      <div className="flex flex-col gap-2 w-full">
        <label className="required" htmlFor="building">Building Address</label>
        <textarea type="text"  />
      </div>
      <div className="flex flex-col gap-2 w-full">
      <label className="required" htmlFor="building">Order Discription</label>
        <textarea type="text"  />
      </div>
        </div>
        <div className='border-2 border-slate-400 rounded-lg p-5 overflow-x-auto'>
      <table >
        <tr>
          <th className="px-2 min-w-[150px]"> Order Item Uid</th>
          <th className="px-2 min-w-[150px]">Item Nr</th>
          <th className="px-2 min-w-[150px]">Material Id</th>
          <th className="px-2 min-w-[150px]">Material Description</th>
          <th className="px-2 min-w-[150px]">Current Qty</th>
          <th className="px-2 min-w-[150px]">Previous Qty</th>
          <th className="px-2 min-w-[150px]">Qty Diff</th>
          <th className="px-2 min-w-[150px]">Order Comment</th>
        </tr>
        {
          fields.map((item,index)=>(
            <tr key={item.id} >
              <td className="px-2 min-w-[150px]"><input type="text" /></td>
              <td className="px-2 min-w-[150px]"><input type="text" /></td>
              <td className="px-2 min-w-[150px]"><input type="text" /></td>
              <td className="px-2 min-w-[150px]"><input type="text" /></td>
              <td className="px-2 min-w-[150px]"><input type="text" /></td>
              <td className="px-2 min-w-[150px]"><input type="text" /></td>
              <td className="px-2 min-w-[150px]"><input type="text" /></td>
              <td className="px-2 min-w-[150px]"><input type="text" /></td>
             { index!=0 && <td className="px-2 min-w-[150px]"><button className="ml-2 h-10" type="button" onClick={() => remove(index)}><FaTrashCan/></button></td>
}
            </tr>
          ))
        }
      </table>
      <button
      className="mt-2"
        type="button"
        onClick={() => append({ })}
      >
        Add 
      </button>
      </div>
        <div className='flex flex-col gap-2'> <label  htmlFor="remarks" className="required">Remarks</label>
        <input className="lg:w-1/2 w-full " type="text"  /></div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className='flex lg:flex-row flex-col gap-2'>
            <div className='flex flex-col gap-2 lg:border-none border-2 border-slate-500 rounded-md p-2 '>
            <label className="required" htmlFor="prep-by">Prep By</label>
            <input type="text"/>
            <label className="required" htmlFor="Date">Date</label>
            <input type="text" />
            <button>Send For Chk</button>
            </div>
            <div className='flex flex-col gap-2 lg:border-none border-2 border-slate-500 rounded-md p-2'>
            <label className="required" htmlFor="prep-by">Check  By</label>
            <input type="text" />
            <label className="required" htmlFor="Date">Date</label>
            <input type="text" />

            <button>Send For App</button>

            </div>
            
            <div className='flex flex-col gap-2 lg:border-none border-2 border-slate-500 rounded-md p-2 '>
            <label className="required" htmlFor="prep-by">Approved By</label>
            <input type="text" />
            <label className="required" htmlFor="Date">Date</label>
            <input type="text" />

            <button>Send For Approve</button>

            </div>
          </div>
          <div className="flex gap-2 justify-center items-end lg:mt-0 mt-5">
            <button>Delete</button>
            <button>Cancel</button>
            <button>Save</button>
          </div>
        </div>

    </div>
   </form>
  )
}

export default App
