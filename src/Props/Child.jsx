
// childcomponent that receives props
function Child(props) {


  return (
    <div>
        <h1>Child Component</h1>
        <p>Name : {props.person.name}</p>
        <p>Email : {props.person.email}</p>
    </div>
  )
};

export default Child;