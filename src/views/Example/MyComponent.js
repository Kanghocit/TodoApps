import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponents from './AddComponent';

class MyComponent extends React.Component {

    state = {

        arrJobs: [
            { id: 'job1', title: 'Developers', salary: '500' },
            { id: 'job2', title: 'Testers', salary: '400' },
            { id: 'job3', title: 'Project Managers', salary: '1500' },
        ]
    }
    addNewJobs = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs : currentJob
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log('>>> run didUpdate: ','prevProp: '+ prevProps, 'prevState: '+ this.state)
    }
    componentDidMount(){
        console.log('>>> run component didmount ')
    }



    render() {

        return (
            <>
                <AddComponents 
                    addNewJobs = {this.addNewJobs}
                />

                <ChildComponent

                    arrJobs={this.state.arrJobs}
                    deleteJob = {this.deleteJob}
                />

            </>
        )
    }
}

export default MyComponent;