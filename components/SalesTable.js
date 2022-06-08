import { hours } from '../data/Hours'


const SalesTable = (props) => {

    return(

        <div className="flex flex-col ... text-center ... mb-8 ... container mx-auto w-4/5">
        {(props.report.length == 0) ?
            <h2>No Cookie Stands Available</h2> :
            <table className="border-collapse rounded w-3/4 mx-auto">
                <TableHeader/>
                <TableBody
                report = {props.report}
                />
                <TableFooter
                report = {props.report}
                hourlyTotal = {props.hourlyTotal}
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

    return (
        <tbody className="border-collapse border border-gray-900">
            {props.report.map(data => (
                <tr className="border-collapse border border-gray-900" key={data.id}>
                    <td className="border-collapse border border-gray-900">
                        <div className="flex justify-between">
                            <div className="pl-2">
                                {data.location}
                            </div>
                        </div>
                    </td>
                    {data.hourlySales.map(cookie => (<td className="border-collapse border border-gray-900">{cookie}</td>))}
                    <td className="border-collapse border border-gray-900">{data.hourlySales.reduce((acc, curr) => { acc = acc + curr; return acc }, 0)}</td>
                </tr>
            ))}
        </tbody>
    )
}

const TableFooter = (props) => {

    return (
        <tfoot className="border-collapse border border-gray-900 bg-emerald-500">
        <tr className="border-collapse border border-gray-900" key={props.report.length + 1}>
            <th className="border-collapse border border-gray-900">Totals</th>
            {props.hourlyTotal.map(sum => (<th className="border-collapse border border-gray-900">{sum}</th>))}
            <th className="border-collapse border border-gray-900">{props.hourlyTotal.reduce((acc, curr) => { acc = acc + curr; return acc }, 0)}</th>
        </tr>
    </tfoot>
    )
}