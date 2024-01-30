export default function Section(props){
    return (
        <article>
        <h4>{props.date}</h4>
        <h1>{props.title}</h1>
        <img
          src={props.imgURL}
          alt="fashion"
        />
        <p>{props.content}</p>
        <br />
        <a href="#"><strong>Continue... </strong></a>
        <hr />
      </article>
    )
}