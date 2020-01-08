// ES6
import React, { Component } from "react";
import { Datatable } from "@o2xp/react-datatable";
import {
    FreeBreakfast as CoffeeIcon,
    CallSplit as CallSplitIcon
} from "@material-ui/icons";
import { chunk } from "lodash";

// Advanced Example
const options = {
    title: "My super datatable",
    dimensions: {
        datatable: {
            width: "100%",
            height: "80%"
        },
        row: {
            height: "60px"
        }
    },
    keyColumn: "id",
    font: "Arial",
    data: {
        columns: [
            {
                id: "id",
                label: "id",
                colSize: "150px",
                editable: false
            },
            {
                id: "name",
                label: "name",
                colSize: "100px",
                editable: true,
                dataType: "text",
                inputType: "input"
            },
            {
                id: "age",
                label: "age",
                colSize: "80px",
                editable: true,
                dataType: "number",
                valueVerification: val => {
                    let error = val > 100 ? true : false;
                    let message = val > 100 ? "Value is too big" : "";
                    return {
                        error: error,
                        message: message
                    };
                }
            },
            {
                id: "adult",
                label: "adult",
                colSize: "50px",
                editable: true,
                dataType: "boolean",
                inputType: "checkbox"
            },
            {
                id: "birthDate",
                label: "birth date",
                colSize: "120px",
                editable: true,
                dataType: "date",
                inputType: "datePicker",
                dateFormat: "YYYY-MM-DDTHH:MM:ss"
            },
            {
                id: "color",
                label: "color",
                colSize: "100px",
                editable: true,
                inputType: "select",
                values: ["green", "blue", "brown"]
            },
            {
                id: "creditCard",
                label: "Credit Card",
                colSize: "150px",
                editable: true,
                inputType: "input",
                mask: [
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    " ",
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    " ",
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    " ",
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/
                ]
            }
        ],
        rows: [
            {
                id: "50cf",
                age: 28,
                name: "Kerr Mayo",
                adult: true,
                birthDate: "1972-09-04T11:09:59",
                color: "green",
                creditCard: "4478 7842 2486 8743"
            },
            {
                id: "209",
                age: 34,
                name: "Freda Bowman",
                adult: true,
                birthDate: "1988-03-14T09:03:19",
                color: "blue",
                creditCard: "7845 5789 4236 7861"
            },
            {
                id: "2dd81ef",
                age: 14,
                name: "Becky Lawrence",
                adult: false,
                birthDate: "1969-02-10T04:02:44",
                color: "green",
                creditCard: ""
            },
            {
                id: "2dd81ef",
                age: 14,
                name: "Becky Lawrence",
                adult: false,
                birthDate: "1969-02-10T04:02:44",
                color: "green",
                creditCard: ""
            }
            ,
            {
                id: "2dd81ef",
                age: 14,
                name: "Becky Lawrence",
                adult: false,
                birthDate: "1969-02-10T04:02:44",
                color: "green",
                creditCard: ""
            }
            ,
            {
                id: "2dd81ef",
                age: 14,
                name: "Becky Lawrence",
                adult: false,
                birthDate: "1969-02-10T04:02:44",
                color: "green",
                creditCard: ""
            }
            ,
            {
                id: "2dd81ef",
                age: 14,
                name: "Becky Lawrence",
                adult: false,
                birthDate: "1969-02-10T04:02:44",
                color: "green",
                creditCard: ""
            }
            ,
            {
                id: "2dd81ef",
                age: 14,
                name: "Becky Lawrence",
                adult: false,
                birthDate: "1969-02-10T04:02:44",
                color: "green",
                creditCard: ""
            }
            ,
            {
                id: "2dd81ef",
                age: 14,
                name: "Becky Lawrence",
                adult: false,
                birthDate: "1969-02-10T04:02:44",
                color: "green",
                creditCard: ""
            },
            {
                id: "2dd81ef",
                age: 14,
                name: "Becky Lawrence",
                adult: false,
                birthDate: "1969-02-10T04:02:44",
                color: "green",
                creditCard: ""
            }
            ,
            {
                id: "2dd81ef",
                age: 14,
                name: "Becky Lawrence",
                adult: false,
                birthDate: "1969-02-10T04:02:44",
                color: "green",
                creditCard: ""
            }
            ,
            {
                id: "2dd81ef",
                age: 14,
                name: "Becky Lawrence",
                adult: false,
                birthDate: "1969-02-10T04:02:44",
                color: "green",
                creditCard: ""
            }




        ]
    },
    features: {
        canEdit: true,
        canDelete: true,
        canPrint: true,
        canDownload: true,
        canSearch: true,
        canRefreshRows: true,
        canOrderColumns: true,
        canSelectRow: true,
        canSaveUserConfiguration: true,
        userConfiguration: {
            columnsOrder: ["id", "name", "age", "birthDate", "creditCard", "color"],
            copyToClipboard: true
        },
        rowsPerPage: {
            available: [10, 25, 50, 100],
            selected: 50
        },
        additionalIcons: [
            {
                title: "Coffee",
                icon: <CoffeeIcon color="primary" />,
                onClick: () => alert("Coffee Time!")
            }
        ],
        selectionIcons: [
            {
                title: "Selected Rows",
                icon: <CallSplitIcon color="primary" />,
                onClick: rows => console.log(rows)
            }
        ]
    }
};

