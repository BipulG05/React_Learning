function Hello(){
    let myName = "Bipuul Guchhait";
    let greeTing = () =>{
        return 'Good Morning'
    }
    return <h3>
        this is me {myName} {greeTing()}
    </h3>
}

export default Hello