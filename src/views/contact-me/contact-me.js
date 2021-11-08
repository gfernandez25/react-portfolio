import './contact-me.scss';
import {Component} from "react";

const regExp = RegExp(
    /^[\w0-9]+@[\w0-9]+\.[\w]+$/
)

function formValid({isError, ...rest}) {
    let isValid = false;

    Object.values(isError).forEach(val => {
        isValid = val.length <= 0
    });

    Object.values(rest).forEach(val => {
        isValid = val !== null
    });

    return isValid;
};

export default class ViewContactMe extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            message: '',
            isError: {
                name: '',
                email: '',
                message: ''
            }
        }
    }


    onSubmit = e => {
        e.preventDefault();
        console.log(formValid(this.state) ? this.state : "Form is invalid!")
    };


    formValChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let isError = {...this.state.isError};

        switch (name) {
            case "name":
                isError.name =
                    value.length < 4 ? "Atleast 4 characaters required" : "";
                break;
            case "email":
                isError.email = regExp.test(value)
                    ? ""
                    : "Email address is invalid";
                break;
            case "message":
                isError.message =
                    value.length <= 0 ? "message is too short " : "";
                break;
            default:
                break;
        }

        this.setState({
            isError,
            [name]: value
        })
    };

    render() {
        const {isError} = this.state;

        return (
            <form onSubmit={this.onSubmit} noValidate>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="name"
                        onBlur={this.formValChange}
                    />
                    {isError.name.length > 0 && (
                        <span className="invalid-feedback">{isError.name}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="email"
                        onBlur={this.formValChange}
                    />
                    {isError.email.length > 0 && (
                        <span className="invalid-feedback">{isError.email}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>message</label>
                    <textarea
                        className={isError.message.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="message"
                        onBlur={this.formValChange}
                    />

                    {isError.message.length > 0 && (
                        <span className="invalid-feedback">{isError.message}</span>
                    )}
                </div>

                <button type="submit" className="submit">Submit</button>
            </form>
        );
    }
}
