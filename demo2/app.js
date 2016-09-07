import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super()
        this.update=this.update.bind(this)
        this.state={
            input:'/*添加jsx*/',
            output:'',
            err:'/错误提醒/'
        }
    }
    update(e){
        let code=e.target.value;
       try{
           this.setState({output:babel.transform(code,{
               stage:0,
               loose:'all',

           }).code ,err:''
          })
       }catch(e){
           this.setState({err:e.message})
       }
    }
    render() {
        return (
            <div>
                <header>{this.state.err}
                </header>
                <div className="container">
                    <textarea onChange={this.update} defaultValue={this.state.input}></textarea>
                    <pre>
                        {this.state.output}
                    </pre>
                </div>
            </div>
        );
    }
}

export default App
