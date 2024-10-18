"use client";

import Image from "next/image";
import FormInput from "@/app/components/FormInput";
import Link from "next/link";
import { useState } from "react";

import { useTranslation } from '@/app/i18n/client'

export default function SignUp({ params: { lng } }) {

    const { t } = useTranslation(lng)

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState("");

    const validateForm = (e)=>{
        e.preventDefault();
        let errors = {};

        if(!firstName){
            errors.firstName = "First name is required."
        }else if(firstName.length < 2){
            errors.firstName = "First name must be at least 2 character."
        }
        if(!lastName){
            errors.lastName = "Last name is required."
        }else if(lastName.length < 2){
            errors.lastName = "Last name must be at least 2 character."
        }
        if(!email){
            errors.email = "Email is required."
        }else if(!/\S+@\S+\.\S+/.test(email)){
            errors.email = "Email is invalid."
        }


        setErrors(errors);
    }


    return (
        <div className="registration_wrapper flex items-center justify-center min-h-[100vh]">
            <div className="registration_inner w-full py-24">
              <div className="registration_container mx-auto px-4 max-w-90">
                  <div className="grid grid-cols-5">
                    <div className="img_wrapper col-start-1 col-end-4 relative">
                        <Link href={`/${lng}`} className="absolute [.english_&]:left-10 [.arabic_&]:right-10 top-8"><Image src="/sign-in-logo.png" alt="logo" className="h-auto" height={152} width={176} /></Link>
                        <Image src="/login-img.jpg" alt="register image" className="h-auto w-full" height={500} width={500} />
                    </div>
                    <div className="registration_card bg-white rounded-4xl shadow-top py-16 col-start-4 col-end-6 self-center [.english_&]:-translate-x-1/4 [.arabic_&]:translate-x-1/4 w-[calc(100%+33%)]">
                      <div className={`registration_card_inner mx-auto`}>
                        <header className="mb-5">
                          <h1 className="text-theme-blue text-40 font-semibold">Sign Up</h1>
                          <p className="text-base">Please fill the below fields</p>
                        </header>
                        <form>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="from_group mb-5">
                                    <label className="formLabel mb-2.5 block">{`First Name`}</label>
                                    <FormInput type="text" placeholder="Enter your first name" className={errors.firstName ? "border-red-500" : ""} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                    {errors.firstName && <p className="mt-1 text-red-500">{errors.firstName}</p>}
                                </div>
                                <div className="from_group mb-5">
                                    <label className="formLabel mb-2.5 block">{`First Name`}</label>
                                    <FormInput type="text" placeholder="Enter your last name" className={errors.lastName ? "border-red-500" : ""} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    {errors.lastName && <p className="mt-1 text-red-500">{errors.lastName}</p>}
                                </div>
                            </div>    
                            <div className="from_group mb-5">
                                <label className="formLabel mb-2.5 block">{`Email`}</label>
                                <FormInput type="email" placeholder="Enter your email" className={errors.email ? "border-red-500" : ""} value={email} onChange={(e)=>setEmail(e.target.value)} />
                                {errors.email && <p className="mt-1 text-red-500">{errors.email}</p>}                                    
                            </div>
                            <div className="from_group mb-5">
                                <label className="formLabel mb-2.5 block">{`Password`}</label>
                                <div className="field_wrap relative">
                                    <FormInput type="password" placeholder="*****************" />
                                </div>
                            </div>
                            <div className="from_group mb-5 flex items-center justify-end mt-7">
                            <button type="submit" className="bg-primary-300 text-white rounded p-4 min-w-[142px]" onClick={validateForm}>SIGN UP</button>
                            </div>
                            <div className="forgot_password text-right mt-9">
                            <p className="text-base">Already have an account ?  <Link href={`/${lng}/sign-in`} className="text-[#C40000]">Sign in</Link></p>
                            </div>
                        </form>    
                      </div>                        
                    </div>
                  </div>
              </div>
            </div>
        </div>
    );
  }
  