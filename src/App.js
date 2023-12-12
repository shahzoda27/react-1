import React, {Component} from "react";
export default class App extends Component{
  state={
    users:[
    {id:1,first_name:'John',last_name:'Smith',age:35 ,address:'Yashnobod',salary:30000},
    {id:2,first_name:'Frank',last_name:'Smith',age:25 ,address:'Yashnobod',salary:60000},
    {id:3,first_name:'George',last_name:'Smith',age:45 ,address:'Yashnobod',salary:80000},
    {id:3,first_name:'Jorj',last_name:'Smith',age:50 ,address:'Yashnobod',salary:10000},
    {id:3,first_name:'Billi',last_name:'Smith',age:32 ,address:'Yashnobod',salary:90000},
    {id:3,first_name:'Arley',last_name:'Smith',age:28 ,address:'Yashnobod',salary:130000}
    ]
  }
  filter=()=>{
    let filter_users = this.state.users.filter((item)=>item.age < 35)
    this.setState({
      users:filter_users
    })
  }
  render(){
    const {users} = this.state
    return(
      <div className="container">
        <div className="row mt-3">
          <div className="col-3">
            <button className="btn btn-info" onClick={this.filter}>Armiyaga qabul qilish</button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-8 offset-2">
            <table className="table table-borderd table-hover table-strippednp">
              <thead>
                <tr>
                  <th>T/R</th>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
               {
                users.map((item,index)=>{
                  return <tr>
                    <td>{index + 1}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.age}</td>
                    <td>{item.address}</td>
                    <td>{item.salary}</td>
                  </tr>
                })
               }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
