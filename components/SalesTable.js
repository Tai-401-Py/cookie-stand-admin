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
                {hours.map(hour => (<th>{hour}</th>))}
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
                {props.stand.location}
                <button onClick={clickHandler}>[x]</button>
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
                {totalSumArray.map(sum => (<th className="border-collapse border border-gray-900">{sum}</th>))}
                <th className="border-collapse border border-gray-900">{totalSumArray.reduce((acc, curr) => { acc = acc + curr; return acc }, 0)}</th>
            </tr>
        </tfoot>
    )
}