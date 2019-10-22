import React,{Component} from 'react';
import {HashRouter,Switch,Redirect,Route,NavLink}from 'react-router-dom'
import Login from './components/login'
import Admin from "./components/admin"
import Home from './components/home'
import User from './components/user'
class RootRouter extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Redirect exact from="/" to="/login"></Redirect>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" render={()=>{
                        return(
                            <Admin>
                                <Route path='/admin/home' component={Home}></Route>
                                <Route path='/admin/user'component={User}></Route>
                            </Admin>
                        )
                    }

                    }></Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default RootRouter