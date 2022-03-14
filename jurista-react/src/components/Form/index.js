import React, { Component } from 'react'
import Joi from 'joi-browser'
import { toast } from 'react-toastify';
import './style.scss';
import { withTranslation } from 'react-i18next';
class Form extends Component {
    state = {
        name: '',
        phone: '',
        email: '',
        address: '',
        description: '',
        error: {}
    }

    schema = {
        email: Joi.string().email({ minDomainAtoms: 2 }).required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.email":
                        err.message = 'email mast be A Valid Email';
                        break;
                    default:
                        err.message = 'email can not be empity';
                        break;
                }
            });
            return errors;
        }),
        phone: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    default:
                        err.message = 'phone can not be Empity';
                        break;
                }
            });
            return errors;
        }),
        name: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    default:
                        err.message = 'name can not be Empity';
                        break;
                }
            });
            return errors;
        }),
        description: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    default:
                        err.message = 'description can not be Empity';
                        break;
                }
            });
            return errors;
        }),
        address: Joi.string(),
    }
    changeHandler = event => {
        const error = { ...this.state.error };
        const errorMassage = this.validationProperty(event);
        if (errorMassage) {
            error[event.target.name] = errorMassage;
        } else {
            delete error[event.target.name];
        }
        this.setState({
            [event.target.name]: event.target.value,
            error
        })
    };
    handleChange = (value) => {
        this.setState({
            country: value
        })
    };

    validationProperty = event => {
        const Obj = { [event.target.name]: event.target.value };
        const schema = { [event.target.name]: this.schema[event.target.name] }
        const { error } = Joi.validate(Obj, schema);
        return error ? error.details[0].message : null
    };

    validate = () => {
        const options = { abortEarly: false }
        const form = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            description: this.state.description,
        }
        const { error } = Joi.validate(form, this.schema, options)
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message
        return errors;
    };

    submitHandler = event => {
        event.preventDefault()
        const error = this.validate();
        if (error) {
            this.setState({
                error: error || {}
            })
        } else {
            this.setState({
                name: '',
                phone: '',
                email: '',
                address: '',
                description: '',
            })
            console.log(
                'Name' + '=' + this.state.name,
                'Phone' + '=' + this.state.phone,
                'Email' + '=' + this.state.email,
                'Address' + '=' + this.state.address,
                'Description' + '=' + this.state.description,
            )
            toast.success('Please check Consol log')
        }
    }

    render() {
        const { t } = this.props;
        const options = [
            { level: t("lawtype-family"), value: 'family law' },
            { level: t("lawtype-criminal"), value: 'criminal law' },
            { level: t("lawtype-business"), value: 'business law' },
            { level: t("lawtype-personalinjury"), value: 'personal injury' },
            { level: t("lawtype-education"), value: 'education law' },
            { level: t("lawtype-drugscrime"), value: 'drugs crime' },
        ]
        const cetagoryMenu = [
            { level: t("lawtype-family"), route: "case-stadies-details" },
            { level: t("lawtype-criminal"), route: "case-stadies-details" },
            { level: t("lawtype-business"), route: "case-stadies-details" },
            { level: t("lawtype-personalinjury"), route: "case-stadies-details" },
            { level: t("lawtype-education"), route: "case-stadies-details" },
            { name: t("lawtype-drugscrime"), route: "case-stadies-details" },
          ];

        return (
            <form onSubmit={this.submitHandler} className='contactForm'>
                <div className="row">
                    <div className="col-sm-6 col-12">
                        <div className="formInput">
                            <input
                                placeholder={t("name")}
                                value={this.state.name}
                                name="name"
                                onChange={this.changeHandler}
                                className="form-control"
                                type="text" />
                            {this.state.error.name && <p>{this.state.error.name}</p>}
                        </div>

                    </div>
                    <div className="col-sm-6 col-12">
                        <div className="formInput">
                            <input
                                placeholder={t("phone")}
                                value={this.state.phone}
                                name="phone"
                                onChange={this.changeHandler}
                                className="form-control"
                                type="phone" />
                            {this.state.error.phone && <p>{this.state.error.phone}</p>}
                        </div>
                    </div>
                    <div className="col-sm-6 col-12">
                        <div className="formInput">
                            <input
                                placeholder="Email"
                                value={this.state.email}
                                name="email"
                                onChange={this.changeHandler}
                                className="form-control"
                                type="email" />
                            {this.state.error.email && <p>{this.state.error.email}</p>}
                        </div>
                    </div>
                    <div className="col-sm-6 col-12">
                        <div className="formInput">
                            {this.props.addressInfo ? (
                                <div className="formInput">
                                    <input
                                        placeholder={t("address")}
                                        value={this.state.address}
                                        name="address"
                                        onChange={this.changeHandler}
                                        className="form-control"
                                        type="address" />
                                </div>
                            ) : (
                                    <select
                                        value={this.state.address}
                                        className="form-control"
                                        onChange={this.changeHandler}
                                        name="address">
                                        {options.map(option => (
                                            <option
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.level}
                                            </option>
                                        ))}
                                    </select>
                                )}

                        </div>
                    </div>
                    <div className="col-12">
                        <div className="formInput">
                            <textarea
                                className="form-control"
                                value={this.state.description}
                                onChange={this.changeHandler}
                                placeholder={t("case_description")}
                                name="description" />
                            {this.state.error.description && <p>{this.state.error.description}</p>}
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit">{t("send")}</button>
                    </div>
                </div>
            </form>
        )
    }
}
export default withTranslation()(Form)