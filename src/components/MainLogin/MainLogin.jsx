import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import ErrorToast from "../ErrorToast/ErrorToast.jsx";
import {useNavigate} from "react-router-dom";

const MainLogin = () => {

    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isError, setError] = useState(false);
    const [isAuthenticated, setAuthenticated] = useState(localStorage.getItem("isAuthenticated") || false);
    const navigate = useNavigate();
    const users = [ {
        email: "gokul@gmail.com",
        password: "password",
        name: "Gokul Ramakrishnan",
        provisionedApps: [
            {
                name: "Notion",
                url: "https://www.notion.so",
                logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
            },
            {
                name: "GMail",
                url: "https://mail.google.com",
                logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
            },
            {
                name: "Calendar",
                url: "https://calendar.google.com",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg"
            },
            {
                name: "ADP",
                url: "https://www.adp.com",
                logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Automatic_Data_Processing_%28logo%29.svg"
            },
            {
                name: "Workday",
                url: "https://www.workday.com",
                logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Workday_Logo.png"
            }
        ]
    },
        {
            email: "test@gmail.com",
            name: "Test User",
            password: "password",
            provisionedApps: [
                {
                    name: "GMail",
                    url: "https://mail.google.com",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
                },
                {
                    name: "Calendar",
                    url: "https://calendar.google.com",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg"
                }
            ]
        }

    ]

    const topPaddingStyle = {
        paddingTop: "25%"
    };

    const onSubmitButtonClicked = (event) => {
        event.preventDefault();
        const user = users.find(user => user.email === email && user.password === password);

        console.log(user);

        if (user) {
            setError(false);
            setAuthenticated(true);
            localStorage.setItem("isAuthenticated", true);
            navigate("/dashboard", { state: user});
        } else {
            setError(true);
        }
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onToastClose = () => {
        setError(false);
    }

    return (
        <>
            <ErrorToast showToast={isError} onCloseClicked={onToastClose}/>
            <div className={"container"} style={topPaddingStyle}>
                <h1>GOKTA</h1>
                &nbsp;
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={onEmailChange} value={email}/>
                        <Form.Text className="text-muted">
                            We&apos;ll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={onPasswordChange} value={password}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={onSubmitButtonClicked}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>

    )
};

export default MainLogin;