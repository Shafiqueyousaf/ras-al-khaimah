"use client";

import Image from "next/image";
import FormInput from "@/app/components/FormInput";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";

import { useTranslation } from '@/app/i18n/client'


export default function SignIn({ params: { lng } }) {

  const { t } = useTranslation(lng)

  const [password, setPassword] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const showPasswordHandler = ()=>{
    setPassword(!password);
  }
  
  const emailHandler = (e) =>{
    setUserEmail(e.target.value);
  }

  const passwordHandler = (e) =>{
    setUserPassword(e.target.value);
  }

  const formSubmitHandler = (e)=>{
    e.preventDefault();
    
    let errors = {};
    if(!userEmail){
      errors.userEmail = t("sign-in.email-error-message");
    }else if (!/\S+@\S+\.\S+/.test(userEmail)) {
      errors.userEmail = t("sign-in.email-is-invalid");
    }

    if (!userPassword) {
        errors.userPassword = t("sign-in.password-is-required");
    } else if (userPassword.length < 6) {
        errors.userPassword = t("sign-in.password-must-6-characters");
    }
    else if (userPassword !== "1q2w3e4r5t"){
      errors.userPassword = t("sign-in.your-password-wrong");
    }

    setErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      router.push(`/${lng}`);  
    }

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
                          <h1 className="text-theme-blue text-40 font-semibold">{t("sign-in.heading")}</h1>
                          <p className="text-base">{t("sign-in.sub-heading")}</p>
                        </header>
                        <form>
                          <div className="from_group mb-5">
                            <label className="formLabel mb-2.5 block">{t("sign-in.email")}</label>
                            <FormInput type="email" placeholder={t("sign-in.enter-email")} className={errors.userEmail ? "border-red-500" : ""} onChange={emailHandler} />
                            {errors.userEmail && <p className="error text-red-500 mt-1">{errors.userEmail}</p>}
                          </div>
                          <div className="from_group mb-5">
                            <label className="formLabel mb-2.5 block">{t("sign-in.password")}</label>
                            <div className="field_wrap relative">
                              <FormInput type={!password ? "password" : "text"} placeholder={t("sign-in.enter-password")} className={errors.userPassword ? "border-red-500" : ""} onChange={passwordHandler}/>
                              {!password ? 
                                <EyeIcon onClick={showPasswordHandler} className="size-6 text-gray-300 absolute [.english_&]:right-5 [.arabic_&]:right-auto [.arabic_&]:left-5 top-2/4 -translate-y-1/2 cursor-pointer" />
                                :
                                <EyeSlashIcon onClick={showPasswordHandler} className="size-6 text-gray-300 absolute [.english_&]:right-5 [.arabic_&]:right-auto [.arabic_&]:left-5 top-2/4 -translate-y-1/2 cursor-pointer" />
                              }
                            </div>
                            {errors.userPassword && <p className="error text-red-500 mt-1">{errors.userPassword}</p>}
                          </div>
                          <div className="from_group mb-5 flex items-center justify-between mt-17">
                            <div className="remember-me">
                              <div className="custom_checkbox_style relative">
                                <input type="checkbox" id="remember_me" className="hidden"/>
                                <label htmlFor="remember_me">
                                  <span className="ml-9">{t("sign-in.remember-me")}</span>
                                </label>
                              </div>  
                            </div>
                            <button type="submit" className="bg-primary-300 text-white rounded p-4 min-w-[142px]" onClick={formSubmitHandler}>{t("sign-in.login")}</button>
                          </div>
                          <div className="forgot_password">
                            <Link href={`/${lng}/forgot-password`} className="text-[#C40000] text-base">{t("sign-in.forgotten-password")}</Link>
                          </div>
                          <div className="forgot_password text-right mt-17">
                            <p className="text-base">{t("sign-in.a-new-member")} <Link href={`/${lng}/sign-up`} className="text-[#C40000]">{t("sign-in.create-your-account")}</Link></p>
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
  