

const Footer = (props) => {


  return (
      <>
        <footer className='bg-emerald-500 py-4 pl-6'>
          <p>{props.stands.length} Locations Worldwide</p>
          <p>&copy; 2002 </p>
        </footer>
      </>
    )
  }

export default Footer