import SubmissionForm from '../components/SubmissionForm'
import SalesTable from '../components/SalesTable';
import { useState } from 'react'

const Main = (props) => {

    const [report, setReport] = useState([])
    const [hourlyTotal, setHourlyTotal] = useState([])

    const calHourlyTotal = (report) => {
      let total = 0
      let result = []
      for (let i = 0; i < 14; i++){
          for(let j = 0; j < report.length; j++){
              total += report[j].hourlySales[i];
          }
          result.push(total)
          total = 0
        }
      setHourlyTotal(result)
    }
    
    function calSalesTotal(store){
      
      let sales = []
      for (let i = 0; i < 14; i++){
        let rand  = Math.random()
        let sum = rand*(parseInt(store.maxCustomers)-parseInt(store.minCustomers)+1) 
        sum += parseInt(store.minCustomers)
        let custmer = Math.floor(parseInt(sum))
        let cookie = custmer*parseFloat(store.avgCookies)
        sales.push(Math.floor(cookie))
      }
      return sales
    }
    
    
    function createData(values){
      console.log(values)
      console.log(report)
      values.hourlySales =  calSalesTotal(values)
      let newarr = report
      newarr.push(values)
      setReport(newarr)
      calHourlyTotal(newarr)
      console.log(hourlyTotal)
        }
      

    return (
      <>
        <main className='bg-emerald-300 w-1/2 flex flex-col items-center mx-auto rounded my-6'>
          <SubmissionForm
          createData = {createData}
          setNumLoc = {props.setNumLoc}
          />
        </main>
        <SalesTable
        report = {report}
        hourlyTotal = {hourlyTotal}
        />
      </>
    )
  }

export default Main
