function Detail(props) {

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