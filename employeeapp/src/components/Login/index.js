import React, { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { loginAction } from "../../redux/actions/authActions";
import { getUserSelector } from "../../redux/selectors/authSelector";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm({ mode: "all" });
    const user = useSelector(getUserSelector);
    const isLogined = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogined?.isLogin) {
            navigate("/");
        }
        if (user?.error) {
            setError("email", { type: "manual", message: user?.error });
        }
    }, [navigate, isLogined]);

    const onSubmit = (data) => {
        dispatch(loginAction(data));
    };
    // console.log(formState.errors);

    // if (user) {
    //     return <Navigate to="/" />;
    // }

    return (
        <Container className="my-5">
            <Toaster />
            <Form
                className="w-50 m-auto border"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className="fs-1 text-center py-3">ĐĂNG NHẬP</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        {...register("email")}
                        required
                    />
                    {errors.email && (
                        <p className="error">{errors.email.message}</p>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        autoComplete="password"
                        {...register("password")}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </Container>
    );
}

export default Login;
