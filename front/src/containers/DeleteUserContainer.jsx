import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import DeleteUser from "../components/DeleteUser";
import { searchTasks, updateTaskRecruit } from "../redux/actions/tasks"
import { fetchUsers, changeTaskOwner, deleteUser } from "../redux/actions/users"


class DeleteUserContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            newResponsable: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClickDelete = this.handleClickDelete.bind(this)
    }

    componentDidMount() {
        const userId = this.props.match.params.userId
        this.props.searchTasks(userId)
        this.props.fetchUsers()
    }

    handleClick(taskId) {
        if (this.state.newResponsable) {
            let idUser;
            let oldUser = this.props.match.params.userId
            this.props.userOptions.map((user) => (this.state.newResponsable.includes(user.name && user.lastName)) ? (idUser = user.id) : null)
            let obj = { taskId: taskId, userId: idUser, oldUserId: oldUser }
            this.props.updateTaskRecruit(obj)
            this.setState({ newResponsable: "" })
        } else {
            alert("You must change the responsable before update")
        }
    }

    handleClickDelete() {
        const userId = this.props.match.params.userId
        const newUserId = this.props.user.id
        let obj = { userId: userId, newUserId: newUserId, taskState: "finished" }
        this.props.changeTaskOwner(obj) // en realidad cambia el usuario que dio de alta al new hire
        this.props.updateTaskRecruit(obj)
        this.props.deleteUser(userId)
            .then(() => this.props.history.push("/users"))
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <DeleteUser userId={this.props.match.params.userId} tasks={this.props.tasks} userOptions={this.props.userOptions} handleClickDelete={this.handleClickDelete} handleChange={this.handleChange} handleClick={this.handleClick} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userOptions: state.user.users,
        tasks: state.task.tasks,
        user: state.login.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        searchTasks: (userId) => dispatch(searchTasks(userId)),
        updateTaskRecruit: (obj) => dispatch(updateTaskRecruit(obj)),
        deleteUser: (id) => dispatch(deleteUser(id)),
        changeTaskOwner: (obj) => dispatch(changeTaskOwner(obj))
    }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeleteUserContainer))