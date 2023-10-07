import React, { useRef, useState } from "react";
import classes from "./in.module.css";
import { useNavigate } from "react-router-dom";

const In = (props) => {
    const password = useRef();
    const passwordConfirm = useRef();
    const userName = useRef();
    const [spano, setspano] = useState(false);
    const [emp, setemp] = useState(true);
    let history2 = useNavigate();

    const Handleachange = () => {
        if (password.current.value === passwordConfirm.current.value) {
            setspano(false);
        } else {
            setspano(true);
        }
    };

    const emptychange = () => {
        if (userName.current.value === "") {
            setemp(false);
        } else {
            setemp(true);
        }
    };

    const re_enter = (
        <>
            <label htmlFor="reenter">Re-Enter Password</label>
            <input
                type="password"
                id="reenter"
                className={classes.control}
                ref={passwordConfirm}
                onChange={Handleachange}
            />
            <span>{spano ? "Does not match" : ""}</span>
        </>
    );

    let history = useNavigate();

    const interchangePage = () => {
        history(props.linking);
    };

    let history1 = useNavigate();

    const SignUp = () => {
        // Save the user data to a database or state for future use.
        // Example: You can send it to a backend server or use local storage.
        // For now, I'll use local storage as an example:
        localStorage.setItem("UserName", userName.current.value);
        localStorage.setItem("Password", passwordConfirm.current.value);

        history1(props.linking1);
    };

    const SignIn = () => {
        const storedUserName = localStorage.getItem("UserName");
        const storedPassword = localStorage.getItem("Password");
        console.log("-------------------------------------------");
        console.log(storedUserName, storedPassword);
        console.log("-------------------------------------------");
        console.log(password.current.value, userName.current.value);

        if (userName.current.value === storedUserName && password.current.value === storedPassword) {
            // setcondition(true);
            history2("/Home");
        } else {
            alert("Username or password does not match");
            // setcondition(false);
        }

        // if (condition) {
        // }
    };

    return (
        <div className={classes.form}>
            <form>
                <h1>{props.TITLE}</h1>
                <div className={classes.imagecontainer}>
                    <img alt={props.TITLE} src={props.image} className={classes.avatar} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        className={classes.control}
                        onChange={emptychange}
                        ref={userName}
                    />
                    <span>{emp ? "" : "Must not be empty"}</span>

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className={classes.control}
                        ref={password}
                    />
                    {props.linking === "/" ? re_enter : ""}
                </div>
                <div className={classes.actions}>
                    <button onClick={props.linking === "/" ? SignUp : SignIn}>
                        {props.TITLE}
                    </button>
                </div>
            </form>
            <div className={classes.actions}>
                <button onClick={interchangePage}>{props.button}</button>
            </div>
        </div>
    );
};

export default In;
