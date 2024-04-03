import React, {Component} from 'react';

class CHanjbalans extends Component {

    state = {
     students:[],
    select:-1

    }
    Addsutdent=(event)=>{
         event.preventDefault();
           if(event.target.fortsName.value!=="" && event.target.lastName.value!==""&&
               event.target.age.value!=="" && event.target.password.value!==""
           ){
            let nwestudent={
                fiorstname:event.target.fortsName.value,
                lastname:event.target.lastName.value,
                age:event.target.age.value,
                passwords:event.target.password.value
            };
            if(this.state.select>=0){
             this.state.students[this.state.select]=nwestudent;
            }
            else {
                this.state.students.push(nwestudent);
            }


            this.setState({
                students:this.state.students,
                select:-1
            })
               this.form.reset();
           }
           else {
               alert("To'liq To'ldir")
           }
    }

    deletstudetn=(index)=>{
        this.state.students.splice(index,1);
        this.setState({
            students:this.state.students
        })
    };

    editstudent=(editindex)=>{
        this.form.fortsName.value=this.state.students[editindex].fiorstname
        this.form.lastName.value=this.state.students[editindex].lastName
        this.form.age.value=this.state.students[editindex].age
        this.form.password.value=this.state.students[editindex].password
        this.setState({
         select:editindex
     })
    }


    render() {
        const {students}=this.state

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                          <div className="card">
                              <div className="card-header">
                                  <h1>Registratsiya</h1>
                              </div>
                              <div className="card-body">
                                  <form  ref={(c)=>this.form=c} onSubmit={this.Addsutdent}>
                                  <input  className="form-control" name="fortsName" type="text" placeholder="FortsName"/>
                                  <input  className="form-control" name="lastName" type="text" placeholder="LastName"/>
                                  <input  className="form-control" name="age" type="number" placeholder="Yoshi"/>
                                  <input  className="form-control" name="password" type="password" placeholder="password"/>
                                      <button type="submit" className="btn btn-primary">Add student</button>
                                  </form>
                              </div>


                          </div>
                        </div>
                        <div className="col-md-8">

                            <table className="table table-bordered">
                                <thead>
                                <tr>

                                    <th>ForstName</th>
                                    <th>LastName</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Edit</th>
                                    <th>del</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    students.map((item,index)=>(
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{item.fiorstname}</td>
                                            <td>{item.lastname}</td>
                                            <td>{item.age}</td>
                                            <td>{item.passwords}</td>
                                            <td>
                                                <button onClick={()=>this.editstudent(index)} className="btn btn-success">Add</button>
                                                <button onClick={()=>this.deletstudetn(index)} className="btn btn-danger">Del</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default CHanjbalans;