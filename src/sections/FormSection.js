import React, {useEffect, useRef, useState} from 'react';
import http from "../plugins/http";
import Buttons from "../components/Buttons";
import useStore from "../store/main";

const FormSection = () => {

    const {resetCurrentUserNr, setFormSuccess, formSuccess} = useStore(state => state);


    const [positions, setPositions] = useState([]);
    const [fileName, setFileName] = useState("");
    const [token, setToken] = useState()
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState()

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const imageRef = useRef();


    useEffect(() => {
        http.get(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
            .then(data => {
                setPositions(data.positions);
            })

        http.get(`https://frontend-test-assignment-api.abz.agency/api/v1/token`)
            .then(data => {
                console.log('token', data.token);
                setToken(data.token);
            })
    }, []);


    function UploadImage() {
        imageRef.current.click();
    }

    function ImageFileName(e) {
        const file = e.target.files[0];
        console.log(file);
        if (file) {
            setFileName(file.name);
        }
    }

    useEffect(() => {
        if (!nameRef.current.value || !emailRef.current.value || !phoneRef.current.value || !fileName || !selectedPosition){
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, [nameRef, emailRef, phoneRef, selectedPosition, fileName]);


    function SubmitForm() {
        if (disabled) return;

        const userInfo = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            position_id: selectedPosition,
            photo: imageRef.current.files[0]
        }

        console.log(emailRef.current.value)

        http.postToken(`https://frontend-test-assignment-api.abz.agency/api/v1/users`, userInfo, token)
            .then(data => {
                console.log(data)

                if (!data.success){
                    if (data.fails){
                        setError(data.fails)
                    } else if (data.message.includes('phone')){
                        const error = {
                            phone: data.message,
                            email: data.message
                        }
                        setError(error);
                    }
                    return
                }

                setPositions(data.positions);
                resetCurrentUserNr()
                setFormSuccess(true)
            })
    }

    return (
        <div className={`container min-h-screen mb-[100px] flex flex-col gap-[60px] items-center ${formSuccess ? 'hidden' : 'visible'}`}>
            <div className="w-full text-center mt-[50px]">
                <h1>Working with POST request</h1>
            </div>

            <div className="w-full flex justify-center">
                <form className="w-full md:w-[400px] flex flex-col">

                    <div className="w-full mb-[35px]">
                        <input
                            className={`text-[16px] placeholder:text-[16px] bg-transparent rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none ${error?.name ? 'border-2 border-red-600' : 'border border-gray-300'}`}
                            type="text"
                            placeholder="Your name"
                            ref={nameRef}/>
                        <p className={`pl-4 pt-1 text-xs text-red-600 ${error?.name ? 'visible' : 'invisible'}`} >{error?.name}</p>
                    </div>

                    <div className="w-full mb-[35px]">
                        <input
                            className={`text-[16px] placeholder:text-[16px] bg-transparent rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none ${error?.email ? 'border-2 border-red-600' : 'border border-gray-300'}`}
                            type="email"
                            placeholder="Email"
                            ref={emailRef}/>
                        <p className={`pl-4 pt-1 text-xs text-red-600 ${error?.email ? 'visible' : 'invisible'}`}>{error?.email}</p>
                    </div>

                    <div className="w-full mb-[20px]">
                        <input
                            className={`text-[16px] placeholder:text-[16px] bg-transparent rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none ${error?.phone ? 'border-2 border-red-600' : 'border border-gray-300'}`}
                            type="tel"
                            placeholder="Phone"
                            ref={phoneRef}/>
                        <p className="pl-4 pt-1 text-gray-400 text-xs">+38 (XXX) XXX - XX - XX</p>
                        <p className={`pl-4 pt-1 text-xs text-red-600 ${error?.phone ? 'visible' : 'invisible'}`}>{error?.phone}</p>
                    </div>

                    <div className="w-full flex flex-col gap-3 mb-[45px]">
                        <p>Select your position</p>

                        {positions?.map((position, i) => (
                            <label key={i} className="flex items-center cursor-pointer relative">
                                <input
                                    type="radio"
                                    name="position"
                                    value={position.id}
                                    className="peer hidden"
                                    onChange={() => setSelectedPosition(position.id)}
                                />
                                <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center peer-checked:border-cyan-500">
                                </div>
                                <div className="absolute top-2 left-1 w-2 h-2 rounded-full bg-cyan-500 opacity-0 peer-checked:opacity-100 transition-opacity duration-200"></div>

                                <span className="ms-2 text-[16px]">{position.name}</span>
                            </label>
                        ))}
                    </div>

                    <div className="w-full flex flex-col mb-[50px]">
                        <div className='w-full flex'>
                            <button className={`text-[16px] border border-black rounded-tl rounded-bl px-3 ${error?.photo ? 'border-2 border-red-600' : 'border border-gray-300'}`}
                                    onClick={UploadImage}
                                    type="button"
                            >Upload
                            </button>
                            <input
                                className={`text-[16px] placeholder:text-[16px] cursor-default peer bg-transparent rounded-tr rounded-br w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none ${error?.photo ? 'border-2 border-red-600' : 'border-t border-r border-b border-gray-300'}}`}
                                type="text"
                                readOnly
                                value={fileName}
                                placeholder="Upload your photo"/>
                            <input
                                ref={imageRef}
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={ImageFileName}
                            />
                        </div>
                        <p className={`pl-4 pt-1 text-xs text-red-600 ${error?.photo ? 'visible' : 'invisible'}`}>{error?.photo}</p>
                    </div>

                    <div className="w-full flex justify-center">
                        <Buttons value={'Sign up'} disable={disabled} click={SubmitForm}/>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default FormSection;