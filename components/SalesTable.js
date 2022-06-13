import { hours } from '../data/Hours'
import { useState, useEffect } from 'react'

const SalesTable = (props) => {

    return (

        <div className="flex flex-col ... text-center ... mb-8 ... container mx-auto w-4/5">
            {(props.stands.length == 0) ?
                <h2>No Cookie Stands Available</h2> :
                <table className="border-collapse rounded w-3/4 mx-auto">

                    <TableHeader />

                    <tbody>
                        {props.stands.map(stand => (
                            <TableBody
                                key={stand.id}
                                stand={stand}
                                deleteStand={props.deleteStand}
                            />))}
                    </tbody>
                        <TableFooter
                        resources = {props.stands}
                        />
                </table>
            }
        </div>
    )
}

export default SalesTable

const TableHeader = () => {

    return (
        <thead className="bg-emerald-500 rounded">
            <tr key="0">
                <th>
                    Location
                </th>
                {hours.map(hour => (<th key={hour}>{hour}</th>))}
                <th>
                    Totals
                </th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {

    function clickHandler() {
        props.deleteStand(props.stand.id);
    }

    if (props.stand.hourly_sales.length == 0) {
        // bunk data
        props.stand.hourly_sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    return (
        <tr>
            <td>
                {/* <Link href={}>
                <a> */}
                    {props.stand.location}
                    {/* </a>
                </Link> */}
                <button onClick={clickHandler}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg></button>
            </td>
            {props.stand.hourly_sales.map((slot, index) =>
                <td key={index}>{slot}</td>
            )}
            <td>
                {props.stand.hourly_sales.reduce((num, sum) => num + sum, 0)}
            </td>
        </tr>
    );
}

const TableFooter = (props) => {

    const [totalSumArray, setTotalSum] = useState([])
    useEffect(() => {
        let total = 0
        const result = []
        for (let i = 0; i < 14; i++) {
            for (let j = 0; j < props.resources.length; j++) {
                total += props.resources[j].hourly_sales[i];
            }
            result.push(total)
            total = 0
        }
        setTotalSum(
            result
        )
    }, [props.resources.length]);


    return (
        <tfoot className="border-collapse border border-gray-900 bg-emerald-500">
            <tr className="border-collapse border border-gray-900">
                <th className="border-collapse border border-gray-900">Totals</th>
                {totalSumArray.map((sum, index) => (<th key={index} className="border-collapse border border-gray-900">{sum}</th>))}
                <th className="border-collapse border border-gray-900">{totalSumArray.reduce((acc, curr) => { acc = acc + curr; return acc }, 0)}</th>
            </tr>
        </tfoot>
    )
}