class FixtureMonitor extends Component {
    actionsRow = ({ type, payload }) => {
        console.log(type);
        console.log(payload);
    };

    refreshRows = () => {
        const { rows } = options.data;
        const randomRows = Math.floor(Math.random() * rows.length) + 1;
        const randomTime = Math.floor(Math.random() * 4000) + 1000;
        const randomResolve = Math.floor(Math.random() * 10) + 1;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (randomResolve > 3) {
                    resolve(chunk(rows, randomRows)[0]);
                }
                reject(new Error("err"));
            }, randomTime);
        });
    };

    render() {
        return (
            <Datatable
                options={options}
                refreshRows={this.refreshRows}
                actions={this.actionsRow}
            />
        );
    }
}

export default FixtureMonitor;

// import {Datatable} from "@o2xp/react-datatable";
// import React, { Component } from "react";
// import axios from "axios";
//
// // Basic Example
//
//
//
// class FixtureMonitor extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             accounts: [],
//             options  : {
//                 keyColumn: 'id',
//                 data: {
//                     columns: [
//                         {
//                             id: "id",
//                             label: "id",
//                             colSize: "20px"
//                         },
//                         {
//                             id: "username",
//                             label: "username",
//                             colSize: "50px"
//                         },
//                         {
//                             id: "email",
//                             label: "email",
//                             colSize: "50px"
//                         },
//                         {
//                             id: "first_name",
//                             label: "first_name",
//                             colSize: "50px"
//                         },
//                         {
//                             id: "last_name",
//                             label: "last_name",
//                             colSize: "50px"
//                         },
//                         {
//                             id: "is_active",
//                             label: "is_active",
//                             colSize: "50px"
//                         },
//                         {
//                             id: "date_joined",
//                             label: "date_joined",
//                             colSize: "50px"
//                         },
//                         {
//                             id: "last_login",
//                             label: "last_login",
//                             colSize: "50px"
//                         },
//
//                     ],
//                     rows: [],
//                 }
//             }
//         }
//     }
//     componentDidMount() {
//         console.log(this.state.options);
//
//         axios
//             .get('http://localhost:8000/auth/users/',
//                 { headers: {
//                         "Authorization" : `Bearer ${localStorage.getItem('access')}`
//                     }
//                 })
//             .then(res => res.data)
//             .then(data => {
//                 this.state.accounts = data.results
//                 console.log(this.state.accounts);
//                 this.state.options.data.rows = this.state.accounts;
//                 this.setState({
//                     options: this.state.options,
//                 })
//                 console.log(this.state.options);
//             })
//             .catch(error => console.log(error.response));
//     }
//     render() {
//         return (<div className="container-fluid">
//
//                 <Datatable options={this.state.options} />
//             </div>
//
//             )
//     }
// }
//
// export default FixtureMonitor;
