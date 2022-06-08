import { useState } from 'react'

const SubmissionForm = (props) => {

    const initValues = {
        location: '',
        minCustomers: 0,
        maxCustomers: 0,
        avgCookies: 0.00,
    };
    
    const [values, setValues] = useState(initValues);
    
    function submitHandler(e) {
        e.preventDefault();
        props.createData(values);
        props.setNumLoc()
        setValues(initValues)
    }
    
    function changeHandler(e) {
        let { name, value, type } = e.target;
        if (type === "number") {
            value = parseFloat(value);
        }
        setValues({ ...values, [name]: value });
        console.log(values)
    }
    
    return (
        <>
            <div>
                <h1 className='py-4 text-xl text-center'>Create Cookie Stand</h1>
                <form onSubmit={submitHandler} className="w-full mb-6 text-center">
                    <div className='px-2'>
                        <div className="flex mb-6 items-center">
                            <label className='pr-2'>Location</label>
                            <input className="w-full p-4 mt-3 h-2" type="text" name="location" id="location" value={values.location} onChange={changeHandler} placeholder="Cookie Stand Location" />
                        </div>
                    </div>

                    <div className="flex gap-x-4 px-2">
                        <div className='bg-emerald-200 rounded'>
                            <label className='text-sm'>Minimum Customers per Hour</label>
                            <input className="w-5/6 p-3 my-2 h-6" type="number" name="minCustomers" id="minCustomers" value={values.minCustomers} onChange={changeHandler} placeholder="1"/>
                        </div>
                        <div className='bg-emerald-200 rounded'>
                            <label className='text-sm'>Maximum Customers per Hour</label>
                            <input className="w-5/6 p-3 my-2 h-6" type="number" name="maxCustomers" id="maxCustomers" value={values.maxCustomers} onChange={changeHandler} />
                        </div>
                        <div className='bg-emerald-200 rounded'>
                            <label className='text-sm'>Average Cookies per Sale</label>
                            <input className="w-5/6 p-3 my-2 h-6" type="number" step='0.01' name="avgCookies" id="avgCookies" value={values.avgCookies} onChange={changeHandler} />
                        </div>
                    <button type="submit" className="w-2/5 bg-emerald-500 rounded">Create</button>
                    </div>
                </form>
            </div>
        </>
    );
}


export default SubmissionForm
