function Detail(props) {
  console.log(props.media)
  // const { title, author, subject, thoughts } = props.indivMedia.fields
  // const { id } = props.indivMedia

  return (
    <div className='detail'>
      <p>Detail</p>
      <h2>Title: {props.title}</h2>
      <h3>by Author: {props.author}</h3>
      <p>Subject: {props.subject}</p>
      <p>{props.thoughts}</p>
    </div>
  )
}

export default Detail