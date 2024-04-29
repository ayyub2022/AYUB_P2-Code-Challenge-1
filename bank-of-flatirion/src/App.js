import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import Form from './components/form';
import Search from './components/search';
import { useState } from 'react';



function App() {
  const transaction = [
    {
      date: "17/09/2022",
        description: "Video Game",
        category: "Entertainment",
        amount: "Ksh 15,500"
    },
    {
        date: "10/05/2021",
        description: "Salary",
        category: "Deposit",
        amount: "Ksh 450,000"
    },
    {
        date: "21/03/2024",
        description: "BMW X5",
        category: "Expenditure",
        amount: "Ksh 2,500,000"
    },
    {
        date: "14/06/2020",
        description: "Kenya Railways",
        category: "Expenditure",
        amount: "Ksh 55,000"
    }
      ]


      const [data, setData] = useState(transaction)
      const [searchData, setSearchData] = useState("")

      function handleSearch (e){
        setSearchData(e.target.value)}

        const newData = data.filter((transaction) => {
          if(searchData.length > 0)
          {
          return transaction.description.toLowerCase().includes(searchData.toLowerCase())
        } else{
          return true
        }
        })
        
      function handleNewData (formData) {
        setData([...data, formData])
      }


  return (
    <div className='container'>
  
    <Header/>
    <Search searchBar={handleSearch}/>
    <Form handleNewData={handleNewData}/>
    <Table transaction={newData}/>

    
    </div>
  );
}

export default App;