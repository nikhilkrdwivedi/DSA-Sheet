import React, { useEffect, useState } from 'react'

import Input from '../../components/Input'
import loginImg from '../../assets/girl-laptop.png'
import { MdOutlineEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from '../../components/Button'
import { BiLogInCircle } from "react-icons/bi";
import Container from '../../components/Container';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { TbPasswordUser } from "react-icons/tb";
import { ENVIRONMENT_CONFIGS } from '../../configurations/environment';
import { useLoader } from '../../contexts/LoaderContext';

export default function Login() {
    const LOGIN_BASE_STATE = { email: '', password: '', errors: { email: '', password: '' }, showPassword: false }
    const [form, setForm] = useState(LOGIN_BASE_STATE)
    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const {loader, setLoader }=   useLoader();
    const handleLogin = async () => {
    try{    const errorMap = {};
        console.log(form)
        if (!form.email) {
            errorMap.email = "Email is required!";
        }
        if (!form.password) {
            errorMap.password = "Password is required!";
        }

        console.log(errorMap)
        if (Object.keys(errorMap).length) {
            setForm((state) => ({
                ...state,
                errors: {
                    ...errorMap
                }
            }));
            return;
        }
        setLoader({...loader, isLoading: true});
        await login(form);
        navigate('/', { replace: true });
      }catch(error){
        console.error(error)
      }finally{
        setLoader({...loader, isLoading: false});
      }
    };

    const handleFormChange = (event, key) => {
        const { target: { value } } = event;
        console.log({ value, key });
        if (!value) return;
        setForm((state) => ({
            ...state,
            [key]: value
        }));
    }

    const handleGuestCredential = (key) => {
        console.log(ENVIRONMENT_CONFIGS.GUEST_CREDENTIALS)
        setForm((state) => ({
            ...state,
            ...ENVIRONMENT_CONFIGS.GUEST_CREDENTIALS,
        }));
    }
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/', { replace: true });
        }
    }, [isAuthenticated, navigate]);
    console.log({ form })
    return (
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 rounded-lg shadow-lg w-full md:w-auto m-4'>
                <div className='flex flex-col justify-center p-4'>
                    <p className='text-md md:text-lg font-medium text-pink-400'>Welcome back 👋</p>
                    <p className='text-lg md:text-xl font-medium text-pink-400 mt-2'>Login here</p>
                    <Input
                        type="email"
                        label={"Email*"}
                        placeholder={"Enter email"}
                        value={form.email}
                        errorMessage={form.errors.email}
                        onChange={(event) => handleFormChange(event, 'email')}
                        leftIcon={<MdOutlineEmail className='w-6 h-6 text-gray-400' />}
                    />
                    <Input
                        type={form.showPassword ? "text" : "password"}
                        label={"Password*"}
                        placeholder={"Enter password"}
                        value={form.password}
                        errorMessage={form.errors.password}
                        onChange={(event) => handleFormChange(event, 'password')}
                        rightIconClick={() => setForm({ ...form, showPassword: !form.showPassword })}
                        leftIcon={<RiLockPasswordLine className='w-6 h-6 text-gray-400 mx-2' />}
                        rightIcon={<MdPassword className={`w-6 h-6  ${form.showPassword ? 'text-green-500' : 'text-gray-400'}`} />} />
                    <Button
                        className="w-full p-2 rounded-full bg-pink-500 hover:bg-pink-600 mt-4"
                        labelClassName="text-pink-100 text-md"
                        label={'login'}
                        rightIcon={
                            <BiLogInCircle
                                className='w-6 h-6 text-pink-100' />}
                        onClick={handleLogin}
                    />
                    <div class="inline-flex items-center justify-center w-full">
                        <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        <span class="absolute px-3 font-medium bg-gray-50  text-gray-500 rounded-full">or</span>
                    </div>
                    <Button
                        className="w-full p-2 rounded-full bg-pink-600 hover:bg-pink-500 "
                        labelClassName="text-pink-100 text-md"
                        label={'Use Guest Credentials'}
                        leftIcon={
                            <TbPasswordUser
                                className='w-6 h-6 text-pink-100' />}
                        onClick={() => handleGuestCredential()}
                    />
                </div>
                <div className='hidden md:block'>
                    <img src={loginImg} alt='login' className='h-/5' />
                </div>
            </div>
        </Container>
    )
}
