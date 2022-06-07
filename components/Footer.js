const Footer = (props) => {
    return (
      <>
        <footer className='bg-green-400 py-4 pl-6'>
          <p>&copy;{props.copyright}</p>
        </footer>
      </>
    )
  }

export default Footer