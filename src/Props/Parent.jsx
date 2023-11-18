import Child from "./Child";

function Parent() {

    const data = {
        name :"Welcome to Mygominds" ,
        email : "Mygominds1123@gmail.com"
    };

  return (
    <div>
    <h2>Parent Component</h2>
    {/* // Render the childcomponent and pass data as props */}
    <Child person={data}></Child>
    </div>
  )
};

export default Parent;