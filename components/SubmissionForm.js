import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';

const SubmissionForm = (props) => {

    const { user } = useAuth();
    const { createResource } = useResource();

    function submitHandler(event) {
        event.preventDefault();
        const stand_data = {
            location: event.target.location.value,
            minimum_customers_per_hour: parseInt(event.target.minimum.value),
            maximum_customers_per_hour: parseInt(event.target.maximum.value),
            average_cookies_per_sale: parseFloat(event.target.average.value),
            owner: user.id,
        };
        createResource(stand_data);
    }

    
    return (
        <>
            <div>
                <h1 className='py-4 text-xl text-center'>Create Cookie Stand</h1>
                <form onSubmit={submitHandler} className="w-full mb-6 text-center">
                    <div className='px-2'>
                        <div className="flex mb-6 items-center">
                            <label className='pr-2'>Location</label>
                            <input className="w-5/6 p-3 my-2 h-6" placeholder='location' name='location' />
                        </div>
                    </div>

                    <div className="flex gap-x-4 px-2">
                        <div className='bg-emerald-200 rounded'>
                            <label className='text-sm'>Minimum Customers per Hour</label>
                            <input className="w-5/6 p-3 my-2 h-6" placeholder='minimum' name='minimum' />
                        </div>
                        <div className='bg-emerald-200 rounded'>
                            <label className='text-sm'>Maximum Customers per Hour</label>
                            <input className="w-5/6 p-3 my-2 h-6" placeholder='maximum' name='maximum' />
                        </div>
                        <div className='bg-emerald-200 rounded'>
                            <label className='text-sm'>Average Cookies per Sale</label>
                            <input className="w-5/6 p-3 my-2 h-6" placeholder='average' name='average' />
                        </div>
                    <button type="submit" className="w-2/5 bg-emerald-500 rounded">Create</button>
                    </div>
                </form>
            </div>
        </>
    );
}


export default SubmissionForm
