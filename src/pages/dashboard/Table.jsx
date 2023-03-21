import React, { useState } from 'react'
import {FiInfo} from 'react-icons/fi'
import {MdOutlineModeEdit} from 'react-icons/md'
import {BsTrash3} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Table = () => {
  const [data, setData] = useState([
    {
      
      nama : 'Wisata Air Terjun',
      alamat : 'Jl.Manggis Bantul,Yogyakarta',
      telp : '082313452351',
      email : 'airterjun.mail.com'
    },{
    
      nama : 'Wisata Air Terjun',
      alamat : 'Jl.Manggis Bantul,Yogyakarta',
      telp : '082313452351',
      email : 'airterjun.mail.com'
    },{
      
      nama : 'Wisata Air Terjun',
      alamat : 'Jl.Manggis Bantul,Yogyakarta',
      telp : '082313452351',
      email : 'airterjun.mail.com'
    },{
     
      nama : 'Wisata Air Terjun',
      alamat : 'Jl.Manggis Bantul,Yogyakarta',
      telp : '082313452351',
      email : 'airterjun.mail.com'
    },{
    
      nama : 'Wisata Air Terjun',
      alamat : 'Jl.Manggis Bantul,Yogyakarta',
      telp : '082313452351',
      email : 'airterjun.mail.com'
    },{
     
      nama : 'Wisata Air Terjun',
      alamat : 'Jl.Manggis Bantul,Yogyakarta',
      telp : '082313452351',
      email : 'airterjun.mail.com'
    },
  ])
  const handleDelete=(id)=>{
    const newData = [...data]
    newData.splice(id,1)
    alert('Berhasil Hapus Data')
    setData(newData)
  }
  const navigate = useNavigate()
  return (
    <main className='w-full flex justify-center items-center p-20'>
        <table className='rounded-[20px] overflow-hidden shadow-lg' >
          <thead >
            <tr className='bg-[#E7EAF0] text-[#212529] '>
              <th className='text-center font-[500] '>No</th>
              <th className='text-left font-[500]'>Nama</th>
              <th className='text-left font-[500]'>Alamat</th>
              <th className='text-left font-[500]'>No.Telepon</th>
              <th className='text-left font-[500]'>Email</th>
              <th className='text-center font-[500]'>Aksi</th>
            </tr>
          </thead>
          <tbody>
          {
            data.map((item,index)=>(
              <tr key={index}>
                <td className='text-center'>{index+1}</td>
                <td>{item.nama}</td>
                <td>{item.alamat}</td>
                <td>{item.telp}</td>
                <td>{item.email}</td>
                <td className='flex gap-3'>
                  <button className='min-w-[45px] min-h-[45px] border-[1px] flex justify-center items-center border-[#E8EBF0] text-[25px] rounded-[6px] text-[#465170] hover:scale-110'onClick={()=>navigate('/detail')}><i><FiInfo/></i></button>
                  <button className='min-w-[45px] min-h-[45px] hover:scale-110 border-[1px] flex justify-center items-center border-[#E8EBF0] text-[25px] rounded-[6px] text-[#465170]'onClick={()=>navigate('/dashboard/edit')}><i><MdOutlineModeEdit/></i></button>
                  <button className='min-w-[45px] min-h-[45px] border-[1px] hover:scale-110 flex justify-center items-center border-[#E8EBF0] text-[25px] rounded-[6px] text-[#465170]' onClick={()=>handleDelete(index)}><i><BsTrash3/></i></button>
                </td>
              </tr>
            ))
          }


            
          
          </tbody>
        </table>
    </main>
  )
}

export default Table